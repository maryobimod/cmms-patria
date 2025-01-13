import { database1 } from "@/lib/firebase";
import { ref, onValue, query, orderByKey, limitToLast, get } from "firebase/database";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import TicketListIcon from "./TicketListIcon";
import TicketListsType from "@/models/TicketListsType";

dayjs.extend(utc);
dayjs.extend(timezone);

export default function TicketList() {
  const [TicketListsType, setTicketListsType] = useState([]);
  useEffect(() => {
    // Referensi ke node "items" di Realtime Database
    const dbRef = ref(database1, "data");
    const q = query(dbRef, orderByKey(), limitToLast(100));
    const unsubscribe = onValue(q, async (snapshot) => {
        const data = await snapshot.toJSON();
        if (snapshot.exists()) {
          const dataFormatted: TicketListsType[] = Object.entries(data).map(([key, value]) => ({
            id: key,
            ...(value as Omit<TicketListsType, "">),
          }));
          const dataSorted = dataFormatted.sort((a, b) => new Date(b.deviceDate).getTime() - new Date(a.deviceDate).getTime());
          setTicketListsType(dataSorted.filter(item => item.incident == "Not Normal"));
        } else {
          setTicketListsType([]);
        }
    });

    // Bersihkan listener saat komponen unmount
    return () => unsubscribe();
  }, [])

  return (
    <div>
      <div>
        {TicketListsType.map(ticket => {
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
            <div key={ticket.id}>
              <div className="flex gap-3 mb-3">
                <TicketListIcon iconBgColor={iconBgColor} iconTextColor={iconTextColor} pid={ticket.pid} />
                <div className="grow">
                  <div className="flex justify-between items-center">
                    <div className="text-[12px] font-bold">{ticket.description}</div>
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