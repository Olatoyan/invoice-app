function HomeEmptyInvoice() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <img src="./illustration-empty.svg" alt="Empty Invoice" />
      <h2 className="pb-9 pt-28 text-[2.4rem] font-bold tracking-[-0.075rem] text-[#0c0e16]">
        There is nothing here
      </h2>
      <p className="max-w-[24rem] text-[1.5rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#888eb0]">
        Create an invoice by clicking the <br />
        <span className="font-bold">New Invoice</span> button and get started
      </p>
    </div>
  );
}

export default HomeEmptyInvoice;
