import { FaMagnifyingGlass } from "react-icons/fa6";

interface InputProps {
  placeholder: string
}

export default function InputSearch({ placeholder }: InputProps) {
  return (
    <div className="input h-[2rem] border rounded-2xl bg-transparent">
      <FaMagnifyingGlass />
      <input placeholder={placeholder} type="text" />
    </div>
  );
}
