import { FieldErrors } from "react-hook-form";
import { useCreateItemRow } from "./useCreateItemRow";
import { AllInvoiceDataProps } from "../home/useInvoice";
import { useEffect, useState } from "react";

type CreateEditInvoiceItemProps = {
  name?: string;
  qty?: string;
  price?: string;
  total?: string | undefined;
  register?: any;
  getValues?: any;
  index?: number;
  id?: number;
  errors: FieldErrors<AllInvoiceDataProps>;
};

function CreateEditInvoiceItem({
  name,
  qty,
  price,
  total,
  register,
  getValues,
  index,
  id,
  errors,
}: CreateEditInvoiceItemProps) {
  const { createItem } = useCreateItemRow();
  console.log(errors);
  console.log(price);
  // console.log(id);
  // const totalPrice =
  //   +getValues()?.items?.[0]?.quantity * +getValues()?.items?.[0]?.price;
  // console.log(totalPrice);
  console.log(getValues()?.items);

  const quantity = +getValues(`items.${index}.quantity`) || 0;
  const itemPrice = +getValues(`items.${index}.price`) || 0;

  const finalPrice = quantity * itemPrice;

  const [totalPrice, setTotalPrice] = useState<number | string>(
    finalPrice.toFixed(2),
  );

  // const finalPrice = 4;

  // useEffect(() => {
  //   const quantity = +getValues(`items.${index}.quantity`) || 0;
  //   const itemPrice = +getValues(`items.${index}.price`) || 0;
  //   const total = (quantity * itemPrice).toFixed(2);
  //   setTotalPrice(total);
  // }, [getValues, index]);

  function updateTotal() {
    const quantity = +getValues(`items.${index}.quantity`) || 0;
    const itemPrice = +getValues(`items.${index}.price`) || 0;
    const total = (quantity * itemPrice).toFixed(2);
    setTotalPrice(total);
  }
  // console.log(updateTotal());

  function onSubmit() {
    createItem({
      name,
      quantity: qty,
      price,
      total: +qty! * +price!,
      id: Date.now(),
      invoiceId: id,
    });

    console.log({
      name,
      quantity: qty,
      price,
      total: +qty! * +price!,
      id: Date.now(),
      invoiceId: id,
    });
  }
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
        defaultValue={qty}
        {...register(`items.${index}.quantity`, {
          required: "can't be empty",
        })}
        onBlur={updateTotal}
      />
      <input
        type="number"
        id="price"
        className={`w-full rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-5 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16] focus:border focus:border-[#9277ff] focus:outline-none ${
          errors.items?.[index!]?.price
            ? "border-[#ff6363]"
            : "focus:border-[#9277ff]"
        }`}
        defaultValue={price! === "" ? "" : (+price!).toFixed(2)}
        placeholder="Price"
        {...register(`items.${index}.price`, {
          required: "can't be empty",
        })}
        onBlur={updateTotal}
      />
      <input
        className="border-none text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#888eb0]"
        {...register(`items.${index}.total`)}
        // placeholder={total || "0"}
        defaultValue={total}
        disabled={true}
      />

      <svg className="h-[1.6rem] w-[1.3rem] cursor-pointer fill-[#888EB0] hover:fill-[#ec5757]">
        <use xlinkHref="/icon-delete.svg#delete" />
      </svg>
    </div>
  );
}

export default CreateEditInvoiceItem;
