import { useState } from "react";
import { useForm } from "react-hook-form";
import { InvoiceDataProps } from "../../types/Types";
import { motion } from "framer-motion";
import CreateInvoiceItem from "./CreateInvoiceItem";
import { useCreateInvoice } from "./useCreateInvoice";
import { generateRandomId, getPaymentDue } from "../../utils/helpers";
import { useCreateSenderAdd } from "./useCreateSenderAdd";
import { useCreateClientAdd } from "./useCreateClientAdd";
import { useCreateItems } from "./useCreateItems";

type InitialItems = {
  id: number;
  name: string;
  quantity: number;
  price: number;
  total: number;
  invoiceId: number;
};

function CreateInvoice() {
  const [isPaymentDisplayed, setIsPaymentDisplayed] = useState(false);
  const [payment, setPayment] = useState(1);
  const [status, setStatus] = useState("pending");
  const [itemsList, setItemsList] = useState<InitialItems[]>([]);

  const { register, handleSubmit, formState, getValues, setValue } =
    useForm<InvoiceDataProps>();

  const { errors } = formState;

  const { createInvoice } = useCreateInvoice();
  const { createSAddress } = useCreateSenderAdd();
  const { createClAddress } = useCreateClientAdd();
  const { createItems } = useCreateItems();

  function onSubmit(data: InvoiceDataProps) {
    const invoiceId = Date.now();

    setValue(`clientAddress.${0}.invoiceId`, invoiceId);

    setValue(`senderAdd.${0}.invoiceId`, invoiceId);
    const randomId = generateRandomId();
    const paymentDueDate = getPaymentDue(data.createdAt, payment);
    // Set invoiceId on clientAddress

    const invoiceData = {
      idd: invoiceId,
      id: randomId,
      createdAt: data.createdAt,
      paymentDue: paymentDueDate,
      description: data.description,
      paymentTerms: payment,
      clientName: data.clientName,
      clientEmail: data.clientEmail,
      status: status,
      total: getValues()?.items?.reduce((acc, item) => acc + item.total, 0),
    };
    // const itemsList = getValues()?.items;
    // console.log(itemsList);

    const clientData = {
      id: Date.now(),
      street: getValues().clientAddress[0].street,
      city: getValues().clientAddress[0].city,
      postCode: getValues().clientAddress[0].postCode,
      country: getValues().clientAddress[0].country,
      invoiceId: invoiceId,
    };

    const senderData = {
      id: Date.now(),
      street: getValues().senderAdd[0].street,
      city: getValues().senderAdd[0].city,
      postCode: getValues().senderAdd[0].postCode,
      country: getValues().senderAdd[0].country,
      invoiceId: invoiceId,
    };

    // const itemsData = {
    //   id: Date.now(),
    //   name: getValues()?.items?.[0]?.name,
    //   quantity: getValues()?.items?.[0]?.quantity,
    //   price: getValues()?.items?.[0]?.price,
    //   total: getValues()?.items?.[0]?.total,
    //   invoiceId: invoiceId,
    // };

    // console.log(data);
    console.log(invoiceData);
    console.log(clientData);
    console.log(senderData);
    // console.log(itemsData);
    // console.log(getValues());

    createInvoice(invoiceData, {
      onSuccess: () => {
        // Once the invoice is created successfully, create the rest of the data
        const itemsList = getValues()?.items;

        itemsList.forEach((item) => {
          const itemsData = {
            id: item.id,
            name: item.name,
            quantity: item.quantity,
            price: item.price,
            total: item.total,
            invoiceId: invoiceId,
          };

          createItems(itemsData);
        });

        createClAddress(clientData);
        createSAddress(senderData);
        // createItems(itemsData);
      },
      onError: (error) => {
        console.error("Error creating invoice:", error);
        // Handle error if needed
      },
    });
  }

  function togglePaymentDisplay() {
    setIsPaymentDisplayed((prev) => !prev);
  }

  function toggleItemsList() {
    setItemsList((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: "",
        quantity: 0,
        price: 0,
        total: 0,
        invoiceId: Date.now(),
      },
    ]);
  }

  function handleDeleteItem(id: number) {
    console.log(id);
    setItemsList((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <form
      className="absolute left-[8rem] top-0 z-[9] h-full max-w-[80rem] overflow-y-auto bg-white py-20 pl-28 pr-20"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="pb-[4.6rem] text-[2.4rem] font-bold leading-[3.2rem] tracking-[-0.05rem] text-[#0c0e16]">
        New Invoice
      </h2>

      <div>
        <h3 className="pb-[2.4rem] text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#7c5dfa]">
          Bill From
        </h3>

        <div>
          <div className="flex items-center justify-between">
            <label
              className={`block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] ${errors?.senderAdd?.[0]?.street?.message ? "text-[#ec5757]" : "text-[#7e88c3]"}`}
              htmlFor="billAddress"
            >
              Street Address
            </label>
            {errors?.senderAdd?.[0]?.street?.message && (
              <p className="text-[1rem] font-semibold leading-[1.5rem] tracking-[-0.0208rem] text-[#ec5757]">
                {errors.senderAdd?.[0]?.street.message}
              </p>
            )}
          </div>
          <input
            type="text"
            id="billAddress"
            className={`w-full rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16] focus:border focus:outline-none disabled:bg-slate-200 disabled:text-zinc-500 ${errors?.senderAdd?.[0]?.street?.message ? "border-[#ec5757]" : "focus:border-[#9277ff]"}`}
            {...register(`senderAdd.${0}.street`, {
              required: "can’t be empty",
            })}
          />
        </div>

        <div className="grid grid-cols-3 gap-10 pb-20 pt-10">
          <div>
            <div className="flex items-center justify-between">
              <label
                className={`block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] ${errors?.senderAdd?.[0]?.city?.message ? "text-[#ec5757]" : "text-[#7e88c3]"}`}
                htmlFor="billCity"
              >
                City
              </label>

              {errors?.senderAdd?.[0]?.city?.message && (
                <p className="text-[1rem] font-semibold leading-[1.5rem] tracking-[-0.0208rem] text-[#ec5757]">
                  {errors.senderAdd?.[0]?.city.message}
                </p>
              )}
            </div>
            <input
              type="text"
              id="billCity"
              className={`w-full rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16] focus:border focus:outline-none disabled:bg-slate-200 disabled:text-zinc-500 ${errors?.senderAdd?.[0]?.city?.message ? "border-[#ec5757]" : "focus:border-[#9277ff]"}`}
              {...register(`senderAdd.${0}.city`, {
                required: "can’t be empty",
              })}
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                className={`block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] ${errors?.senderAdd?.[0]?.postCode?.message ? "text-[#ec5757]" : "text-[#7e88c3]"}`}
                htmlFor="postCode"
              >
                Post Code
              </label>
              {errors?.senderAdd?.[0]?.postCode?.message && (
                <p className="text-[1rem] font-semibold leading-[1.5rem] tracking-[-0.0208rem] text-[#ec5757]">
                  {errors.senderAdd?.[0]?.postCode.message}
                </p>
              )}
            </div>
            <input
              type="text"
              id="postCode"
              className={`w-full rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16] focus:border focus:outline-none disabled:bg-slate-200 disabled:text-zinc-500 ${errors?.senderAdd?.[0]?.postCode?.message ? "border-[#ec5757]" : "focus:border-[#9277ff]"}`}
              {...register(`senderAdd.${0}.postCode`, {
                required: "can’t be empty",
              })}
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                className={`block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] ${errors?.senderAdd?.[0]?.country?.message ? "text-[#ec5757]" : "text-[#7e88c3]"}`}
                htmlFor="billCountry"
              >
                Country
              </label>
              {errors?.senderAdd?.[0]?.country?.message && (
                <p className="text-[1rem] font-semibold leading-[1.5rem] tracking-[-0.0208rem] text-[#ec5757]">
                  {errors.senderAdd?.[0]?.country.message}
                </p>
              )}
            </div>
            <input
              type="text"
              id="billCountry"
              className={`w-full rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16] focus:border focus:border-[#9277ff] focus:outline-none disabled:bg-slate-200 disabled:text-zinc-500 ${errors?.senderAdd?.[0]?.country?.message ? "border-[#ec5757]" : "focus:border-[#9277ff]"}`}
              {...register(`senderAdd.${0}.country`, {
                required: "can’t be empty",
              })}
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
              {...register("clientName", { required: "can’t be empty" })}
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                className={`block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] ${errors?.clientEmail?.message ? "text-[#ec5757]" : "text-[#7e88c3]"}`}
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
              className={`w-full rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16] focus:border focus:outline-none ${errors?.clientEmail?.message ? "border-[#ec5757]" : "focus:border-[#9277ff]"}`}
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
                className={`block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] ${errors?.clientAddress?.[0]?.street?.message ? "text-[#ec5757]" : "text-[#7e88c3]"}`}
                htmlFor="clientAddress"
              >
                Street Address
              </label>
              {errors?.clientAddress?.[0]?.street?.message && (
                <p className="text-[1rem] font-semibold leading-[1.5rem] tracking-[-0.0208rem] text-[#ec5757]">
                  {errors?.clientAddress?.[0]?.street.message}
                </p>
              )}
            </div>
            <input
              type="text"
              id="clientAddress"
              className={`w-full rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16] focus:border focus:outline-none ${errors?.clientAddress?.[0]?.street?.message ? "border-[#ec5757]" : "focus:border-[#9277ff]"}`}
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
                className={`block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] ${errors?.clientAddress?.[0]?.city?.message ? "text-[#ec5757]" : "text-[#7e88c3]"}`}
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
              className={`w-full rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16] focus:border  focus:outline-none ${errors?.clientAddress?.[0]?.city?.message ? "border-[#ec5757]" : "focus:border-[#9277ff]"}`}
              {...register(`clientAddress.${0}.city`, {
                required: "can’t be empty",
              })}
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                className={`block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] ${errors?.clientAddress?.[0]?.postCode?.message ? "text-[#ec5757]" : "text-[#7e88c3]"}`}
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
              className={`w-full rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16] focus:border  focus:outline-none ${errors?.clientAddress?.[0]?.postCode?.message ? "border-[#ec5757]" : "focus:border-[#9277ff]"}`}
              {...register(`clientAddress.${0}.postCode`, {
                required: "can’t be empty",
              })}
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                className={`block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] ${errors?.clientAddress?.[0]?.country?.message ? "text-[#ec5757]" : "text-[#7e88c3]"}`}
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
              className={`w-full rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16] focus:border  focus:outline-none ${errors?.clientAddress?.[0]?.country?.message ? "border-[#ec5757]" : "focus:border-[#9277ff]"}`}
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
            <div className="flex items-center justify-between">
              <label
                className="block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] text-[#7e88c3]"
                htmlFor="clientCity"
              >
                Invoice Date
              </label>
              {errors?.createdAt?.message && (
                <p className="text-[1rem] font-semibold leading-[1.5rem] tracking-[-0.0208rem] text-[#ec5757]">
                  {errors.createdAt.message}
                </p>
              )}
            </div>
            <input
              type="date"
              id="clientCity"
              className="w-full rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16] disabled:bg-slate-200"
              {...register("createdAt", { required: "can’t be empty" })}
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
                Next {payment} {payment === 1 ? "Day" : "Days"}
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
                    onClick={() => setPayment(1)}
                  >
                    Next 1 Day
                  </p>
                  <p
                    className="px-[2.4rem] py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16]"
                    onClick={() => setPayment(7)}
                  >
                    Next 7 Days
                  </p>
                  <p
                    className="px-[2.4rem] py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16]"
                    onClick={() => setPayment(14)}
                  >
                    Next 14 Days
                  </p>
                  <p
                    className="px-[2.4rem] pt-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16]"
                    onClick={() => setPayment(30)}
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
              className={`block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] ${errors?.description?.message ? "text-[#ec5757]" : "text-[#7e88c3]"}`}
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
            className={`w-full rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16] focus:border  focus:outline-none ${errors?.description?.message ? "border-[#ec5757]" : "focus:border-[#9277ff]"}`}
            {...register("description", { required: "can't be empty" })}
          />
        </div>
      </div>

      <div className="pt-[3.5rem]">
        <h3 className="pb-6 text-[1.8rem] font-bold leading-[3.2rem] tracking-[-0.0375rem] text-[#777f98]">
          Item List
        </h3>

        <div>
          <div className="grid grid-cols-[4fr_6rem_2fr_2fr_1fr] items-start gap-6 pb-6">
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

          {itemsList &&
            itemsList.map((item, index) => (
              <CreateInvoiceItem
                key={index}
                register={register}
                index={index}
                id={item.id}
                errors={errors}
                onDelete={handleDeleteItem}
                setValue={setValue}
              />
            ))}
          <div
            className="mt-7 flex w-full cursor-pointer items-center justify-center gap-6 rounded-[2.4rem] bg-[#f9fafe] py-7 hover:bg-[#dfe3fa]"
            onClick={toggleItemsList}
          >
            <img src="/icon-plus.svg" alt="plus icon" />
            <p className="text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#7e88c3]">
              Add New Item
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-16">
        <button className="rounded-[2.4rem] bg-[#f9fafe] px-11 py-7 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#7e88c3]">
          Discard
        </button>
        <div className="flex items-center justify-end gap-6">
          <button
            className={`] rounded-[2.4rem] px-11 py-7 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#7e88c3] ${status === "draft" ? "bg-[#080911]" : "hover:bg-[#0c0e16 bg-[#7388c380]"}`}
            onClick={(e) => {
              e.preventDefault();
              setStatus("draft");
            }}
          >
            {status === "pending" ? "Save as draft" : "Saved as draft"}
          </button>
          <button className="rounded-[2.4rem] bg-[#7c5dfa] px-11 py-7 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-white hover:bg-[#9277ff]">
            Save & Send
          </button>
        </div>
      </div>
    </form>
  );
}

export default CreateInvoice;
