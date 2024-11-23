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

export default function RealtimeChart() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
        borderColor: "rgb(75, 192, 192)",
        fill: false,
      },
    ],
  });

  useEffect(() => {
    const dbRef = ref(database2, "data");
    const q = query(dbRef, orderByKey(), limitToLast(500));
    
    // Mengambil data secara realtime dari Firebase
    onValue(q, (snapshot) => {
      const rawData = snapshot.val();
      if (rawData) {
        const dataArray = Object.values(rawData); // Ambil data dalam bentuk array
console.log(dataArray)
        // // Mengubah timestamp dan value menjadi label dan data chart
        // const timestamps = dataArray.map(item => item.timestamp);
        // const values = dataArray.map(item => item.value);

        setChartData({
          labels: ["07:02", "07:04", "07:06", "07:08", "08:00"],
          datasets: [
            {
              label: "Batas Atas",
              data: [8,8,8,8,8],
              borderColor: "red",
              borderDash: [5,5],
              fill: false,
            } as any,
            {
              label: "Batas Bawah",
              data: [0,0,0,0,0],
              borderColor: "red",
              borderDash: [5,5],
              fill: false,
            } as any,
            {
              label: "PID 1",
              data: [2,3,3,4,5],
              borderColor: "rgb(75, 192, 192)",
              fill: false,
            } as any,
            {
              label: "PID 2",
              data: [1,2,12,8,7],
              borderColor: "rgb(75, 192, 192)",
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
  };

  return <Line data={chartData} options={options} />;
}
