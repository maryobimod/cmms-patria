import ParameterCategoryChart from "@/components/ParameterCategoryChart";
import ProcessChart from "@/components/ProcessChart";
import RealtimeLineChart1 from "@/components/RealtimeLineChart1";
import RealtimeLineChart2 from "@/components/RealtimeLineChart2";
import TicketStatusChart from "@/components/TicketStatusChart";
import { TfiMore } from "react-icons/tfi";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-2">
      <div className="bg-white rounded p-4">
        <div className="flex justify-between items-center">
          <div className="text-[14px] text-[#3A3F51] font-bold font-plus-jakarta-sans">CATEGORY WISE TICKET</div>
          <div><TfiMore className="text-lg text-[#a7a9aa]" /></div>
        </div>
        <div className="flex justify-around">
          <ProcessChart />
          <TicketStatusChart />
          <ParameterCategoryChart />
        </div>
      </div>
      <div className="bg-white rounded p-4">
        <div className="flex justify-between items-center">
          <div className="text-[14px] text-[#3A3F51] font-bold font-plus-jakarta-sans">PARAMETER TRACKING</div>
          <div><TfiMore className="text-lg text-[#a7a9aa]" /></div>
        </div>
        <div>
          <div className="my-2">
            <RealtimeLineChart1 />
          </div>
          <div>
            <RealtimeLineChart2 />
          </div>
        </div>
      </div>
    </div>
  );
}
