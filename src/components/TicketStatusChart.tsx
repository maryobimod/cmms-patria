import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Image from 'next/image';

const options = {
  chart: {
    type: 'pie',
    reflow: true,
    height: '130px',
    padding: 0,
    margin: 0,
    backgroundColor: 'transparent',
  },
  title: {
    text: null,
  },
  legend: {
    enabled: true,
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
    itemStyle: {
      fontWeight: 'bold',
      fontSize: '12px',
      color: '#333',
    },
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      borderWidth: 0,
      innerSize: '45%',
      dataLabels: {
        enabled: true,
        crop: false,
        distance: '-25%',
        style: {
          fontWeight: 'bold',
          fontSize: '12px',
        },
        connectorWidth: 0,
        format: '{point.percentage:.1f}%',
      },
      borderRadius: 0,
    },
  },
  colors: ['#2656b5', '#2f7ef4'],
  series: [
    {
      name: 'Process',
      data: [
        { name: 'Critical', y: 1 }, 
        { name: 'Medium', y: 2},
      ],
    },
  ],
  credits: {
    enabled: false,
  },
  tooltip: {
    // Kustomisasi tooltip agar menampilkan custom name
    pointFormat: '{point.customName}: {point.y} units ({point.percentage:.1f}%)', 
    followPointer: true,
    backgroundColor: '#f1f1f1',
    borderColor: '#ccc',
    borderRadius: 10,
    style: {
      fontSize: '14px',
      fontFamily: 'Arial, sans-serif',
      padding: '10px',
    },
  },
};

export default function TicketStatusChart() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div style={{ width: '130px', display: 'inline-block' }} className="relative">
        <HighchartsReact 
          highcharts={Highcharts}
          options={options}
          containerProps={{
            style: {
              zIndex: 101,
              position: 'relative',
            },
          }} 
        />
        <div 
          className='absolute flex top-[50px] left-[50px]'
          style={{ zIndex: 100 }}
        >
          <Image 
            src="/images/gears.png" 
            alt="gear" 
            width={30}
            height={30} 
          />
        </div>
      </div>
      <div className='-mt-1'>
        <div className='text-[12px] text-center text-[#7D848B] font-inter'>TICKET STATUS</div>
        {/* <div className='text-[12px] text-center'>(2 Tickets)</div> */}
        <div className='text-[12px] text-center'>-</div>
      </div>
      <div className='flex items-center gap-2'>
        <div className='flex items-center gap-2'>
          <div className='w-2 h-2 rounded-full bg-[#2656b5]'></div>
          <div className='text-[12px]'>Open</div>
        </div>
        <div className='flex items-center gap-2'>
          <div className='w-2 h-2 rounded-full bg-[#2f7ef4]'></div>
          <div className='text-[12px]'>Close</div>
        </div>
      </div>
    </div>
  );
}
