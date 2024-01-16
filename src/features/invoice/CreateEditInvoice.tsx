// import NavBar from "../../ui/NavBar";
import { useForm } from "react-hook-form";
import { AllInvoiceDataProps, ItemInvoiceProps } from "../home/useInvoice";
import CreateEditInvoiceItem from "./CreateEditInvoiceItem";
import { useState } from "react";
import { motion } from "framer-motion";

type CreditEditInvoiceProps = {
  type: "edit" | "create";
  data: AllInvoiceDataProps | null;
};

function CreateEditInvoice({ type, data }: CreditEditInvoiceProps) {
  console.log(type, data);
  const [isPaymentDisplayed, setIsPaymentDisplayed] = useState(false);

  function togglePaymentDisplay() {
    setIsPaymentDisplayed((prev) => !prev);
  }

  const {
    id,
    createdAt,
    paymentDue,
    description,
    clientName,
    clientEmail,
    clientAddress,
    items,
    paymentTerms,
  } = data || {};

  // console.log(items);

  const {
    street: clientStreet,
    city: clientCity,
    postCode: clientPostCode,
    country: clientCountry,
  } = clientAddress?.[0] || {};

  const [payment, setPayment] = useState(paymentTerms);
  const [itemList, setItemList] = useState<ItemInvoiceProps[] | undefined>(
    items,
  );

  const { register, handleSubmit, formState, getValues } =
    useForm<AllInvoiceDataProps>();

  const { errors } = formState;

  console.log(errors);
  function onSubmit(data: AllInvoiceDataProps) {
    console.log(data);
  }

  const handleAddNewItem = () => {
    setItemList((prevItems) => [
      ...prevItems,
      { name: "", qty: "", price: "", total: "" },
    ]);
  };

  return (
    <form
      className="absolute left-[8rem] top-0 z-[9] h-full max-w-[80rem] overflow-y-auto bg-white py-20 pl-28 pr-20"
      onSubmit={handleSubmit(onSubmit)}
    >
      {type === "edit" ? (
        <h2 className="pb-[4.6rem] text-[2.4rem] font-bold leading-[3.2rem] tracking-[-0.05rem] text-[#0c0e16]">
          Edit <span className="text-[#888eb0]">#</span>
          <span>{id}</span>
        </h2>
      ) : (
        <h2 className="pb-[4.6rem] text-[2.4rem] font-bold leading-[3.2rem] tracking-[-0.05rem] text-[#0c0e16]">
          New Invoice
        </h2>
      )}

      <div>
        <h3 className="pb-[2.4rem] text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#7c5dfa]">
          Bill From
        </h3>

        <div>
          <div className="flex items-center justify-between">
            <label
              className="block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]"
              htmlFor="billAddress"
            >
              Street Address
            </label>
            {/* <p className=" text-[1rem] font-semibold leading-[1.5rem] tracking-[-0.0208rem] text-[#ec5757]">
              can’t be empty
            </p> */}
          </div>
          <input
            type="text"
            id="billAddress"
            className="w-full rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16] focus:border focus:border-[#9277ff] focus:outline-none disabled:bg-slate-200 disabled:text-zinc-500"
            defaultValue="19 Union Terrace"
            disabled={true}
          />
        </div>

        <div className="grid grid-cols-3 gap-10 pb-20 pt-10">
          <div>
            <div className="flex items-center justify-between">
              <label
                className="block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]"
                htmlFor="billCity"
              >
                City
              </label>
              {/* <p className=" text-[1rem] font-semibold leading-[1.5rem] tracking-[-0.0208rem] text-[#ec5757]">
                can’t be empty
              </p> */}
            </div>
            <input
              type="text"
              id="billCity"
              className="w-full rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16] focus:border focus:border-[#9277ff] focus:outline-none disabled:bg-slate-200 disabled:text-zinc-500"
              defaultValue="London"
              disabled={true}
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                className="block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]"
                htmlFor="postCode"
              >
                Post Code
              </label>
              {/* <p className=" text-[1rem] font-semibold leading-[1.5rem] tracking-[-0.0208rem] text-[#ec5757]">
                can’t be empty
              </p> */}
            </div>
            <input
              type="text"
              id="postCode"
              className="w-full rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16] focus:border focus:border-[#9277ff] focus:outline-none disabled:bg-slate-200 disabled:text-zinc-500"
              defaultValue="E1 3EZ"
              disabled={true}
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                className="block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]"
                htmlFor="billCountry"
              >
                Country
              </label>
              {/* <p className=" text-[1rem] font-semibold leading-[1.5rem] tracking-[-0.0208rem] text-[#ec5757]">
                can’t be empty
              </p> */}
            </div>
            <input
              type="text"
              id="billCountry"
              className="w-full rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16] focus:border focus:border-[#9277ff] focus:outline-none disabled:bg-slate-200 disabled:text-zinc-500"
              defaultValue="United Kingdom"
              disabled={true}
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="pb-[2.4rem] text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#7c5dfa]">
          Bill To
        </h3>

        <div className="space-y-10">
          <div>
            <div className="flex items-center justify-between">
              <label
                className={`block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] ${errors?.clientName?.message ? "text-[#ec5757]" : "text-[#7e88c3]"} `}
                htmlFor="clientName"
              >
                Client's Name
              </label>
              {errors?.clientName?.message && (
                <p className="text-[1rem] font-semibold leading-[1.5rem] tracking-[-0.0208rem] text-[#ec5757]">
                  {errors.clientName.message}
                </p>
              )}
            </div>
            <input
              type="text"
              id="clientName"
              className={`w-full rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16] focus:border  focus:outline-none ${errors?.clientName?.message ? "border-[#ec5757]" : "focus:border-[#9277ff]"}`}
              defaultValue={clientName}
              {...register("clientName", { required: "can’t be empty" })}
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                className="block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]"
                htmlFor="clientMail"
              >
                Client's Mail
              </label>
              {errors?.clientEmail?.message && (
                <p className="text-[1rem] font-semibold leading-[1.5rem] tracking-[-0.0208rem] text-[#ec5757]">
                  {errors.clientEmail.message}
                </p>
              )}
            </div>
            <input
              type="email"
              id="clientMail"
              className="w-full rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16] focus:border focus:border-[#9277ff] focus:outline-none"
              defaultValue={clientEmail}
              {...register("clientEmail", {
                required: "can’t be empty",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please provide a valid email address",
                },
              })}
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                className="block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]"
                htmlFor="clientAddress"
              >
                Street Address
              </label>
              {errors?.clientAddress?.[0]?.street?.message && (
                <p className="text-[1rem] font-semibold leading-[1.5rem] tracking-[-0.0208rem] text-[#ec5757]">
                  {errors.clientAddress?.[0]?.street.message}
                </p>
              )}
            </div>
            <input
              type="text"
              id="clientAddress"
              className="w-full rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16] focus:border focus:border-[#9277ff] focus:outline-none"
              defaultValue={clientStreet}
              {...register(`clientAddress.${0}.street`, {
                required: "can’t be empty",
              })}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-10 pt-10">
          <div>
            <div className="flex items-center justify-between">
              <label
                className="block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]"
                htmlFor="clientCity"
              >
                City
              </label>
              {errors?.clientAddress?.[0]?.city?.message && (
                <p className="text-[1rem] font-semibold leading-[1.5rem] tracking-[-0.0208rem] text-[#ec5757]">
                  {errors.clientAddress?.[0]?.city.message}
                </p>
              )}
            </div>
            <input
              type="text"
              id="clientCity"
              className="w-full rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16] focus:border focus:border-[#9277ff] focus:outline-none"
              defaultValue={clientCity}
              {...register(`clientAddress.${0}.city`, {
                required: "can’t be empty",
              })}
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                className="block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]"
                htmlFor="clientPostCode"
              >
                Post Code
              </label>
              {errors?.clientAddress?.[0]?.postCode?.message && (
                <p className="text-[1rem] font-semibold leading-[1.5rem] tracking-[-0.0208rem] text-[#ec5757]">
                  {errors.clientAddress?.[0]?.postCode.message}
                </p>
              )}
            </div>
            <input
              type="text"
              id="clientPostCode"
              className="w-full rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16] focus:border focus:border-[#9277ff] focus:outline-none"
              defaultValue={clientPostCode}
              {...register(`clientAddress.${0}.postCode`, {
                required: "can’t be empty",
              })}
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                className="block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]"
                htmlFor="clientCountry"
              >
                Country
              </label>
              {errors?.clientAddress?.[0]?.country?.message && (
                <p className="text-[1rem] font-semibold leading-[1.5rem] tracking-[-0.0208rem] text-[#ec5757]">
                  {errors.clientAddress?.[0]?.country.message}
                </p>
              )}
            </div>
            <input
              type="text"
              id="clientCountry"
              className="w-full rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16] focus:border focus:border-[#9277ff] focus:outline-none"
              defaultValue={clientCountry}
              {...register(`clientAddress.${0}.country`, {
                required: "can’t be empty",
              })}
            />
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-2 gap-10 pb-10 pt-20">
          <div>
            {/* <div className="flex items-center justify-between"> */}
            <label
              className="block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]"
              htmlFor="clientCity"
            >
              Invoice Date
            </label>
            {/* <p className=" text-[1rem] font-semibold leading-[1.5rem] tracking-[-0.0208rem] text-[#ec5757]">
                can’t be empty
              </p> */}
            {/* </div> */}

            {/* <div className="flex items-center justify-between rounded-[0.4rem] border border-solid border-[#dfe3fa] px-8 py-6">
              <p className="text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#7e88c3]">
                {paymentDue}
              </p>

              <img src="/icon-calendar.svg" alt="calendar icon" />
            </div> */}
            <input
              type="date"
              id="clientCity"
              defaultValue={createdAt}
              className="w-full rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16] disabled:bg-slate-200"
              {...register("createdAt")}
              disabled={true}
            />
          </div>
          <div>
            <label
              className="block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]"
              htmlFor="paymentTerms"
            >
              Payment Terms
            </label>
            <div
              className="relative flex cursor-pointer items-center justify-between rounded-[0.4rem] border border-solid border-[#dfe3fa] px-8 py-6"
              onClick={togglePaymentDisplay}
            >
              <p className="text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16]">
                Next {payment} {payment === "1" ? "Day" : "Days"}
              </p>
              <motion.img
                src="/icon-arrow-down.svg"
                alt="arrow down"
                initial={{ rotate: 0 }}
                animate={{ rotate: isPaymentDisplayed ? 180 : 0 }}
              />
              {isPaymentDisplayed && (
                <div className="absolute left-0 top-[5rem] w-full divide-y-[1px] divide-solid divide-[#dfe3fa] rounded-[0.8rem] bg-white py-[1.6rem] shadow-bigSh">
                  <p
                    className="px-[2.4rem] pb-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16]"
                    onClick={() => setPayment("1")}
                  >
                    Next 1 Day
                  </p>
                  <p
                    className="px-[2.4rem] py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16]"
                    onClick={() => setPayment("7")}
                  >
                    Next 7 Days
                  </p>
                  <p
                    className="px-[2.4rem] py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16]"
                    onClick={() => setPayment("14")}
                  >
                    Next 14 Days
                  </p>
                  <p
                    className="px-[2.4rem] pt-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16]"
                    onClick={() => setPayment("30")}
                  >
                    Next 30 Days
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              className="block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]"
              htmlFor="projectDescription"
            >
              Project Description
            </label>
            {errors?.description?.message && (
              <p className="text-[1rem] font-semibold leading-[1.5rem] tracking-[-0.0208rem] text-[#ec5757]">
                {errors.description.message}
              </p>
            )}
          </div>
          <input
            type="text"
            id="projectDescription"
            className="w-full rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16] focus:border focus:border-[#9277ff] focus:outline-none"
            defaultValue={description}
            {...register("description", { required: "can't be empty" })}
          />
        </div>
      </div>

      <div className="pt-[3.5rem]">
        <h3 className="pb-6 text-[1.8rem] font-bold leading-[3.2rem] tracking-[-0.0375rem] text-[#777f98]">
          Item List
        </h3>

        <div>
          <div className="grid grid-cols-[4fr_8rem_2fr_2fr_1fr] items-start gap-6 pb-6">
            <p className="text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]">
              Item Name
            </p>
            <p className="text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]">
              QTY.
            </p>
            <p className="text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]">
              Price
            </p>
            <p className="text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]">
              Total
            </p>
          </div>

          {/* {items?.map((item, index) => (
            <CreateEditInvoiceItem
              key={item.id}
              name={item.name}
              qty={item.quantity}
              price={item.price}
              total={item.total}
              register={register}
              getValues={getValues}
              index={index}
            />
          ))} */}
          {itemList?.map((item, index) => (
            <CreateEditInvoiceItem
              key={index}
              name={item.name}
              qty={item.quantity}
              price={item.price}
              total={item.total}
              register={register}
              getValues={getValues}
              index={index}
            />
          ))}
          <button
            className="mt-7 flex w-full items-center justify-center gap-6 rounded-[2.4rem] bg-[#f9fafe] py-7 hover:bg-[#dfe3fa]"
            onClick={handleAddNewItem}
          >
            <img src="/icon-plus.svg" alt="plus icon" />
            <p className="text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#7e88c3]">
              Add New Item
            </p>
          </button>
        </div>
      </div>

      <div className="flex items-center justify-end gap-6 pt-16">
        <button className="rounded-[2.4rem] bg-[#f9fafe] px-11 py-7 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#7e88c3]">
          Cancel
        </button>
        <button className="rounded-[2.4rem] bg-[#7c5dfa] px-11 py-7 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-white">
          Save Changes
        </button>
      </div>
    </form>
  );
}

export default CreateEditInvoice;
