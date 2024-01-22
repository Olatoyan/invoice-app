import { Link } from "react-router-dom";
import { useDarkMode } from "../../context/DarkModeContext";

type HomeInvoiceItemProps = {
  id: string;
  name: string;
  amount: number;
  status: string;
  dueDate: string;
};

function HomeInvoiceItem({
  id,
  name,
  amount,
  status,
  dueDate,
}: HomeInvoiceItemProps) {
  const { isDarkMode } = useDarkMode();

  return (
    <Link
      className={`flex cursor-pointer items-center justify-between rounded-[0.8rem] border border-transparent px-12 py-6 shadow-invoiceSh transition-all duration-300 hover:border-[#7c5dfa] ${isDarkMode ? "bg-[#1e2139]" : "bg-white"}`}
      to={`/invoice/${id}`}
    >
      <div className="flex items-center gap-20">
        <h3 className="text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem]">
          <span className="text-[#7e88c3]">#</span>
          <span className={`${isDarkMode ? "text-white" : "text-[#0c0e16]"}`}>
            {id}
          </span>
        </h3>

        <h3 className="text-[1.5rem] font-medium leading-[1.5rem] tracking-[-0.01rem]">
          <span
            className={`${isDarkMode ? "text-[#dfe3fa]" : "text-[#888eb0]"}`}
          >
            Due
          </span>
          <span
            className={`${isDarkMode ? "text-[#dfe3fa]" : "text-[#7e88c3]"}`}
          >
            {" "}
            {dueDate}
          </span>
        </h3>
        <h3
          className={`text-[1.5rem] leading-[1.5rem] tracking-[-0.01rem] text-[#858bb2] ${isDarkMode ? "text-white" : "text-[#858bb2]"}`}
        >
          {name}
        </h3>
      </div>

      <div className=" grid grid-cols-[1fr_14rem_auto] items-center gap-20">
        <h3
          className={`justify-self-end text-end text-[1.5rem] font-bold leading-[2.4rem] tracking-[-0.025rem] ${isDarkMode ? "text-white" : "text-[#0c0e16]"}`}
        >
          £ {(+amount).toFixed(2)}
        </h3>

        <div
          className={`flex items-center justify-center gap-4 rounded-[0.6rem] bg-opacity-[0.0571] px-12 py-6 ${status === "paid" ? "bg-[#33d69f]" : status === "pending" ? "bg-[#ff8f00]" : "bg-[#373b53]"} `}
        >
          <span
            className={`h-[0.8rem] w-[0.8rem] rounded-full ${status === "paid" ? "bg-[#33d69f]" : status === "pending" ? "bg-[#ff8f00]" : "bg-[#373b53]"}`}
          ></span>
          <span
            className={`text-[1.5rem] font-bold capitalize leading-[1.5rem] tracking-[-0.025rem] ${status === "paid" ? "text-[#33d69f]" : status === "pending" ? "text-[#ff8f00]" : "text-[#373b53]"}
          `}
          >
            {status}
          </span>
        </div>

        <img src="./icon-arrow-right.svg" alt="arrow icon" />
      </div>
    </Link>
  );
}

export default HomeInvoiceItem;
