import { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { IoCalendarOutline } from "react-icons/io5";

export default function DatePickerComp() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div 
      className="input max-w-[7rem] h-[2rem] flex justify-center items-center border rounded bg-transparent" 
      style={{ color: "#242424", fontWeight: "normal" }}>
        <div>
        <IoCalendarOutline />
        </div>
        <DatePicker
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
          dateFormat="MMM yyyy"
          showMonthYearPicker
          className="max-w-[4rem] min-w-[4rem]"
        />
    </div>
  );
}
