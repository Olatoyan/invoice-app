type InVoicePriceItemsProps = {
  name: string;
  qty: string;
  price: string;
  total: string;
};

function InVoicePriceItems({
  name,
  qty,
  price,
  total,
}: InVoicePriceItemsProps) {
  return (
    <div className="grid grid-cols-[3fr_2.6rem_1fr_1fr] gap-28 pb-12">
      <p className="text-[1.5rem] font-bold leading-[2rem] tracking-[-0.025rem] text-[#0c0e16]">
        {name}
      </p>

      <p className="justify-self-center text-[1.5rem] font-bold leading-[2rem] tracking-[-0.025rem] text-[#7e88c3]">
        {qty}
      </p>

      <p className="justify-self-end text-[1.5rem] font-bold leading-[2rem] tracking-[-0.025rem] text-[#7e88c3]">
        £ {(+price).toFixed(2)}
      </p>

      <p className="justify-self-end text-[1.5rem] font-bold leading-[2rem] tracking-[-0.025rem] text-[#0c0e16]">
        £ {(+total).toFixed(2)}
      </p>
    </div>
  );
}

export default InVoicePriceItems;
