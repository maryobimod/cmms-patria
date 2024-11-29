import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FiSettings } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";

export default function Sidebar() {
  const router = useRouter();
  const pathname = router.pathname;
  const [isShownConfigurationMenu, setIsShownConfigurationMenu] = useState(false);
  useEffect(() => {
    if (pathname.includes("/configuration")) {
      setIsShownConfigurationMenu(true);
    } else {
      setIsShownConfigurationMenu(false);
    }
  }, [pathname]);

  const configurationMenus: {
      menu: string;
      link: string;
  }[] = [
    {
      menu: "DEVICE MODEL PARAMETER",
      link: "/configuration/device-model-parameter"
    },
    {
      menu: "PARSER",
      link: "/configuration/parser"
    },
    {
      menu: "DEVICE MODEL",
      link: "/configuration/device-model"
    },
    {
      menu: "DEVICE PROVISION",
      link: "/configuration/device-provision"
    },
    {
      menu: "TELEMATICS PARAMETER",
      link: "/configuration/telematics-parameter"
    },
    {
      menu: "ASSIGN TELEMATICS",
      link: "/configuration/assign-telematics"
    },
    {
      menu: "RULE ENGINE",
      link: "/configuration/rule-engine"
    },
  ];

  return (
    <div className="border-r h-screen flex flex-col w-[14rem]">
      <div className="grow">
        <div className="flex items-center font-plus-jakarta-sans px-6 h-[3.5rem] text-[25px] font-bold border-b">
          <Link href="/">
            <span>CMM</span>
            <span className="text-[#2f7ef4]">System</span>
          </Link>
        </div>
        <div className="font-inter px-6 py-6 text-[12px]">
          <div className="flex flex-col gap-4">
            <div className="mb-1">
              <span className="font-medium text-[#737373]">MAIN MENUS</span>
            </div>
            <Link 
              href="/"
              className={`relative flex gap-3 items-center group cursor-pointer ${pathname === "/" ? ' text-[#2f7ef4]' : 'text-[#A3A3A3]'} hover:text-[#2f7ef4]`}
              onClick={() => setIsShownConfigurationMenu(false)}
              >
              <div className={`absolute -left-4 top-1.25 border rounded-full h-2 w-2 bg-[#2f7ef4] ${pathname === "/" ? "opacity-100" : "opacity-0"} group-hover:opacity-100 transition-opacity duration-300`}></div>
              <div><RxDashboard className="text-md" /></div>
              <div><span className="font-medium">DASHBORD</span></div>
            </Link>
            <div className="flex flex-col group gap-4">
              <div 
                className={`relative flex gap-3 items-center cursor-pointer ${pathname.includes("/configuration") ? ' text-[#2f7ef4]' : 'text-[#A3A3A3]'} group-hover:text-[#2f7ef4]`}
                onClick={() => setIsShownConfigurationMenu(true)}
                >
                <div className={`absolute -left-4 top-1.25 border rounded-full h-2 w-2 bg-[#2f7ef4] ${pathname.includes("/configuration") ? "opacity-100" : "opacity-0"} group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div><FiSettings className="text-md"/></div>
                <div><span className="font-medium">CONFIGURATION</span></div>
              </div>
              <div className="flex flex-col gap-3">
                {configurationMenus.map((menu, index) => {
                  return (
                    <Link href={menu.link} key={index} className={`block w-full font-medium cursor-pointer ${pathname === `${menu.link}` ? ' text-[#2f7ef4]' : 'text-[#A3A3A3]'} hover:text-[#2f7ef4]`}>
                    <span className="text-nowrap">{menu.menu}</span>
                  </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 py-4 flex items-center gap-3 text-[12px]">
        <div className="relative w-fit h-fit">
          <div className="size-12 rounded-full inline-flex items-center justify-center text-2.5xl font-semibold border border-info-clarity bg-info-light text-info">
            A
          </div>
          <span className="absolute bottom-1 right-0 transform translate-y-1/2 size-2.5 rounded-full ring-2 ring-light bg-success">
          </span>
        </div>
        <div>
          <span className="block text-nowrap">John Doe</span>
          <span className="block text-nowrap">johndeo@gmail.com</span>
          <span className="block text-nowrap">Admin</span>
        </div>
      </div>
    </div>
  )
  
}
