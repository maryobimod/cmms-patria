import Breadcrumbs from "@/components/Breadcrumbs";
import DatePickerComp from "@/components/DatePickerComp";
import IconEdit from "@/components/icons/IconEdit";
import IconInfo from "@/components/icons/IconInfo";
import IconTrash from "@/components/icons/IconTrash";
import InputSearch from "@/components/InputSearch";
import SelectDataConfiguration from "@/components/SelectDataConfiguration";
import { FaPlus } from "react-icons/fa6";
import { GoTrash } from "react-icons/go";
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import dynamic from 'next/dynamic';
import React from "react";

const Select = dynamic(() => import('react-select'), { ssr: false });

interface Formulas {
  index: number;
  name: string;
  operator: string;
  value: number;
  unit: string;
}

interface Values {
  ruleName: string;
  deviceModel: string;
  description: string;
  formulas: Formulas[];
}

export default function RuleEngine() {
  const [formulasArray, setFormulasArray] = React.useState<any[]>([
    { index: 0, name: '', operator: '', value: null, unit: '' },
  ]);

  const modelOptions: {
    value: string;
    label: string;
  }[] = [
    { value: "Model 1", label: "Model 1" },
    { value: "Model 2", label: "Model 2" },
    { value: "Model 3", label: "Model 3" },
  ];

  const formulaOptions: {
    value: string;
    label: string;
  }[] = [
    { value: "Temperature", label: "Temperature" },
    { value: "Pressure", label: "Pressure" },
    { value: "Voltage", label: "Voltage" },
    { value: "Current", label: "Current" },
    { value: "Power Consumption", label: "Power Consumption" },
  ];

  const operatorOptions: {
    value: string;
    label: string;
  }[] = [
    { value: "=", label: "=" },
    { value: ">=", label: ">=" },
    { value: "<=", label: "<=" },
    { value: ">", label: ">" },
    { value: "<", label: "<" },
    { value: "!=", label: "!=" },
  ];

  return (
    <div className="p-2 text-[12px] font-inter">
      <div className="flex justify-between mb-2">
        <div>
          <Breadcrumbs menu="CONFIGURATION" subMenu="RULE ENGINE" />
        </div>
        <button
          className="card flex-row items-center gap-2 px-4 py-2 text-white bg-[#2f7ef4]"
          data-modal-toggle="#modal_1"
          onClick={() => {
            setFormulasArray(["formula1"]);
          }}
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
            </div>
            <div className="modal-body">
              <Formik
                initialValues={{ 
                  ruleName: '',
                  deviceModel: '',
                  description: '',
                  formulas: [],
                }}
                validationSchema={Yup.object({
                  ruleName: Yup.string()
                    .required('Required'),
                  deviceModel: Yup.string()
                    .required('Required'),
                  description: Yup.string()
                    .required('Required'),
                })}
                validateOnChange={false}
                validateOnBlur={false}  
                onSubmit={(
                  values: Values,
                  { setSubmitting }: FormikHelpers<Values>
                ) => {
                  console.log(values);
                }}
              >
                 {({ setFieldValue, setFieldTouched, resetForm, errors, touched, values }) => (
                  <Form>
                    {/* <div className="grid grid-cols-2 gap-2 mb-2">
                      <div>
                        <label htmlFor="ruleName">Rule Name</label>
                        <Field name="ruleName" type="text" className="input" />
                        <ErrorMessage name="ruleName" component="div" className="text-red-500" />
                      </div>
                      <div>
                        <label htmlFor="deviceModel">Device Model</label>
                        <Select
                          name="deviceModel"
                          options={modelOptions}
                          styles={{
                            control: (provided) => ({
                              ...provided,
                              height: '40px', 
                              minHeight: '40px',
                            }),
                          }}
                          placeholder="Choose Device Model"
                          className="min-w-fit"
                          value={modelOptions.find(option => option.value === values.deviceModel) || ''}
                          onChange={(option: {value: string}) => setFieldValue('deviceModel', option.value)} 
                          onBlur={() => setFieldTouched('deviceModel', true)}
                        />
                        {errors.deviceModel && touched.deviceModel ? ( 
                          <div className="text-red-500">{errors.deviceModel}</div>
                        ) : null}
                      </div>
                    </div> */}
                    {/* <div className="grid grid-cols-2 gap-2 mb-2">
                      <div>
                        <label htmlFor="description">Description</label>
                        <Field name="description" as="textarea" type="text" className="input py-2 h-24" />
                        <ErrorMessage name="description" component="div" className="text-red-500" />
                      </div>
                      <div>
                        <label htmlFor="targetDeviceID">Target Device ID</label>
                      </div>
                    </div> */}
                    <div>
                      <label>Formula</label>
                      <div className="flex flex-col gap-2">
                        {formulasArray.map((formula, index) => {
                          return (
                            <div key={index} className="grid grid-cols-12 gap-2">
                              {/* Formula */}
                              <Select
                                name={`formulas.${formula}.name` as string}
                                options={formulaOptions}
                                styles={{
                                  control: (provided) => ({
                                    ...provided,
                                    height: '40px', 
                                    minHeight: '40px',
                                  }),
                                }}
                                placeholder="Formula"
                                className="min-w-fit col-span-5"
                                defaultValue={formulaOptions.find(option => option.value === formulasArray[index]?.name) || ''}
                                onChange={(option: {value: string}) => {
                                  let unit = '...';
                                  switch (option.value) {
                                    case 'Temperature':
                                      unit = 'C';
                                      break;
                                    case 'Pressure':
                                      unit = 'Pa';
                                      break;
                                    case 'Voltage':
                                      unit = 'V';
                                      break;
                                    case 'Current':
                                      unit = 'A';
                                      break;
                                    case 'Power Consumption':
                                      unit = 'kWh';
                                      break;
                                    default:
                                      unit = '...';
                                      break;
                                  }

                                  formulasArray[index] = {
                                    index,
                                    name: option.value,
                                    operator: formulasArray[index]?.operator || '',
                                    value: formulasArray[index]?.value || null,
                                    unit: unit,
                                  }

                                  setFormulasArray([...formulasArray]);
                                  console.log(formulasArray);
                                }}
                              />
                              {/* Operator */}
                              <Select
                                name={`formulas.${formula}.operator` as string}
                                options={operatorOptions}
                                styles={{
                                  control: (provided) => ({
                                    ...provided,
                                    height: '40px', 
                                    minHeight: '40px',
                                  }),
                                }}
                                placeholder="Operator"
                                className="min-w-fit col-span-3"
                                defaultValue={operatorOptions.find(option => option.value === formulasArray[index]?.operator) || ''}
                                onChange={(option: {value: string}) => {
                                  formulasArray[index] = {
                                    index,
                                    name: formulasArray[index]?.name || '',
                                    operator: option.value,
                                    value: formulasArray[index]?.value || null,
                                    unit: formulasArray[index]?.unit || '',
                                  }

                                  setFormulasArray([...formulasArray]);
                                  console.log(formulasArray);
                                }}
                              />
                              <Field 
                                name={`formulas.${formula}.value` as string}
                                type="number"
                                className="input col-span-2"
                                placeholder="Value"
                                onChange={(e: any) => {
                                  formulasArray[index] = {
                                    index,
                                    name: formulasArray[index]?.name || '',
                                    operator: formulasArray[index]?.operator || '',
                                    value: Number(e.target.value),
                                    unit: formulasArray[index]?.unit || '',
                                  }
                                }}
                              />
                              <div className="col-span-1 flex justify-center items-center">
                                <span>{formulasArray[index]?.unit || '...'}</span>
                              </div>
                              {index == 0 ? 
                                <button 
                                  type="button"
                                  className="col-span-1 input flex justify-center items-center bg-[#17a497] rounded"
                                  onClick={() => {
                                    const number = formulasArray.length + 1;
                                    const newFormula = `formula${number}`;
                                    setFormulasArray([...formulasArray, newFormula]);
                                  }}
                                ><FaPlus className="text-white text-lg font-bold" /></button> 
                                : 
                                <button
                                  type="button"
                                  className="col-span-1 input flex justify-center items-center bg-[#f7473a] rounded"
                                  onClick={() => {
                                    console.log("delete")
                                  }}
                                ><GoTrash className="text-white text-lg font-bold" /></button>
                              }
                            </div>
                          )
                        })}
                      </div>
                    </div>
            
                    <div className="flex justify-end mt-5">
                      <div className="flex gap-2">
                          <button
                            type="button"
                            className="card gap-2 px-4 py-2 bg-[#fae27c]"
                            data-modal-dismiss="true"
                            onClick={() => {
                              setFormulasArray([{ index: 0, name: '', operator: '', value: null, unit: '' }]);
                              resetForm();
                              setFieldValue('deviceModel', ''); 
                            }} 
                          >
                            <span>Cancel</span>
                          </button>
                          <button
                            type="submit"
                            className="card gap-2 px-4 py-2 bg-[#2f7ef4] text-white"
                          >
                            <span>Submit</span>
                          </button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
