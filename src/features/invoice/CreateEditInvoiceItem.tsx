function CreateEditInvoiceItem() {
  return (
    <div className="grid grid-cols-[4fr_6rem_1fr_1fr_1fr] items-center gap-6">
      <input
        type="text"
        id="itemName"
        className="w-full rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16] focus:border focus:border-[#9277ff] focus:outline-none"
      />
      <input
        type="text"
        id="qty"
        className="w-full rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16] focus:border focus:border-[#9277ff] focus:outline-none"
      />
      <input
        type="text"
        id="price"
        className="w-full rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16] focus:border focus:border-[#9277ff] focus:outline-none"
      />
      <p className="text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#888eb0]">
        156.00
      </p>
      <img src="/icon-delete.svg" alt="delete icon" />
    </div>
  );
}

export default CreateEditInvoiceItem;
