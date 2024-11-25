import { database2 } from "@/lib/firebase";
import { limitToLast, onValue, orderByKey, query, ref } from "firebase/database";
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import TicketListsType from "@/models/TicketListsType";
import dayjs from "dayjs";

// Registrasi skala dan elemen Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const setValue = (dataPID: TicketListsType[]) => {
  let value = 0;
  dataPID.forEach(pid => value += pid.value);
  if (value > 0) {
    value = value/dataPID.length;
  }

  return value.toFixed(2);
}

export default function RealtimeLineChart1() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
        borderColor: "#000",
        fill: false,
      },
    ],
  });

  useEffect(() => {
    const dbRef = ref(database2, "data");
    const q = query(dbRef, orderByKey(), limitToLast(3000));
    
    // Mengambil data secara realtime dari Firebase
    onValue(q, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const dataFormatted: TicketListsType[] = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...(value as Omit<TicketListsType, "">),
        }));

        const dataLabels = [];

        dataFormatted.forEach((item: TicketListsType) => {
          const timePerMinute = dayjs.utc(item.deviceDate).format("YYYY-MM-DD HH:mm");
          if (!dataLabels.includes(timePerMinute)) {
            dataLabels.push(timePerMinute);
          }
        });

        const labels = [];
        const pid1Value = [];
        const pid2Value = [];
        const pid3Value = [];
        const pid4Value = [];
        const pid5Value = [];
        const pid6Value = [];
        const pid7Value = [];
        const pid8Value = [];
        const pid9Value = [];
        const pid10Value = [];
        const pid11Value = [];
        const pid12Value = [];

        dataLabels.sort().forEach(time => {
          if (time) {
            const label = time.split(" ");
            labels.push(label[1])
      
            for (let i = 1; i <= 12; i++) {
              const dataPID = dataFormatted.filter(item => (item.pid === i) && (dayjs.utc(item.deviceDate).format("YYYY-MM-DD HH:mm") == time));
              const value = setValue(dataPID);
      
              switch (i) {
                case 1:
                  pid1Value.push(Number(value));
                  break;
                case 2:
                  pid2Value.push(Number(value));
                  break;
                case 3:
                  pid3Value.push(Number(value));
                  break;
                case 4:
                  pid4Value.push(Number(value));
                  break;
                case 5:
                  pid5Value.push(Number(value));
                  break;
                case 6:
                  pid6Value.push(Number(value));
                  break;
                case 7:
                  pid7Value.push(Number(value));
                  break;
                case 8:
                  pid8Value.push(Number(value));
                  break;
                case 9:
                  pid9Value.push(Number(value));
                  break;
                case 10:
                  pid10Value.push(Number(value));
                  break;
                case 11:
                  pid11Value.push(Number(value));
                  break;
                case 12:
                  pid12Value.push(Number(value));
                  break;
                default:
                  break;
              }
            }
          }
        });

        setChartData({
          labels: labels,
          datasets: [
            {
              label: "PID 1",
              data: pid1Value,
              borderColor: "#1c538a",
              fill: false,
            } as any,
            {
              label: "PID 2",
              data: pid2Value,
              borderColor: "#a2c7ff",
              fill: false,
            } as any,
            {
              label: "PID 3",
              data: pid3Value,
              borderColor: "#2f7ef4",
              fill: false,
            } as any,
            {
              label: "PID 4",
              data: pid4Value,
              borderColor: "#30f2f2",
              fill: false,
            } as any,
            {
              label: "PID 5",
              data: pid5Value,
              borderColor: "#74e0a5",
              fill: false,
            } as any,
            {
              label: "PID 6",
              data: pid6Value,
              borderColor: "#9b46bf",
              fill: false,
            } as any,
          ],
        });
      }
    });
  }, []);

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div>
      <div>
        <Line data={chartData} options={options} />
      </div>
      <div className="flex justify-center items-center gap-2 text-[12px] mt-1">
        <div className="flex justify-center items-center gap-1">
          <div className="w-1 p-1 bg-[#1c538a] rounded-full"></div>
          <div>PID 1</div>
        </div>
        <div className="flex justify-center items-center gap-1">
          <div className="w-1 p-1 bg-[#a2c7ff] rounded-full"></div>
          <div>PID 2</div>
        </div>
        <div className="flex justify-center items-center gap-1">
          <div className="w-1 p-1 bg-[#2f7ef4] rounded-full"></div>
          <div>PID 3</div>
        </div>
        <div className="flex justify-center items-center gap-1">
          <div className="w-1 p-1 bg-[#30f2f2] rounded-full"></div>
          <div>PID 4</div>
        </div>
        <div className="flex justify-center items-center gap-1">
          <div className="w-1 p-1 bg-[#74e0a5] rounded-full"></div>
          <div>PID 5</div>
        </div>
        <div className="flex justify-center items-center gap-1">
          <div className="w-1 p-1 bg-[#9b46bf] rounded-full"></div>
          <div>PID 6</div>
        </div>
      </div>
    </div>
  );
}
