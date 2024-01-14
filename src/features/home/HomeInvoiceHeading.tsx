function HomeInvoiceHeading() {
  return (
    <section className="flex justify-between pb-28 pt-32">
      <div className="">
        <h1 className="text-[3.6rem] font-bold tracking-[0.1125rem] text-[#0c0e16]">
          Invoices
        </h1>
        <p className="text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#888eb0]">
          There are 7 total invoices
        </p>
      </div>

      <div className="relative flex items-center gap-16">
        <button className="flex items-center gap-5">
          <span className="text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16]">
            Filter by status
          </span>
          <img src="./icon-arrow-down.svg" alt="arrow down" />
        </button>
        <button className="flex items-center gap-8 rounded-[2.4rem] bg-[#7c5dfa] px-4 py-3 hover:bg-[#9277ff]">
          <div className="flex h-[3.2rem] w-[3.2rem] items-center justify-center rounded-full bg-white">
            <img src="./icon-plus.svg" alt="plus icon" />
          </div>
          <span className="text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-white">
            New Invoice
          </span>
        </button>

        <div className="shadow-bigSh absolute left-[-4rem] top-[7rem] flex w-full max-w-[19.2rem] flex-col gap-6 rounded-[0.8rem] bg-white p-10">
          <div className="flex cursor-pointer items-center gap-5">
            <input
              type="checkbox"
              className="h-[1.6rem] w-[1.6rem] rounded-[0.2rem] border border-transparent accent-[#7c5dfa] hover:border-[#7c5dfa]"
            />
            <p className="text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#1e2139] hover:text-[#0c0e16]">
              Draft
            </p>
          </div>
          <div className="flex cursor-pointer items-center gap-5">
            <input
              type="checkbox"
              className="h-[1.6rem] w-[1.6rem] rounded-[0.2rem] border border-transparent accent-[#7c5dfa] hover:border-[#7c5dfa]"
            />
            <p className="text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#1e2139] hover:text-[#0c0e16]">
              Pending
            </p>
          </div>
          <div className="flex cursor-pointer items-center gap-5">
            <input
              type="checkbox"
              className="h-[1.6rem] w-[1.6rem] rounded-[0.2rem] border border-transparent accent-[#7c5dfa] hover:border-[#7c5dfa]"
            />
            <p className="text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#1e2139] hover:text-[#0c0e16]">
              Draft
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeInvoiceHeading;
