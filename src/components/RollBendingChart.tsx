import React, { useEffect, useRef, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const RollBendingCharts = () => {
  const chartComponentRef = useRef(null);
  const [categories, setCategories] = useState(['07:00', '07:01', '07:02', '07:03', '07:04', '07:05']);
  const [seriesData, setSeriesData] = useState([
    [45, 67, 85, 43, 76, 56], // Data untuk Series 1
    [23, 54, 67, 78, 56, 45], // Data untuk Series 2
    [34, 45, 56, 23, 78, 34], // Data untuk Series 3
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const chart = chartComponentRef.current.chart;

      // Generate new random values for each series
      const newSeriesData = seriesData.map(series => [...series.slice(1), Math.floor(Math.random() * 100)]);
      setSeriesData(newSeriesData);

      // Update data for each series in the chart
      chart.series.forEach((series, index) => {
        series.setData(newSeriesData[index], false);
      });

      // Add new time category
      setCategories(prevCategories => {
        const lastTime = prevCategories[prevCategories.length - 1];
        const newTime = getNextMinute(lastTime);
        return [...prevCategories.slice(1), newTime];
      });

      chart.xAxis[0].setCategories(categories, false);
      chart.redraw();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [categories, seriesData]);

  const getNextMinute = (time) => {
    const [hour, minute] = time.split(':').map(Number);
    const newMinute = (minute + 1) % 60;
    const newHour = newMinute === 0 ? (hour + 1) % 24 : hour;
    return `${String(newHour).padStart(2, '0')}:${String(newMinute).padStart(2, '0')}`;
  };

  const options = {
    chart: {
      type: 'spline',
      reflow: true, // Aktifkan reflow untuk mengikuti lebar div pembungkus
      height: '300px',
      marginRight: 0
    },
    title: {
      text: null
    },
    xAxis: {
      categories: categories,
    },
    yAxis: {
      title: {
        text: 'Values'
      }
    },
    series: [
      {
        name: 'Series 1',
        data: seriesData[0]
      },
      {
        name: 'Series 2',
        data: seriesData[1]
      },
      {
        name: 'Series 3',
        data: seriesData[2]
      }
    ],
    credits: {
      enabled: false,
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '800px', display: 'inline-block' }}>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartComponentRef}
      />
    </div>
  );
};

export default RollBendingCharts;
