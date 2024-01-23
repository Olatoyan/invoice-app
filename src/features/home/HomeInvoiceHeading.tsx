import { motion } from "framer-motion";
import { Dispatch, useState } from "react";
import { useDarkMode } from "../../context/DarkModeContext";

function HomeInvoiceHeading({
  numInvoices,
  setCreateInvoice,
  setSelectedCheckbox,
  selectedCheckbox,
}: {
  numInvoices: number | undefined;
  setCreateInvoice: Dispatch<React.SetStateAction<boolean>>;
  setSelectedCheckbox: React.Dispatch<
    React.SetStateAction<"all" | "pending" | "paid" | "draft" | undefined>
  >;
  selectedCheckbox: "all" | "pending" | "paid" | "draft" | undefined;
}) {
  const [isBoxOpened, setIsBoxOpened] = useState(false);
  // const [selectedCheckbox, setSelectedCheckbox] = useState("all");

  const handleCheckboxChange = (id: "all" | "pending" | "paid" | "draft") => {
    setSelectedCheckbox(id);
    toggleBox();
  };

  // function filterStatus() {}

  function toggleBox() {
    setIsBoxOpened((prev) => !prev);
  }

  const { isDarkMode } = useDarkMode();

  const isSmallScreen = window.innerWidth < 780;

  return (
    <section className="flex justify-between pb-28 pt-32">
      <div className="">
        <h1
          className={`mobile:text-[2.4rem] mobile:tracking-[-0.075rem] text-[3.6rem] font-bold tracking-[-0.1125rem] ${isDarkMode ? "text-white" : "text-[#0c0e16]"}`}
        >
          Invoices
        </h1>
        <p
          className={`text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#888eb0] ${isDarkMode ? "text-[#dfe3fa]" : "text-[#888eb0]"}`}
        >
          {isSmallScreen
            ? `${numInvoices} invoices`
            : `There are ${numInvoices} total invoices`}
        </p>
      </div>

      <div className="mobile:gap-6 relative flex items-center gap-16">
        <button className="flex items-center gap-5" onClick={toggleBox}>
          <span
            className={`text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem]  ${isDarkMode ? "text-white" : "text-[#0c0e16]"}`}
          >
            {isSmallScreen ? "Filter" : "Filter by status"}
          </span>
          <motion.img
            src="./icon-arrow-down.svg"
            alt="arrow down"
            initial={{ rotate: 0 }}
            animate={{ rotate: isBoxOpened ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut", type: "spring" }}
          />
        </button>
        <motion.button
          className="tablet:gap-4 flex items-center gap-8 rounded-[2.4rem] bg-[#7c5dfa] px-4 py-3 hover:bg-[#9277ff]"
          onClick={() => setCreateInvoice(true)}
        >
          <div className="flex h-[3.2rem] w-[3.2rem] items-center justify-center rounded-full bg-white">
            <img src="./icon-plus.svg" alt="plus icon" />
          </div>
          <span className="text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-white">
            {isSmallScreen ? "New" : "New Invoice"}
          </span>
        </motion.button>

        {isBoxOpened && (
          <div
            className={`absolute left-[-4rem] top-[7rem] flex  w-full max-w-[19.2rem] flex-col gap-6 rounded-[0.8rem] bg-white p-10 shadow-bigSh ${isDarkMode ? "bg-[#252945]" : "bg-white"}`}
          >
            <div className="flex cursor-pointer items-center gap-5">
              <input
                type="checkbox"
                id="all"
                checked={selectedCheckbox === "all"}
                onChange={() => handleCheckboxChange("all")}
                className="h-[1.6rem] w-[1.6rem] cursor-pointer rounded-[0.2rem] border border-transparent accent-[#7c5dfa] hover:border-[#7c5dfa]"
              />
              <label
                htmlFor="all"
                className={`cursor-pointer text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] ${isDarkMode ? "text-white" : "text-[#1e2139] hover:text-[#0c0e16]"}`}
              >
                All
              </label>
            </div>
            <div className="flex cursor-pointer items-center gap-5">
              <input
                type="checkbox"
                id="draft"
                checked={selectedCheckbox === "draft"}
                onChange={() => handleCheckboxChange("draft")}
                className="h-[1.6rem] w-[1.6rem] cursor-pointer rounded-[0.2rem] border border-transparent accent-[#7c5dfa] hover:border-[#7c5dfa]"
              />
              <label
                htmlFor="draft"
                className={`cursor-pointer text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] ${isDarkMode ? "text-white" : "text-[#1e2139] hover:text-[#0c0e16]"}`}
              >
                Draft
              </label>
            </div>
            <div className="flex cursor-pointer items-center gap-5">
              <input
                type="checkbox"
                id="pending"
                checked={selectedCheckbox === "pending"}
                onChange={() => handleCheckboxChange("pending")}
                className="h-[1.6rem] w-[1.6rem] cursor-pointer rounded-[0.2rem] border border-transparent accent-[#7c5dfa] hover:border-[#7c5dfa]"
              />
              <label
                htmlFor="pending"
                className={`cursor-pointer text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] ${isDarkMode ? "text-white" : "text-[#1e2139] hover:text-[#0c0e16]"}`}
              >
                Pending
              </label>
            </div>
            <div className="flex cursor-pointer items-center gap-5">
              <input
                type="checkbox"
                id="paid"
                checked={selectedCheckbox === "paid"}
                onChange={() => handleCheckboxChange("paid")}
                className="h-[1.6rem] w-[1.6rem] cursor-pointer rounded-[0.2rem] border border-transparent accent-[#7c5dfa] hover:border-[#7c5dfa]"
              />
              <label
                htmlFor="paid"
                className={`cursor-pointer text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] ${isDarkMode ? "text-white" : "text-[#1e2139] hover:text-[#0c0e16]"}`}
              >
                Paid
              </label>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default HomeInvoiceHeading;
