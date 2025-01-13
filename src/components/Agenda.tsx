import { TfiMore } from "react-icons/tfi";

export default function Agenda() {
  return (
    <div className="flex flex-col gap-3 text-[12px]">
      <div className="flex justify-between items-center text-[14px]">
        <div className="font-bold">PT. United Tractors Pandu Engineering</div>
        <div><TfiMore className="text-lg text-[#a7a9aa]" /></div>
      </div>
      <div className="flex gap-2">
        <div className="grow p-3 flex gap-2 items-center bg-[#c1d8fc] rounded">
          <div>
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30.6614 32.0833H4.37491C3.87455 32.0728 3.38531 31.9337 2.95425 31.6794C2.52319 31.4251 2.16482 31.0642 1.9136 30.6314C1.66238 30.1985 1.52677 29.7083 1.51981 29.2079C1.51286 28.7074 1.63478 28.2136 1.87387 27.774L15.3124 4.18542C15.5304 3.79688 15.848 3.47342 16.2324 3.2483C16.6169 3.02317 17.0544 2.90451 17.4999 2.90451C17.9454 2.90451 18.3829 3.02317 18.7674 3.2483C19.1518 3.47342 19.4694 3.79688 19.6874 4.18542L33.1624 27.774C33.4015 28.2136 33.5234 28.7074 33.5165 29.2079C33.5095 29.7083 33.3739 30.1985 33.1227 30.6314C32.8715 31.0642 32.5131 31.4251 32.082 31.6794C31.651 31.9337 31.1617 32.0728 30.6614 32.0833Z" fill="#BEC6C6" />
              <path d="M30.6617 32.8125H4.37522C3.74664 32.8024 3.13136 32.6299 2.58911 32.3118C2.04687 31.9937 1.5961 31.5408 1.28057 30.997C0.965033 30.4533 0.795463 29.8372 0.788321 29.2086C0.781179 28.5799 0.936708 27.9601 1.23981 27.4094L14.6856 3.82083C14.9698 3.32544 15.3797 2.91383 15.8739 2.62758C16.3681 2.34134 16.9291 2.1906 17.5002 2.1906C18.0713 2.1906 18.6323 2.34134 19.1265 2.62758C19.6207 2.91383 20.0306 3.32544 20.3148 3.82083L33.7971 27.4094C34.1002 27.9601 34.2557 28.5799 34.2486 29.2086C34.2414 29.8372 34.0719 30.4533 33.7563 30.997C33.4408 31.5408 32.99 31.9937 32.4478 32.3118C31.9055 32.6299 31.2903 32.8024 30.6617 32.8125ZM15.9544 4.54271L2.4721 28.1312C2.29395 28.4627 2.20433 28.8346 2.2119 29.2108C2.21948 29.5871 2.32399 29.955 2.51534 30.2791C2.70669 30.6031 2.97841 30.8723 3.30422 31.0606C3.63003 31.249 3.99892 31.3501 4.37522 31.3542H30.6981C31.0713 31.344 31.4357 31.2384 31.7566 31.0475C32.0774 30.8567 32.3441 30.5869 32.5312 30.2638C32.7183 29.9408 32.8197 29.5752 32.8255 29.2019C32.8314 28.8286 32.7417 28.46 32.5648 28.1312L19.0461 4.54271C18.8906 4.26987 18.6657 4.04304 18.3942 3.88525C18.1227 3.72747 17.8142 3.64435 17.5002 3.64435C17.1862 3.64435 16.8778 3.72747 16.6063 3.88525C16.3348 4.04304 16.1099 4.26987 15.9544 4.54271Z" fill="#414141" />
              <path d="M4.33887 29.1667L17.5003 6.24167L30.6035 29.1667H4.33887Z" fill="#F8F9F9" />
              <path d="M18.9583 22.6042H16.0417L15.3125 15.3125H19.6875L18.9583 22.6042Z" fill="#2F7EF4" />
              <path d="M17.5003 26.9792C18.3057 26.9792 18.9587 26.3262 18.9587 25.5208C18.9587 24.7154 18.3057 24.0625 17.5003 24.0625C16.6949 24.0625 16.042 24.7154 16.042 25.5208C16.042 26.3262 16.6949 26.9792 17.5003 26.9792Z" fill="#2F7EF4" />
              <path d="M5.83366 12.3958C5.64027 12.3958 5.45481 12.319 5.31806 12.1823C5.18132 12.0455 5.10449 11.8601 5.10449 11.6667C5.10449 10.6997 5.48861 9.7724 6.17233 9.08867C6.85606 8.40495 7.78339 8.02083 8.75033 8.02083C8.94371 8.02083 9.12918 8.09766 9.26592 8.2344C9.40267 8.37115 9.47949 8.55661 9.47949 8.75C9.47949 8.94339 9.40267 9.12885 9.26592 9.2656C9.12918 9.40234 8.94371 9.47917 8.75033 9.47917C8.17016 9.47917 7.61377 9.70964 7.20353 10.1199C6.79329 10.5301 6.56283 11.0865 6.56283 11.6667C6.56283 11.8601 6.486 12.0455 6.34926 12.1823C6.21251 12.319 6.02705 12.3958 5.83366 12.3958Z" fill="#414141" />
              <path d="M2.18717 12.3958C1.99379 12.3958 1.80832 12.319 1.67158 12.1823C1.53483 12.0455 1.45801 11.8601 1.45801 11.6667C1.45801 9.7328 2.22623 7.87813 3.59369 6.51068C4.96114 5.14323 6.8158 4.375 8.74967 4.375C8.94306 4.375 9.12853 4.45182 9.26527 4.58857C9.40202 4.72531 9.47884 4.91078 9.47884 5.10417C9.47884 5.29755 9.40202 5.48302 9.26527 5.61977C9.12853 5.75651 8.94306 5.83333 8.74967 5.83333C7.20258 5.83333 5.71885 6.44791 4.62489 7.54188C3.53092 8.63584 2.91634 10.1196 2.91634 11.6667C2.91634 11.8601 2.83952 12.0455 2.70277 12.1823C2.56603 12.319 2.38056 12.3958 2.18717 12.3958ZM29.1663 12.3958C28.973 12.3958 28.7875 12.319 28.6507 12.1823C28.514 12.0455 28.4372 11.8601 28.4372 11.6667C28.4372 11.0865 28.2067 10.5301 27.7965 10.1199C27.3862 9.70964 26.8298 9.47917 26.2497 9.47917C26.0563 9.47917 25.8708 9.40234 25.7341 9.2656C25.5973 9.12885 25.5205 8.94339 25.5205 8.75C25.5205 8.55661 25.5973 8.37115 25.7341 8.2344C25.8708 8.09766 26.0563 8.02083 26.2497 8.02083C26.7285 8.02083 27.2025 8.11514 27.6449 8.29836C28.0872 8.48158 28.4891 8.75013 28.8277 9.08867C29.1662 9.42722 29.4348 9.82913 29.618 10.2715C29.8012 10.7138 29.8955 11.1879 29.8955 11.6667C29.8955 11.8601 29.8187 12.0455 29.6819 12.1823C29.5452 12.319 29.3597 12.3958 29.1663 12.3958Z" fill="#414141" />
              <path d="M32.8122 12.3958C32.6188 12.3958 32.4333 12.319 32.2966 12.1823C32.1598 12.0455 32.083 11.8601 32.083 11.6667C32.083 10.1196 31.4684 8.63584 30.3745 7.54188C29.2805 6.44791 27.7968 5.83333 26.2497 5.83333C26.0563 5.83333 25.8708 5.75651 25.7341 5.61977C25.5973 5.48302 25.5205 5.29755 25.5205 5.10417C25.5205 4.91078 25.5973 4.72531 25.7341 4.58857C25.8708 4.45182 26.0563 4.375 26.2497 4.375C27.2072 4.375 28.1554 4.5636 29.0401 4.93005C29.9247 5.29649 30.7286 5.83359 31.4057 6.51068C32.0828 7.18777 32.6199 7.9916 32.9863 8.87627C33.3527 9.76093 33.5413 10.7091 33.5413 11.6667C33.5413 11.8601 33.4645 12.0455 33.3278 12.1823C33.191 12.319 33.0056 12.3958 32.8122 12.3958Z" fill="#414141" />
            </svg>
          </div>
          <div className="border rounded h-10 bg-white w-[3px]"></div>
          <div>
            <span className="block">Total Tickets</span>
            <span className="block">-</span>
          </div>
        </div>
        <div className="grow p-3 flex gap-3 items-center bg-[#c1d8fc] rounded">
          <div className="w-[35px]"></div>
          <div className="border rounded h-10 bg-white w-[3px]"></div>
          <div>
            <span className="block">Total Acknowledged</span>
            <span className="block">-</span>
          </div>
        </div>
      </div>
    </div>
  );
}