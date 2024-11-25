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

export default function RealtimeLineChart() {
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
    const q = query(dbRef, orderByKey(), limitToLast(25));
    
    // Mengambil data secara realtime dari Firebase
    onValue(q, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const dataFormatted: TicketListsType[] = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...(value as Omit<TicketListsType, "">),
        }));
        const dataSorted = dataFormatted.sort((a, b) => new Date(b.deviceDate).getTime() - new Date(a.deviceDate).getTime());
        const dataChart = realTimeLineChartData(dataSorted);

        setChartData({
          labels: dataChart.labels,
          datasets: [
            // {
            //   label: "Batas Atas",
            //   data: [8,8,8,8,8,8,8,8,8,1000],
            //   borderColor: "red",
            //   borderDash: [5,5],
            //   fill: false,
            // } as any,
            // {
            //   label: "Batas Bawah",
            //   data: [0,0,0,0,0],
            //   borderColor: "red",
            //   borderDash: [5,5],
            //   fill: false,
            // } as any,
            {
              label: "PID 1",
              data: dataChart.pid1Value,
              borderColor: "#1c538a",
              fill: false,
            } as any,
            {
              label: "PID 2",
              data: dataChart.pid2Value,
              borderColor: "#a2c7ff",
              fill: false,
            } as any,
            {
              label: "PID 3",
              data: dataChart.pid3Value,
              borderColor: "#2f7ef4",
              fill: false,
            } as any,
            {
              label: "PID 4",
              data: dataChart.pid4Value,
              borderColor: "#30f2f2",
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
        display: false, // Sembunyikan legend
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <Line data={chartData} options={options} />
  );
}
