import Select from "react-select";

export default function SelectDataConfiguration() {
  const options = [
    { value: "All", label: "All Rule Engine" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      minHeight: "2rem",
      maxHeight: "2rem",
      height: "2rem", 
      backgroundColor: "transparent"
    }),
    valueContainer: (provided: any) => ({
      ...provided,
      height: "2rem", 
      margin: "0",  
      padding: "0 0.5rem",
    }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      height: "2rem", 
      margin: "-5px 0 0 0",
    }),
    input: (provided: any) => ({
      ...provided,
      margin: "0",
      padding: "0",
    }),
    singleValue: (provided: any) => ({
      ...provided,
      lineHeight: "2rem",  
      color: "#242424"
    })
  };

  return (
    <Select
      placeholder="Pilih Opsi"
      options={options}
      styles={customStyles}
      className="min-w-fit"
    />
  );
}
