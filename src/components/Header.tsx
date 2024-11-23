import dayjs from "dayjs";
import { FaBell, FaMagnifyingGlass, FaPlus } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";
import { MessageIcon } from "./Icons";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const date = dayjs(new Date()).format("MMMM DD, YYYY");
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div className="flex items-center px-6 h-[3.5rem] border-b text-[12px] font-plus-jakarta-sans">
      <div className="grow">
        <div className="input w-[250px] h-[2rem] border rounded-2xl">
          <FaMagnifyingGlass />
          <input placeholder="Search..." type="text" />
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-1">
          <div><IoCalendarOutline /></div>
          <div>{date}</div>
        </div>
        <div>
          <MessageIcon />
        </div>
        <div>
          <FaBell />
        </div>
        {pathname === "/configuration/rule-engine" ? 
        <div className="flex items-center gap-3">
          <div className="flex flex-col text-end">
            <span>John Doe</span>
            <span>Admin</span>
          </div>
          <div className="relative">
            <div className="size-10 rounded-full inline-flex items-center justify-center text-2.5xl font-semibold border border-info-clarity bg-info-light text-info">
              A
            </div>
            <span className="absolute bottom-1 right-0 transform translate-y-1/2 size-2.5 rounded-full ring-2 ring-light bg-success">
            </span>
          </div>
        </div> : 
        <Link href="/configuration/rule-engine">
          <div className="card flex-row items-center gap-2 px-4 py-2 text-white bg-[#2f7ef4]">
            <FaPlus />
            <span>Add Rule Engine</span>
          </div>
        </Link>}
      </div>
    </div>
  )
}