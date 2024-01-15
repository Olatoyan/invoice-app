// import NavBar from "../../ui/NavBar";
import { AllInvoiceDataProps } from "../home/useInvoice";
import CreateEditInvoiceItem from "./CreateEditInvoiceItem";

type CreditEditInvoiceProps = {
  type: string;
  data: AllInvoiceDataProps | null;
};
function CreateEditInvoice({ type, data }: CreditEditInvoiceProps) {
  console.log(type, data);

  return (
    <form className="absolute left-[8rem] top-0 z-[9] h-full max-w-[80rem] overflow-y-auto bg-white py-20 pl-28 pr-20">
      <h2 className="pb-[4.6rem] text-[2.4rem] font-bold leading-[3.2rem] tracking-[-0.05rem] text-[#0c0e16]">
        Edit <span className="text-[#888eb0]">#</span>
        <span>XM9141</span>
      </h2>

      <div>
        <h3 className="pb-[2.4rem] text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#7c5dfa]">
          Bill From
        </h3>

        <div>
          <div className="flex items-center justify-between">
            <label
              className="block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]"
              htmlFor="billAddress"
            >
              Street Address
            </label>
            <p className="hidden text-[1rem] font-semibold leading-[1.5rem] tracking-[-0.0208rem] text-[#ec5757]">
              can’t be empty
            </p>
          </div>
          <input
            type="text"
            id="billAddress"
            className="w-full rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16] focus:border focus:border-[#9277ff] focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-3 gap-10 pb-20 pt-10">
          <div>
            <div className="flex items-center justify-between">
              <label
                className="block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]"
                htmlFor="billCity"
              >
                City
              </label>
              <p className="hidden text-[1rem] font-semibold leading-[1.5rem] tracking-[-0.0208rem] text-[#ec5757]">
                can’t be empty
              </p>
            </div>
            <input
              type="text"
              id="billCity"
              className="w-full rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16] focus:border focus:border-[#9277ff] focus:outline-none"
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                className="block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]"
                htmlFor="postCode"
              >
                Post Code
              </label>
              <p className="hidden text-[1rem] font-semibold leading-[1.5rem] tracking-[-0.0208rem] text-[#ec5757]">
                can’t be empty
              </p>
            </div>
            <input
              type="text"
              id="postCode"
              className="w-full rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16] focus:border focus:border-[#9277ff] focus:outline-none"
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                className="block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]"
                htmlFor="billCountry"
              >
                Country
              </label>
              <p className="hidden text-[1rem] font-semibold leading-[1.5rem] tracking-[-0.0208rem] text-[#ec5757]">
                can’t be empty
              </p>
            </div>
            <input
              type="text"
              id="billCountry"
              className="w-full rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16] focus:border focus:border-[#9277ff] focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="pb-[2.4rem] text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#7c5dfa]">
          Bill To
        </h3>

        <div className="space-y-10">
          <div>
            <div className="flex items-center justify-between">
              <label
                className="block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]"
                htmlFor="clientName"
              >
                Client's Name
              </label>
              <p className="hidden text-[1rem] font-semibold leading-[1.5rem] tracking-[-0.0208rem] text-[#ec5757]">
                can’t be empty
              </p>
            </div>
            <input
              type="text"
              id="clientName"
              className="w-full rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16] focus:border focus:border-[#9277ff] focus:outline-none"
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                className="block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]"
                htmlFor="clientMail"
              >
                Client's Mail
              </label>
              <p className="hidden text-[1rem] font-semibold leading-[1.5rem] tracking-[-0.0208rem] text-[#ec5757]">
                can’t be empty
              </p>
            </div>
            <input
              type="email"
              id="clientMail"
              className="w-full rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16] focus:border focus:border-[#9277ff] focus:outline-none"
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                className="block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]"
                htmlFor="clientAddress"
              >
                Street Address
              </label>
              <p className="hidden text-[1rem] font-semibold leading-[1.5rem] tracking-[-0.0208rem] text-[#ec5757]">
                can’t be empty
              </p>
            </div>
            <input
              type="text"
              id="clientAddress"
              className="w-full rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16] focus:border focus:border-[#9277ff] focus:outline-none"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-10 pt-10">
          <div>
            <div className="flex items-center justify-between">
              <label
                className="block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]"
                htmlFor="clientCity"
              >
                City
              </label>
              <p className="hidden text-[1rem] font-semibold leading-[1.5rem] tracking-[-0.0208rem] text-[#ec5757]">
                can’t be empty
              </p>
            </div>
            <input
              type="text"
              id="clientCity"
              className="w-full rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16] focus:border focus:border-[#9277ff] focus:outline-none"
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                className="block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]"
                htmlFor="clientPostCode"
              >
                Post Code
              </label>
              <p className="hidden text-[1rem] font-semibold leading-[1.5rem] tracking-[-0.0208rem] text-[#ec5757]">
                can’t be empty
              </p>
            </div>
            <input
              type="text"
              id="clientPostCode"
              className="w-full rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16] focus:border focus:border-[#9277ff] focus:outline-none"
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                className="block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]"
                htmlFor="clientCountry"
              >
                Country
              </label>
              <p className="hidden text-[1rem] font-semibold leading-[1.5rem] tracking-[-0.0208rem] text-[#ec5757]">
                can’t be empty
              </p>
            </div>
            <input
              type="text"
              id="clientCountry"
              className="w-full rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16] focus:border focus:border-[#9277ff] focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-2 gap-10 pb-10 pt-20">
          <div>
            {/* <div className="flex items-center justify-between"> */}
            <label
              className="block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]"
              htmlFor="clientCity"
            >
              Invoice Date
            </label>
            {/* <p className="hidden text-[1rem] font-semibold leading-[1.5rem] tracking-[-0.0208rem] text-[#ec5757]">
                can’t be empty
              </p> */}
            {/* </div> */}

            <div className="flex items-center justify-between rounded-[0.4rem] border border-solid border-[#dfe3fa] px-8 py-6">
              <p className="text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#7e88c3]">
                21 Aug 2021
              </p>

              <img src="/icon-calendar.svg" alt="calendar icon" />
            </div>
            {/* <input
              type="date"
              id="clientCity"
              className="rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16]"
            /> */}
          </div>
          <div>
            <label
              className="block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]"
              htmlFor="paymentTerms"
            >
              Payment Terms
            </label>
            <div className="flex items-center justify-between rounded-[0.4rem] border border-solid border-[#dfe3fa] px-8 py-6">
              <p className="text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16]">
                Next 30 Days
              </p>
              <img src="/icon-arrow-down.svg" alt="arrow down" />
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              className="block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]"
              htmlFor="projectDescription"
            >
              Project Description
            </label>
            <p className="hidden text-[1rem] font-semibold leading-[1.5rem] tracking-[-0.0208rem] text-[#ec5757]">
              can’t be empty
            </p>
          </div>
          <input
            type="text"
            id="projectDescription"
            className="w-full rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16] focus:border focus:border-[#9277ff] focus:outline-none"
          />
        </div>
      </div>

      <div className="pt-[3.5rem]">
        <h3 className="pb-6 text-[1.8rem] font-bold leading-[3.2rem] tracking-[-0.0375rem] text-[#777f98]">
          Item List
        </h3>

        <div>
          <div className="grid grid-cols-[4fr_6rem_1fr_1fr_1fr] items-start gap-6 pb-6">
            <p className="text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]">
              Item Name
            </p>
            <p className="text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]">
              QTY.
            </p>
            <p className="text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]">
              Price
            </p>
            <p className="text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]">
              Total
            </p>
          </div>
          <CreateEditInvoiceItem />
          <button className="mt-7 flex w-full items-center justify-center gap-6 rounded-[2.4rem] bg-[#f9fafe] py-7">
            <img src="/icon-plus.svg" alt="plus icon" />
            <p className="text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#7e88c3]">
              Add New Item
            </p>
          </button>
        </div>
      </div>

      <div className="flex items-center justify-end gap-6 pt-16">
        <button className="rounded-[2.4rem] bg-[#f9fafe] px-11 py-7 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#7e88c3]">
          Cancel
        </button>
        <button className="rounded-[2.4rem] bg-[#7c5dfa] px-11 py-7 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-white">
          Save Changes
        </button>
      </div>
    </form>
  );
}

export default CreateEditInvoice;
