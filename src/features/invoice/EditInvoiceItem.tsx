import { FieldErrors } from "react-hook-form";
import { AllInvoiceDataProps } from "../home/useInvoice";

type EditInvoiceItemProps = {
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

function EditInvoiceItem({
  name,
  qty,
  price,
  total,
  register,
  getValues,
  index,
  id,
  errors,
}: EditInvoiceItemProps) {
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
      />
      <input
        className="border-none text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#888eb0]"
        {...register(`items.${index}.total`)}
        defaultValue={total}
        disabled={true}
      />

      <svg className="h-[1.6rem] w-[1.3rem] cursor-pointer fill-[#888EB0] hover:fill-[#ec5757]">
        <use xlinkHref="/icon-delete.svg#delete" />
      </svg>
    </div>
  );
}

export default EditInvoiceItem;
