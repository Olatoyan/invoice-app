import NavBar from "../../ui/NavBar";
import EditInvoiceItem from "./EditInvoiceItem";

function EditInvoice() {
  return (
    <div className="absolute left-0 top-0 z-[11] grid grid-cols-[auto_1fr] ">
      <NavBar />

      <form className="-ml-12  max-w-[80rem] bg-white pl-28 pr-20">
        <h2 className="pb-[4.6rem] text-[2.4rem] font-bold leading-[3.2rem] tracking-[-0.05rem] text-[#0c0e16]">
          Edit <span className="text-[#888eb0]">#</span>
          <span>XM9141</span>
        </h2>

        <div>
          <h3 className="pb-[2.4rem] text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#7c5dfa]">
            Bill From
          </h3>

          <div>
            <label
              className="block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]"
              htmlFor="billAddress"
            >
              Street Address
            </label>
            <input
              type="text"
              id="billAddress"
              className="rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16]"
            />
          </div>

          <div className="grid grid-cols-3 gap-10 pb-20 pt-10">
            <div>
              <label
                className="block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]"
                htmlFor="billCity"
              >
                City
              </label>
              <input
                type="text"
                id="billCity"
                className="rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16]"
              />
            </div>
            <div>
              <label
                className="block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]"
                htmlFor="postCode"
              >
                Post Code
              </label>
              <input
                type="text"
                id="postCode"
                className="rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16]"
              />
            </div>
            <div>
              <label
                className="block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]"
                htmlFor="billCountry"
              >
                Country
              </label>
              <input
                type="text"
                id="billCountry"
                className="rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16]"
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
              <label
                className="block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]"
                htmlFor="clientName"
              >
                Client's Name
              </label>
              <input
                type="text"
                id="clientName"
                className="rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16]"
              />
            </div>
            <div>
              <label
                className="block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]"
                htmlFor="clientMail"
              >
                Client's Mail
              </label>
              <input
                type="email"
                id="clientMail"
                className="rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16]"
              />
            </div>
            <div>
              <label
                className="block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]"
                htmlFor="clientAddress"
              >
                Street Address
              </label>
              <input
                type="text"
                id="clientAddress"
                className="rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16]"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-10 pt-10">
            <div>
              <label
                className="block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]"
                htmlFor="clientCity"
              >
                City
              </label>
              <input
                type="text"
                id="clientCity"
                className="rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16]"
              />
            </div>
            <div>
              <label
                className="block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]"
                htmlFor="clientPostCode"
              >
                Post Code
              </label>
              <input
                type="text"
                id="clientPostCode"
                className="rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16]"
              />
            </div>
            <div>
              <label
                className="block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]"
                htmlFor="clientCountry"
              >
                Country
              </label>
              <input
                type="text"
                id="clientCountry"
                className="rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16]"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-2 pb-10 pt-20">
            <div>
              <label
                className="block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]"
                htmlFor="clientCity"
              >
                Invoice Date
              </label>

              <input
                type="text"
                id="clientCity"
                className="rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16]"
              />
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
                <img src="./icon-arrow-down.svg" alt="arrow down" />
              </div>
            </div>
          </div>

          <div>
            <label
              className="block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]"
              htmlFor="projectDescription"
            >
              Project Description
            </label>
            <input
              type="text"
              id="projectDescription"
              className="rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16]"
            />
          </div>
        </div>

        <div className="pt-[3.5rem]">
          <h3 className="pb-6 text-[1.8rem] font-bold leading-[3.2rem] tracking-[-0.0375rem] text-[#777f98]">
            Item List
          </h3>

          <div>
            <div className="grid grid-cols-[23rem_6rem_21.6rem_1fr_1fr] items-start gap-6 pb-6">
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
            <EditInvoiceItem />
            <button className="mt-7 flex w-full items-center justify-center gap-6 rounded-[2.4rem] bg-[#f9fafe] py-7">
              <img src="./icon-plus.svg" alt="plus icon" />
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
    </div>
  );
}

export default EditInvoice;
