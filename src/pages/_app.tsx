import "../styles/globals.css";

import type { AppProps } from "next/app";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import dynamic from "next/dynamic";
import Calendar from "../components/Calendar";
import Agenda from "../components/Agenda";
import { TiWarningOutline } from "react-icons/ti";
import TicketList from "../components/TicketList";

const GlobalInit = dynamic(() => import('../components/GlobalInit'), { ssr: false });

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <div className="flex grow">
      <Sidebar />
      <div style={{ width: "calc(100vw - 14rem)" }}>
        <Header />
        <main id="content" role="content" className="bg-[#F7F8FA] p-2 overflow-auto" style={{ maxHeight: "calc(100vh - 3.5rem)", height: "calc(100vh - 3.5rem)" }}>
          <div className="flex h-full gap-2">
            <div className="grow">
              <Component {...pageProps} />
            </div>
            <div className="w-[25rem] flex flex-col">
              <div className="p-4 mb-3 flex flex-col gap-5 bg-white rounded font-plus-jakarta-sans">
                <Calendar />
                <Agenda />
              </div>
              <div className="p-4 flex justify-between items-center bg-white rounded-t font-plus-jakarta-sans">
                <div className="font-bold text-[14px]">Ticket List</div>
                    <div className="text-[12px] text-[#a7a9aa]">View All</div>
              </div>
              <div className="grow px-4 bg-white rounded-b font-plus-jakarta-sans overflow-auto scroll-smooth">
                <TicketList />
              </div>
            </div>
          </div>
        </main>
        {/* <Footer /> */}
      </div>
    </div>
    {/* <SearchModal /> */}
    <GlobalInit />
  </>
}
