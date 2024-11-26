import Breadcrumbs from "@/components/Breadcrumbs";
import DataTables from "@/components/DataTables";
import DatePickerComp from "@/components/DatePickerComp";
import InputSearch from "@/components/InputSearch";
import SelectDataConfiguration from "@/components/SelectDataConfiguration";
import { FaPlus } from "react-icons/fa6";

export default function RuleEngine() {

  return (
    <div className="p-2 text-[12px] font-inter">
      <div className="flex justify-between mb-2">
        <div>
          <Breadcrumbs menu="CONFIGURATION" subMenu="RULE ENGINE" />
        </div>
        <button className="card flex-row items-center gap-2 px-4 py-2 text-white bg-[#2f7ef4]">
          <FaPlus />
          <span>Add New Data</span>
        </button>
      </div>
      <div className="p-4 bg-white rounded">
        <div className="flex items-center justify-between mb-4">
          <div className="text-[14px] font-bold">Rule Engine test</div>
          <div className="flex items-center gap-2">
            <InputSearch placeholder="Search by Rule Name" />
            <DatePickerComp />
            <SelectDataConfiguration />
          </div>
        </div>
        <DataTables />
      </div>
    </div>
  );
}
