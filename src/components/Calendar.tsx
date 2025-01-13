import { CiSquareChevLeft, CiSquareChevRight } from "react-icons/ci";

export default function Calendar() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center text-[14px]">
        <div><CiSquareChevLeft className="text-lg text-[#a7a9aa]" /></div>
        <div className="font-bold">Januari 2025</div>
        <div><CiSquareChevRight className="text-lg text-[#a7a9aa]" /></div>
      </div>
      <div className="flex flex-nowrap justify-between">
        <div>
          <div className="text-[12px]">Sun</div>
          <div className="text-[12px]">12</div>
        </div>
        <div>
          <div className="text-[12px]">Mon</div>
          <div className="text-[12px]">13</div>
        </div>
        <div>
          <div className="text-[12px]">Tue</div>
          <div className="text-[12px]">14</div>
        </div>
        <div>
          <div className="text-[12px]">Wed</div>
          <div className="text-[12px]">15</div>
        </div>
        <div>
          <div className="text-[12px]">Thurs</div>
          <div className="text-[12px]">16</div>
        </div>
        <div>
          <div className="text-[12px]">Fri</div>
          <div className="text-[12px]">17</div>
        </div>
        <div>
          <div className="text-[12px]">Sat</div>
          <div className="text-[12px]">18</div>
        </div>
      </div>
    </div>
  );
}