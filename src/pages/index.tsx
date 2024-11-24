import ParameterCategoryChart from "@/components/ParameterCategoryChart";
import ProcessChart from "@/components/ProcessChart";
import RealtimeLineChart from "@/components/RealtimeLineChart";
import RealtimeLineChart1 from "@/components/RealtimeLineChart1";
import RollBendingChart from "@/components/RollBendingChart";
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
      <div className="bg-white rounded p-4 h-full">
        <div className="flex justify-between items-center">
          <div className="text-[14px] text-[#3A3F51] font-bold font-plus-jakarta-sans">PARAMETER TRACKING</div>
          <div><TfiMore className="text-lg text-[#a7a9aa]" /></div>
        </div>
        {/* style={{ height: "calc(100vh - 23rem)"}} */}
        <div >
          <RealtimeLineChart />
          {/* <RealtimeLineChart1 /> */}
          {/* <RollBendingChart /> */}
          {/* <RollBendingChart /> */}
        </div>
      </div>
    </div>
  );
}
