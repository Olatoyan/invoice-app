type CreateEditInvoiceItemProps = {
  name: string;
  qty: string;
  price: string;
  total: string;
  register: any;
  getValue: any;
};

function CreateEditInvoiceItem({
  name,
  qty,
  price,
  total,
}: CreateEditInvoiceItemProps) {
  return (
    <div className="grid grid-cols-[4fr_6rem_2fr_2fr_1fr] items-center gap-6 pb-6">
      <input
        type="text"
        id="itemName"
        className="w-full rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16] focus:border focus:border-[#9277ff] focus:outline-none"
        defaultValue={name}
      />
      <input
        type="text"
        id="qty"
        className="w-full rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16] focus:border focus:border-[#9277ff] focus:outline-none"
        defaultValue={qty}
      />
      <input
        type="number"
        id="price"
        className="w-full rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16] focus:border focus:border-[#9277ff] focus:outline-none"
        defaultValue={(+price).toFixed(2)}
      />
      <p className="text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#888eb0]">
        {+price * +qty}
      </p>
      <svg className="h-[1.6rem] w-[1.3rem] cursor-pointer fill-[#888EB0] hover:fill-[#ec5757]">
        <use xlinkHref="/icon-delete.svg#delete" />
      </svg>
      {/* <img src="/icon-delete.svg" alt="delete icon" /> */}
    </div>
  );
}

export default CreateEditInvoiceItem;
