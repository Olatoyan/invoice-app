import { useDarkMode } from "../../context/DarkModeContext";
import { InvoiceDataProps } from "../../types/Types";
import { useUpdateStatus } from "./useUpdateStatus";

function FooterStatusBox({
  data,
  handleEdit,
  handleDelete,
}: {
  data: InvoiceDataProps;
  handleEdit: () => void;
  handleDelete: () => void;
}) {
  const { updateStatus } = useUpdateStatus();
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`mobile:flex mt-24 hidden items-center justify-center gap-7 px-2 py-8 ${isDarkMode ? "bg-[#1e2139]" : "bg-white"}`}
    >
      <button
        className={`mobile:px-6 mobile:py-5 rounded-[2.4rem] px-10 py-7 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] ${isDarkMode ? "bg-[#252945] text-[#dfe3fa] hover:bg-white hover:text-[#7e8cc3]" : "bg-[#f9fafe] text-[#7e88c3] hover:bg-[#dfe3fa]"}`}
        onClick={handleEdit}
      >
        Edit
      </button>
      <button
        className="mobile:px-6 mobile:py-5 rounded-[2.4rem] bg-[#ec5757] px-10 py-7 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-white hover:bg-[#ff9797]"
        onClick={handleDelete}
      >
        Delete
      </button>
      <button
        className={`mobile:px-6 mobile:py-5 rounded-[2.4rem] bg-[#7c5dfa] px-10 py-7 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-white ${data?.status === "paid" ? "cursor-not-allowed opacity-35" : "hover:bg-[#9277ff]"}`}
        disabled={data?.status === "paid"}
        onClick={() => updateStatus()}
      >
        {data?.status === "paid" ? "Has Paid" : "Mark as Paid"}
      </button>
    </div>
  );
}

export default FooterStatusBox;
