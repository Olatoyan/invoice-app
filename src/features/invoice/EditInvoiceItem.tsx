import {
  FieldErrors,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { AllInvoiceDataProps } from "../home/useInvoice";
import { useEffect, useState } from "react";
import { InvoiceDataProps } from "../../types/Types";

type EditInvoiceItemProps = {
  name: string;
  price: number;
  quantity: number;
  total: number;
  invoiceId: number;
  id: number;
  register: UseFormRegister<InvoiceDataProps>;
  index: number;
  errors: FieldErrors<AllInvoiceDataProps>;
  onDelete: (id: number) => void;
  setValue: UseFormSetValue<InvoiceDataProps>;
  getValues: UseFormGetValues<InvoiceDataProps>;
  isDarkMode: boolean;
};

function EditInvoiceItem({
  name,
  price,
  quantity,
  total,
  invoiceId,
  id,
  register,
  index,
  errors,
  onDelete,
  setValue,
  getValues,
  isDarkMode,
}: EditInvoiceItemProps) {
  const [totalQty, setTotalQty] = useState(quantity);
  const [totalPrice, setTotalPrice] = useState(price);
  const [totalPriceItem, setTotalPriceItem] = useState(total);
  console.log(getValues().items);
  console.log(totalQty, totalPrice, totalPriceItem);

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

  // useEffect(() => {
  //   // const totall
  //   setTotalPriceItem(totalQty * totalPrice);
  //   // setTotalPriceItem((prevTotalQty) => prevTotalQty * totalPrice);

  //   setValue(`items.${index}.id`, id || Date.now());
  //   setValue(`items.${index}.total`, totalPriceItem);
  //   setValue(`items.${index}.invoiceId`, invoiceId);
  // }, [totalQty, totalPrice, index, setValue, invoiceId, totalPriceItem, id]);

  useEffect(() => {
    // Update the form values after totalPriceItem has been updated
    setValue(`items.${index}.total`, totalPriceItem);
  }, [totalPriceItem, setValue, index]);

  useEffect(() => {
    // Update the form values when other dependencies change
    setValue(`items.${index}.id`, id || Date.now());
    setValue(`items.${index}.invoiceId`, invoiceId);
  }, [id, invoiceId, setValue, index]);

  return (
    <div className="mobile:grid-cols-[1fr_1fr_1fr_6rem] mobile:pb-20 grid grid-cols-[4fr_6rem_2fr_2fr_1fr] items-center gap-6 pb-6">
      <div className="mobile:col-span-full mobile:pb-8">
        <p className="mobile:block hidden pb-6 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#888eb0]">
          Item Name
        </p>
        <input
          type="text"
          id="itemName"
          className={`w-full rounded-[0.4rem] border border-solid  px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] focus:border focus:outline-none disabled:bg-slate-200 disabled:text-zinc-500 ${errors?.items?.[index!]?.name ? "border-[#ec5757]" : isDarkMode ? "border-[#252945] focus:border-[#9277ff]" : "border-[#dfe3fa] focus:border-[#9277ff]"} ${isDarkMode ? "bg-[#1e2139] text-white" : "bg-white text-[#0c0e16]"}`}
          placeholder="Item name"
          defaultValue={name}
          {...register(`items.${index}.name`, { required: "can't be empty" })}
        />
      </div>
      <div>
        <p className="mobile:block hidden pb-6 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#888eb0]">
          Qty.
        </p>
        <input
          type="number"
          id="qty"
          className={`w-full rounded-[0.4rem] border border-solid px-4 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem]  focus:border focus:outline-none disabled:bg-slate-200 disabled:text-zinc-500 ${errors?.items?.[index!]?.quantity ? "border-[#ec5757]" : isDarkMode ? "border-[#252945] focus:border-[#9277ff]" : "border-[#dfe3fa] focus:border-[#9277ff]"} ${isDarkMode ? "bg-[#1e2139] text-white" : "bg-white text-[#0c0e16]"}`}
          placeholder="Qty."
          defaultValue={totalQty}
          {...register(`items.${index}.quantity`, {
            required: "can't be empty",
            min: { value: 1, message: "quantity must be at least 1" },
          })}
          onChange={(e) => handleQtyChange(e)}
        />
      </div>

      <div>
        <p className="mobile:block hidden pb-6 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#888eb0]">
          Price
        </p>
        <input
          type="number"
          id="price"
          className={`w-full rounded-[0.4rem] border border-solid  px-5 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] focus:border focus:border-[#9277ff] focus:outline-none disabled:bg-slate-200 disabled:text-zinc-500 ${errors?.items?.[index!]?.price ? "border-[#ec5757]" : isDarkMode ? "border-[#252945] focus:border-[#9277ff]" : "border-[#dfe3fa] focus:border-[#9277ff]"} ${isDarkMode ? "bg-[#1e2139] text-white" : "bg-white text-[#0c0e16]"}`}
          defaultValue={totalPrice}
          placeholder="Price"
          {...register(`items.${index}.price`, {
            required: "can't be empty",
            min: { value: 1, message: "price must be at least 1" },
          })}
          onChange={(e) => handlePriceChange(e)}
        />
      </div>

      <div>
        <p className="mobile:block hidden pb-6 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#888eb0]">
          Total
        </p>
        <p
          className="py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#888eb0]"
          // {...setValue(`items.${index}.total`, totalPriceItem)}
        >
          {/* {totalPriceItem.toFixed(2)} */}
          {getValues?.(`items.${index}.total`)?.toFixed(2) ||
            totalPriceItem.toFixed(2)}
        </p>
      </div>
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
        onClick={() => onDelete(getValues(`items.${index}.id`))}
      >
        <use xlinkHref="/icon-delete.svg#delete" />
      </svg>
    </div>
  );
}

export default EditInvoiceItem;
