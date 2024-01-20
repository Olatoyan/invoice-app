import {
  FieldErrors,
  UseFormGetValues,
  UseFormRegister,
} from "react-hook-form";
import { AllInvoiceDataProps } from "../home/useInvoice";
import { InvoiceDataProps } from "../../types/Types";
import { useEffect, useState } from "react";

type CreateInvoiceItemProps = {
  name: string;
  qty: number;
  price: number;
  total: number;
  register: UseFormRegister<InvoiceDataProps>;
  getValues: UseFormGetValues<InvoiceDataProps>;
  index: number;
  // id?: number;
  errors: FieldErrors<AllInvoiceDataProps>;
  onDelete: () => void;
};

function CreateInvoiceItem({
  name,
  qty,
  price,
  total,
  register,
  getValues,
  index,
  errors,
  onDelete,
  // id,
}: CreateInvoiceItemProps) {
  const [totalQty, setTotalQty] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalPriceItem, setTotalPriceItem] = useState(0);

  function handleQtyChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTotalQty(Number(e.target.value));
  }

  function handlePriceChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTotalPrice(Number(e.target.value));
  }

  useEffect(() => {
    setTotalPriceItem(totalQty * totalPrice);
  }, [totalQty, totalPrice]);

  return (
    <div className="grid grid-cols-[4fr_6rem_2fr_2fr_1fr] items-center gap-6 pb-6">
      <input
        type="text"
        id="itemName"
        className={`w-full rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16] focus:border focus:outline-none ${
          errors.items?.[index!]?.name
            ? "border-[#ff6363]"
            : "focus:border-[#9277ff]"
        }`}
        placeholder="Item name"
        // defaultValue={name}
        {...register(`items.${index}.name`, { required: "can't be empty" })}
      />
      <input
        type="number"
        id="qty"
        className={`w-full rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-4 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16] focus:border focus:outline-none ${
          errors.items?.[index!]?.quantity
            ? "border-[#ff6363]"
            : "focus:border-[#9277ff]"
        }`}
        placeholder="Qty."
        // defaultValue={qty}
        {...register(`items.${index}.quantity`, {
          required: "can't be empty",
        })}
        onChange={(e) => handleQtyChange(e)}
      />
      <input
        type="number"
        id="price"
        className={`w-full rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-5 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16] focus:border focus:border-[#9277ff] focus:outline-none ${
          errors.items?.[index!]?.price
            ? "border-[#ff6363]"
            : "focus:border-[#9277ff]"
        }`}
        // defaultValue={!price ? "" : (+price!).toFixed(2)}
        placeholder="Price"
        {...register(`items.${index}.price`, {
          required: "can't be empty",
        })}
        onChange={(e) => handlePriceChange(e)}
      />
      <p className="text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#888eb0] ">
        {totalPriceItem.toFixed(2)}
      </p>
      {/* <input
        className="border-none text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#888eb0] outline-none"
        // {...register(`items.${index}.total`)}
        // defaultValue={total}
        defaultValue={totalPriceItem}
        readOnly
      /> */}

      <svg
        className="h-[1.6rem] w-[1.3rem] cursor-pointer fill-[#888EB0] hover:fill-[#ec5757]"
        onClick={onDelete}
      >
        <use xlinkHref="/icon-delete.svg#delete" />
      </svg>
    </div>
  );
}

export default CreateInvoiceItem;
