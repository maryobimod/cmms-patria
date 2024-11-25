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
import realTimeLineChartData from "@/lib/realtimeLineChartData";
import TicketListsType from "@/models/TicketListsType";

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
    const q = query(dbRef, orderByKey(), limitToLast(500));
    
    // Mengambil data secara realtime dari Firebase
    onValue(q, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const dataFormatted: TicketListsType[] = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...(value as Omit<TicketListsType, "">),
        }));
        // const dataSorted = dataFormatted.sort((a, b) => new Date(b.deviceDate).getTime() - new Date(a.deviceDate).getTime());
        const dataChart = realTimeLineChartData(dataFormatted);

        setChartData({
          labels: dataChart.labels,
          datasets: [
            {
              label: "PID 7",
              data: dataChart.pid7Value,
              borderColor: "#1c538a",
              fill: false,
            } as any,
            {
              label: "PID 8",
              data: dataChart.pid8Value,
              borderColor: "#a2c7ff",
              fill: false,
            } as any,
            {
              label: "PID 9",
              data: dataChart.pid9Value,
              borderColor: "#2f7ef4",
              fill: false,
            } as any,
            {
              label: "PID 10",
              data: dataChart.pid10Value,
              borderColor: "#30f2f2",
              fill: false,
            } as any,
            {
              label: "PID 11",
              data: dataChart.pid11Value,
              borderColor: "#74e0a5",
              fill: false,
            } as any,
            {
              label: "PID 12",
              data: dataChart.pid12Value,
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
          <div>PID 7</div>
        </div>
        <div className="flex justify-center items-center gap-1">
          <div className="w-1 p-1 bg-[#a2c7ff] rounded-full"></div>
          <div>PID 8</div>
        </div>
        <div className="flex justify-center items-center gap-1">
          <div className="w-1 p-1 bg-[#2f7ef4] rounded-full"></div>
          <div>PID 9</div>
        </div>
        <div className="flex justify-center items-center gap-1">
          <div className="w-1 p-1 bg-[#30f2f2] rounded-full"></div>
          <div>PID 10</div>
        </div>
        <div className="flex justify-center items-center gap-1">
          <div className="w-1 p-1 bg-[#74e0a5] rounded-full"></div>
          <div>PID 11</div>
        </div>
        <div className="flex justify-center items-center gap-1">
          <div className="w-1 p-1 bg-[#9b46bf] rounded-full"></div>
          <div>PID 12</div>
        </div>
      </div>
    </div>
  );
}
