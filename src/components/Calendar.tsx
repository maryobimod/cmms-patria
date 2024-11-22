import { CiSquareChevLeft, CiSquareChevRight } from "react-icons/ci";

export default function Calendar() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center text-[14px]">
        <div><CiSquareChevLeft className="text-lg text-[#a7a9aa]" /></div>
        <div className="font-bold">October 2024</div>
        <div><CiSquareChevRight className="text-lg text-[#a7a9aa]" /></div>
      </div>
      <div className="flex flex-nowrap justify-between">
        <div>
          <div className="text-[12px]">Sun</div>
          <div className="text-[12px]">20</div>
        </div>
        <div>
          <div className="text-[12px]">Mon</div>
          <div className="text-[12px]">21</div>
        </div>
        <div>
          <div className="text-[12px]">Tue</div>
          <div className="text-[12px]">22</div>
        </div>
        <div>
          <div className="text-[12px]">Wed</div>
          <div className="text-[12px]">23</div>
        </div>
        <div>
          <div className="text-[12px]">Thurs</div>
          <div className="text-[12px]">24</div>
        </div>
        <div>
          <div className="text-[12px]">Fri</div>
          <div className="text-[12px]">25</div>
        </div>
        <div>
          <div className="text-[12px]">Sat</div>
          <div className="text-[12px]">26</div>
        </div>
      </div>
    </div>
  );
}