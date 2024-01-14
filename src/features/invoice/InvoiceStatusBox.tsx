import { AllInvoiceDataProps } from "../home/useInvoice";

function InvoiceStatusBox({ data }: { data: AllInvoiceDataProps | null }) {
  return (
    <div className="mb-10 flex items-center justify-between rounded-[0.8rem] bg-white px-12 py-8 shadow-invoiceSh">
      <div className="flex items-center gap-8">
        <h3 className="text-[1.5rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#858bb2]">
          Status
        </h3>
        <div
          className={`flex items-center justify-center gap-4 rounded-[0.6rem] bg-[#33d69f] bg-opacity-[0.0571] px-12 py-6 ${data?.status === "paid" ? "bg-[#33d69f]" : data?.status === "pending" ? "bg-[#ff8f00]" : "bg-[#373b53]"} `}
        >
          <span
            className={`h-[0.8rem] w-[0.8rem] rounded-full ${data?.status === "paid" ? "bg-[#33d69f]" : data?.status === "pending" ? "bg-[#ff8f00]" : "bg-[#373b53]"}`}
          ></span>
          <span
            className={`text-[1.5rem] font-bold capitalize leading-[1.5rem] tracking-[-0.025rem] ${data?.status === "paid" ? "text-[#33d69f]" : data?.status === "pending" ? "text-[#ff8f00]" : "text-[#373b53]"}
          `}
          >
            {data?.status}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-7">
        <button className="rounded-[2.4rem] bg-[#f9fafe] px-10 py-7 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#7e88c3]">
          Edit
        </button>
        <button className="rounded-[2.4rem] bg-[#ec5757] px-10 py-7 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-white">
          Delete
        </button>
        <button className="rounded-[2.4rem] bg-[#7c5dfa] px-10 py-7 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-white">
          Mark as Paid
        </button>
      </div>
    </div>
  );
}

export default InvoiceStatusBox;
