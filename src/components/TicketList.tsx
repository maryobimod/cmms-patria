import { TiWarningOutline } from "react-icons/ti";
import { database } from "@/lib/firebase";
import { ref, onValue, query, orderByKey, limitToLast, get } from "firebase/database";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

interface TicketLists {
  id: number,
  description: string,
  operator: string,
  acknowledgedBy: string,
  pid: number,
  deviceDate: string
}

export default function TicketList() {
  const [ticketLists, setTicketLists] = useState([]);
  useEffect(() => {
    // Referensi ke node "items" di Realtime Database
    const dbRef = ref(database, "data");
    const q = query(dbRef, orderByKey(), limitToLast(100));
    const unsubscribe = onValue(q, async (snapshot) => {
        const data = await snapshot.toJSON();
        if (snapshot.exists()) {
          const dataFormatted: TicketLists[] = Object.entries(data).map(([key, value]) => ({
            id: key,
            ...(value as Omit<TicketLists, "">),
          }));
          const dataSorted = dataFormatted.sort((a, b) => new Date(b.deviceDate).getTime() - new Date(a.deviceDate).getTime());
          setTicketLists(dataSorted);
        } else {
          setTicketLists([]);
        }
    });

    // Bersihkan listener saat komponen unmount
    return () => unsubscribe();
  }, [])

  return (
    <div>
      <div>
        {ticketLists.map(ticket => {
          let iconBgColor = '';
          let iconTextColor = '';
          switch (ticket.incident) {
            case "Not Normal":
                iconBgColor = 'bg-[#f7473a]';
                iconTextColor = 'text-white';
              break;
            case "Normal":
                iconBgColor = 'bg-[#ffc830]';
                iconTextColor = 'text-black';
              break;
            case "":
                iconBgColor = 'bg-[#2f7ef4]';
                iconTextColor = 'text-white';
              break;
            default:
              break;
          }
          return (
            <div key={ticket.id} 
            // className="delay-75 opacity-1 animate-fade-in transform transition-all duration-300"
            >
              <div className="flex gap-3 mb-3">
                <div className={`max-h-[48px] min-h-[48px] max-w-[48px] min-w-[48px] flex items-center justify-center rounded-full ${iconBgColor}`}>
                  <TiWarningOutline className={`-mt-0.5 text-2xl ${iconTextColor}`} />
                </div>
                <div className="grow">
                  <div className="flex justify-between items-center">
                    <div className="text-[12px] font-bold">{ticket.description}</div>
                    {/* <div className="text-[9px] text-[#a7a9aa]">TickedID: {ticket.id}</div> */}
                  </div>
                  <div className="grid grid-cols-2 items-top text-[10px] text-[#a7a9aa]">
                    <div className="col-1">
                      <div>Operator: {ticket.operator || "N/A" }</div>
                      <div>Acknowledged by: {ticket.acknowledgedBy || "N/A" }</div>
                    </div>
                    <div className="col-1">
                      <div>Machine ID: {ticket.Devicename}</div>
                      <div>Time Stamp: {dayjs.utc(ticket.deviceDate).format("YYYY-MM-DD HH:mm:ss")}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}