import Breadcrumbs from "@/components/Breadcrumbs";
import DatePickerComp from "@/components/DatePickerComp";
import IconEdit from "@/components/icons/IconEdit";
import IconInfo from "@/components/icons/IconInfo";
import IconTrash from "@/components/icons/IconTrash";
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
        <button
          className="card flex-row items-center gap-2 px-4 py-2 text-white bg-[#2f7ef4]"
          data-modal-toggle="#modal_1"
        >
          <FaPlus />
          <span>Add New Data</span>
        </button>
      </div>
      <div className="p-4 bg-white rounded">
        <div className="flex items-center justify-between mb-4">
          <div className="text-[14px] font-bold">Rule Engine</div>
          <div className="flex items-center gap-2">
            <InputSearch placeholder="Search by Rule Name" />
            <DatePickerComp />
            <SelectDataConfiguration />
          </div>
        </div>

        {/* Tables */}
        <div className="grid">
          <div className="card card-grid min-w-full rounded">
            <div className="card-body">
              <div
                data-datatable="true"
                data-datatable-page-size="5"
                data-datatable-state-save="true"
                id="datatable_1"
              >
                <div className="scrollable-x-auto">
                  <table
                    className="table table-auto table-border"
                    data-datatable-table="true"
                  >
                    <thead className="border-none">
                      <tr>
                        <th>
                          <span className="sort">
                            <span className="sort-label">ID</span>
                            <span className="sort-icon"></span>
                          </span>
                        </th>
                        <th>
                          <span className="sort">
                            <span className="sort-label">Rule Name</span>
                            <span className="sort-icon"></span>
                          </span>
                        </th>
                        <th>
                          <span className="sort">
                            <span className="sort-label">Description</span>
                            <span className="sort-icon"></span>
                          </span>
                        </th>
                        <th>
                          <div className="text-center">
                            <span className="sort">
                              <span className="sort-label">Action</span>
                              <span className="sort-icon"></span>
                            </span>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>RE001</td>
                        <td>Check Overloaded Water Pressure</td>
                        <td>Check Overloaded Water Pressure</td>
                        <td>
                          <div className="flex items-center justify-center flex-nowrap">
                            <button className="hover:bg-[#eeeeee] hover:rounded p-[2px]">
                              <IconInfo />
                            </button>
                            <button className="hover:bg-[#eeeeee] hover:rounded p-[2px]">
                              <IconEdit />
                            </button>
                            <button className="hover:bg-[#eeeeee] hover:rounded p-[2px]">
                              <IconTrash />
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="card-footer justify-center md:justify-between flex-col md:flex-row gap-3 text-gray-600 text-2sm font-medium">
                  <div className="flex items-center gap-2">
                    Show
                    <select
                      className="select select-sm w-16"
                      data-datatable-size="true"
                      name="perpage"
                    ></select>
                    per page
                  </div>
                  <div className="flex items-center gap-4">
                    <span data-datatable-info="true"></span>
                    <div
                      className="pagination"
                      data-datatable-pagination="true"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        <div className="modal" data-modal="true" id="modal_1">
          <div className="modal-content max-w-[600px] top-[20%] rounded">
            <div className="modal-header flex justify-center">
              <h3 className="modal-title">
                Rule - Type 1 (Via FA/Redis) - Simple Matemathical Rule
              </h3>
              {/* <button
                className="btn btn-xs btn-icon btn-light"
                data-modal-dismiss="true"
              >
                <i className="ki-outline ki-cross"></i>
              </button> */}
            </div>
            <div className="modal-body">
              <form action=""></form>
            </div>
            <div className="modal-footer justify-end">
              <div className="flex gap-2">
                  <button
                    className="card gap-2 px-4 py-2 bg-[#fae27c]"
                    data-modal-dismiss="true"
                  >
                    <span>Cancel</span>
                  </button>
                  <button
                    className="card gap-2 px-4 py-2 bg-[#2f7ef4] text-white"
                  >
                    <span>Submit</span>
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
