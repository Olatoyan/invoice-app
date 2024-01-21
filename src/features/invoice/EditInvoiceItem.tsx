import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { AllInvoiceDataProps } from "../home/useInvoice";
import { useEffect, useState } from "react";
import { InvoiceDataProps } from "../../types/Types";

type EditInvoiceItemProps = {
  name: string;
  price: number;
  quantity: number;
  total: number;
  invoiceId: number;
  register: UseFormRegister<InvoiceDataProps>;
  index: number;
  errors: FieldErrors<AllInvoiceDataProps>;
  onDelete: (id: number) => void;
  setValue: UseFormSetValue<InvoiceDataProps>;
};

function EditInvoiceItem({
  name,
  price,
  quantity,
  total,
  invoiceId,
  register,
  index,
  errors,
  onDelete,
  setValue,
}: EditInvoiceItemProps) {
  const [totalQty, setTotalQty] = useState(quantity);
  const [totalPrice, setTotalPrice] = useState(price);
  const [totalPriceItem, setTotalPriceItem] = useState(total);

  function handleQtyChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newQty = Number(e.target.value);
    setTotalQty(newQty);

    // Calculate and set the total value
    const newTotal = newQty * totalPrice;
    setTotalPriceItem(newTotal);
    setValue(`items.${index}.total`, newTotal);
  }

  function handlePriceChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newPrice = Number(e.target.value);

    setTotalPrice(newPrice);

    // Calculate and set the total value
    const newTotal = totalQty * newPrice;
    setTotalPriceItem(newTotal);
    setValue(`items.${index}.total`, newTotal);
  }

  useEffect(() => {
    setTotalPriceItem(totalQty * totalPrice);
    setValue(`items.${index}.id`, Date.now());
    setValue(`items.${index}.invoiceId`, invoiceId);
  }, [totalQty, totalPrice, index, setValue, invoiceId]);

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
        defaultValue={name}
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
        defaultValue={totalQty}
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
        defaultValue={totalPrice}
        placeholder="Price"
        {...register(`items.${index}.price`, {
          required: "can't be empty",
        })}
        onChange={(e) => handlePriceChange(e)}
      />
      <p
        className="text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#888eb0]"
        // {...setValue(`items.${index}.total`, totalPriceItem)}
      >
        {totalPriceItem.toFixed(2)}
      </p>
      {/* <input
        className="border-none text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#888eb0] outline-none"
        // {...register(`items.${index}.total`)}
        {...setValue(`items.${index}.total`, totalPriceItem)}
        // defaultValue={total}
        defaultValue={totalPriceItem}
        readOnly
      /> */}

      <svg
        className="h-[1.6rem] w-[1.3rem] cursor-pointer fill-[#888EB0] hover:fill-[#ec5757]"
        onClick={() => onDelete(index)}
      >
        <use xlinkHref="/icon-delete.svg#delete" />
      </svg>
    </div>
  );
}

export default EditInvoiceItem;
