// import NavBar from "../../ui/NavBar";
import { useForm } from "react-hook-form";
// import { AllInvoiceDataProps, ItemInvoiceProps } from "../home/useInvoice";
// import CreateEditInvoiceItem from "./CreateEditInvoiceItem";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import { addDays, format } from "date-fns";
// import { useCreateItemRow } from "./useCreateItemRow";
import { InvoiceDataProps } from "../../types/Types";
import EditInvoiceItem from "./EditInvoiceItem";
import { getPaymentDue } from "../../utils/helpers";
import { useUpdateInvoiceRow } from "./useUpdateInvoiceRow";
import { useUpdateSenderAdd } from "./useUpdateSenderAdd";
import { useUpdateClientAdd } from "./useUpdateClientAdd";
import { useUpdateItems } from "./useUpdateItems";
import { useDeleteItems } from "./useDeleteItems";
import { useDarkMode } from "../../context/DarkModeContext";

type EditInvoiceProps = {
  data: InvoiceDataProps;
};

type InitialItems = {
  id: number;
  name: string;
  quantity: number;
  price: number;
  total: number;
  invoiceId: number;
};

function EditInvoice({ data }: EditInvoiceProps) {
  console.log(data);
  const [isPaymentDisplayed, setIsPaymentDisplayed] = useState(false);

  function togglePaymentDisplay() {
    setIsPaymentDisplayed((prev) => !prev);
  }

  const {
    idd,
    id,
    createdAt,
    paymentDue,
    description,
    clientName,
    clientEmail,
    clientAddress,
    senderAdd,
    items,
    paymentTerms,
    status,
  } = data;

  const {
    id: senderId,
    invoiceId: senderInvoiceId,
    street: senderStreet,
    city: senderCity,
    postCode: senderPostCode,
    country: senderCountry,
  } = senderAdd[0];

  const {
    id: clientId,
    invoiceId: clientInvoiceId,
    street: clientStreet,
    city: clientCity,
    postCode: clientPostCode,
    country: clientCountry,
  } = clientAddress[0];
  console.log(items);
  const [payment, setPayment] = useState(paymentTerms);

  // console.log(itemList);

  // const { createItem } = useCreateItemRow(idd);

  const { register, handleSubmit, formState, getValues, setValue } =
    useForm<InvoiceDataProps>();

  const { errors } = formState;

  const [itemList, setItemList] = useState<InitialItems[]>(
    getValues()?.items || items,
  );

  useEffect(() => {
    setValue("createdAt", createdAt);
  }, [createdAt, setValue]);

  const handleAddNewItem = () => {
    setItemList((prev) => [
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
  };

  const { isDarkMode } = useDarkMode();

  const { updateInvoice } = useUpdateInvoiceRow();
  const { updateSeAddress } = useUpdateSenderAdd();
  const { updateClAddress } = useUpdateClientAdd();
  const { updateItems } = useUpdateItems();
  const { deleteItems } = useDeleteItems();

  function handleDeleteItem(deleteId: number) {
    console.log(getValues().items);
    console.log(deleteId);
    deleteItems(deleteId);
    setItemList(itemList.filter((item) => item.id !== deleteId));
    const updatedItemsList = getValues().items.filter(
      (item) => item.id !== deleteId,
    );
    console.log(updatedItemsList);
    setValue("items", updatedItemsList);
    console.log(getValues().items);
  }

  console.log(getValues());
  function onSubmit(data: InvoiceDataProps) {
    console.log(data);
    const paymentDueDate = getPaymentDue(data.createdAt, payment);

    const invoiceData = {
      idd: idd,
      id: id,
      createdAt: data.createdAt,
      paymentDue: paymentDueDate,
      description: data.description,
      paymentTerms: payment,
      clientName: data.clientName,
      clientEmail: data.clientEmail,
      status: status,
      total: getValues()?.items?.reduce((acc, item) => acc + item.total, 0),
    };

    const clientData = {
      address: {
        id: clientId,
        invoiceId: clientInvoiceId,
        street: getValues().clientAddress[0].street,
        city: getValues().clientAddress[0].city,
        postCode: getValues().clientAddress[0].postCode,
        country: getValues().clientAddress[0].country,
      },
      id: clientId,
    };
    const senderData = {
      address: {
        id: senderId,
        invoiceId: senderInvoiceId,
        street: getValues().senderAdd[0].street,
        city: getValues().senderAdd[0].city,
        postCode: getValues().senderAdd[0].postCode,
        country: getValues().senderAdd[0].country,
      },
      id: senderId,
    };

    // const itemsData = {

    // }
    console.log("invoice:", invoiceData);
    console.log("client:", clientData);
    console.log("sender:", senderData);
    // console.log("items:", itemsData);
    console.log("getValues():", getValues());

    const itemsList = getValues()?.items;
    console.log(itemsList);

    updateInvoice(invoiceData, {
      onSuccess: () => {
        updateSeAddress(senderData);
        updateClAddress(clientData);
      },
    });

    itemsList.forEach((item) => {
      const itemsData = {
        items: {
          id: item.id,
          name: item.name,
          quantity: item.quantity,
          price: item.price,
          total: item.total,
          invoiceId: idd,
        },
        id: item.id,
      };

      console.log(itemsData);

      updateItems(itemsData);
    });
  }
  return (
    <form
      className={`absolute left-[8rem] top-0 z-[9] h-full max-w-[80rem] overflow-y-auto py-20 pl-28 pr-20 ${
        isDarkMode ? "bg-[#141625]" : "bg-white"
      }`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2
        className={`pb-[4.6rem] text-[2.4rem] font-bold leading-[3.2rem] tracking-[-0.05rem] ${isDarkMode ? "text-white" : "text-[#0c0e16]"}`}
      >
        Edit <span className="text-[#888eb0]">#</span>
        <span>{id}</span>
      </h2>

      <div>
        <h3 className="pb-[2.4rem] text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#7c5dfa]">
          Bill From
        </h3>

        <div>
          <div className="flex items-center justify-between">
            <label
              className={`block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] ${errors?.senderAdd?.[0]?.street?.message ? "text-[#ec5757]" : isDarkMode ? "text-[#dfe3fa]" : "text-[#7e88c3]"}`}
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
            className={`w-full rounded-[0.4rem] border border-solid  bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] focus:border focus:outline-none disabled:bg-slate-200 disabled:text-zinc-500 ${errors?.senderAdd?.[0]?.street?.message ? "border-[#ec5757]" : isDarkMode ? "border-[#252945] focus:border-[#9277ff]" : "border-[#dfe3fa] focus:border-[#9277ff]"} ${isDarkMode ? "bg-[#1e2139] text-white" : "bg-white text-[#0c0e16]"}`}
            defaultValue={senderStreet}
            {...register(`senderAdd.${0}.street`, {
              required: "can’t be empty",
            })}
          />
        </div>

        <div className="grid grid-cols-3 gap-10 pb-20 pt-10">
          <div>
            <div className="flex items-center justify-between">
              <label
                className={`block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] ${errors?.senderAdd?.[0]?.city?.message ? "text-[#ec5757]" : isDarkMode ? "text-[#dfe3fa]" : "text-[#7e88c3]"}`}
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
              className={`w-full rounded-[0.4rem] border border-solid  bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] focus:border focus:outline-none disabled:bg-slate-200 disabled:text-zinc-500 ${errors?.senderAdd?.[0]?.city?.message ? "border-[#ec5757]" : isDarkMode ? "border-[#252945] focus:border-[#9277ff]" : "border-[#dfe3fa] focus:border-[#9277ff]"} ${isDarkMode ? "bg-[#1e2139] text-white" : "bg-white text-[#0c0e16]"}`}
              defaultValue={senderCity}
              {...register(`senderAdd.${0}.city`, {
                required: "can’t be empty",
              })}
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                className={`block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] ${errors?.senderAdd?.[0]?.postCode?.message ? "text-[#ec5757]" : isDarkMode ? "text-[#dfe3fa]" : "text-[#7e88c3]"}`}
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
              className={`w-full rounded-[0.4rem] border border-solid  px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] focus:border focus:outline-none disabled:bg-slate-200 disabled:text-zinc-500  ${errors?.senderAdd?.[0]?.postCode?.message ? "border-[#ec5757]" : isDarkMode ? "border-[#252945] focus:border-[#9277ff]" : "border-[#dfe3fa] focus:border-[#9277ff]"} ${isDarkMode ? "bg-[#1e2139] text-white" : "bg-white text-[#0c0e16]"}`}
              defaultValue={senderPostCode}
              {...register(`senderAdd.${0}.postCode`, {
                required: "can’t be empty",
              })}
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                className={`block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] ${errors?.senderAdd?.[0]?.country?.message ? "text-[#ec5757]" : isDarkMode ? "text-[#dfe3fa]" : "text-[#7e88c3]"}`}
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
              className={`w-full rounded-[0.4rem] border border-solid px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] focus:border focus:outline-none disabled:bg-slate-200 disabled:text-zinc-500 ${errors?.senderAdd?.[0]?.country?.message ? "border-[#ec5757]" : isDarkMode ? "border-[#252945] focus:border-[#9277ff]" : "border-[#dfe3fa] focus:border-[#9277ff]"} ${isDarkMode ? "bg-[#1e2139] text-white" : "bg-white text-[#0c0e16]"}`}
              defaultValue={senderCountry}
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
                className={`block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] ${errors?.clientName?.message ? "text-[#ec5757]" : isDarkMode ? "text-[#dfe3fa]" : "text-[#7e88c3]"} `}
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
              className={`w-full rounded-[0.4rem] border border-solid px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] focus:border  focus:outline-none disabled:bg-slate-200 disabled:text-zinc-500  ${errors?.clientName?.message ? "border-[#ec5757]" : isDarkMode ? "border-[#252945] focus:border-[#9277ff]" : "border-[#dfe3fa] focus:border-[#9277ff]"} ${isDarkMode ? "bg-[#1e2139] text-white" : "bg-white text-[#0c0e16]"}`}
              defaultValue={clientName}
              {...register("clientName", { required: "can’t be empty" })}
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                className={`block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] ${errors?.clientEmail?.message ? "text-[#ec5757]" : isDarkMode ? "text-[#dfe3fa]" : "text-[#7e88c3]"}`}
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
              className={`w-full rounded-[0.4rem] border border-solid px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] focus:border focus:outline-none disabled:bg-slate-200 disabled:text-zinc-500 ${errors?.clientEmail?.message ? "border-[#ec5757]" : isDarkMode ? "border-[#252945] focus:border-[#9277ff]" : "border-[#dfe3fa] focus:border-[#9277ff]"} ${isDarkMode ? "bg-[#1e2139] text-white" : "bg-white text-[#0c0e16]"}`}
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
                className={`block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] ${errors?.clientAddress?.[0]?.street?.message ? "text-[#ec5757]" : isDarkMode ? "text-[#dfe3fa]" : "text-[#7e88c3]"}`}
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
              className={`w-full rounded-[0.4rem] border border-solid px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] focus:border focus:outline-none disabled:bg-slate-200 disabled:text-zinc-500 ${errors?.clientAddress?.[0]?.street?.message ? "border-[#ec5757]" : isDarkMode ? "border-[#252945] focus:border-[#9277ff]" : "border-[#dfe3fa] focus:border-[#9277ff]"} ${isDarkMode ? "bg-[#1e2139] text-white" : "bg-white text-[#0c0e16]"}`}
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
                className={`block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] ${errors?.clientAddress?.[0]?.city?.message ? "text-[#ec5757]" : isDarkMode ? "text-[#dfe3fa]" : "text-[#7e88c3]"}`}
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
              className={`w-full rounded-[0.4rem] border border-solid px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] focus:border focus:outline-none disabled:bg-slate-200 disabled:text-zinc-500 ${errors?.clientAddress?.[0]?.city?.message ? "border-[#ec5757]" : isDarkMode ? "border-[#252945] focus:border-[#9277ff]" : "border-[#dfe3fa] focus:border-[#9277ff]"} ${isDarkMode ? "bg-[#1e2139] text-white" : "bg-white text-[#0c0e16]"}`}
              defaultValue={clientCity}
              {...register(`clientAddress.${0}.city`, {
                required: "can’t be empty",
              })}
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                className={`block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] ${errors?.clientAddress?.[0]?.postCode?.message ? "text-[#ec5757]" : isDarkMode ? "text-[#dfe3fa]" : "text-[#7e88c3]"}`}
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
              className={`w-full rounded-[0.4rem] border border-solid px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] focus:border  focus:outline-none disabled:bg-slate-200 disabled:text-zinc-500 ${errors?.clientAddress?.[0]?.postCode?.message ? "border-[#ec5757]" : isDarkMode ? "border-[#252945] focus:border-[#9277ff]" : "border-[#dfe3fa] focus:border-[#9277ff]"} ${isDarkMode ? "bg-[#1e2139] text-white" : "bg-white text-[#0c0e16]"}`}
              defaultValue={clientPostCode}
              {...register(`clientAddress.${0}.postCode`, {
                required: "can’t be empty",
              })}
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                className={`block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] ${errors?.clientAddress?.[0]?.country?.message ? "text-[#ec5757]" : isDarkMode ? "text-[#dfe3fa]" : "text-[#7e88c3]"}`}
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
              className={`w-full rounded-[0.4rem] border border-solid px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] focus:border  focus:outline-none disabled:bg-slate-200 disabled:text-zinc-500 ${errors?.clientAddress?.[0]?.country?.message ? "border-[#ec5757]" : isDarkMode ? "border-[#252945] focus:border-[#9277ff]" : "border-[#dfe3fa] focus:border-[#9277ff]"} ${isDarkMode ? "bg-[#1e2139] text-white" : "bg-white text-[#0c0e16]"}`}
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
            <label
              className={`block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] ${errors?.createdAt?.message ? "text-[#ec5757]" : isDarkMode ? "text-[#dfe3fa]" : "text-[#7e88c3]"}`}
              htmlFor="clientDate"
            >
              Invoice Date
            </label>
            <input
              type="date"
              id="clientDate"
              defaultValue={createdAt}
              className="w-full rounded-[0.4rem] border border-solid border-[#dfe3fa] bg-transparent px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16] disabled:bg-slate-200"
              disabled={true}
            />
          </div>
          <div>
            <label
              className={`block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] ${isDarkMode ? "text-[#dfe3fa]" : "text-[#7e88c3]"}`}
              htmlFor="paymentTerms"
            >
              Payment Terms
            </label>
            <div
              className={`relative flex cursor-pointer items-center justify-between rounded-[0.4rem] border border-solid  px-8 py-6 ${isDarkMode ? "border-[#252945] bg-[#1e2139]" : "border-[#dfe3fa] bg-white"}`}
              onClick={togglePaymentDisplay}
            >
              <p
                className={`text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] ${isDarkMode ? "text-white" : "text-[#0c0e16]"}`}
              >
                Next {payment} {payment === 1 ? "Day" : "Days"}
              </p>
              <motion.img
                src="/icon-arrow-down.svg"
                alt="arrow down"
                initial={{ rotate: 0 }}
                animate={{ rotate: isPaymentDisplayed ? 180 : 0 }}
              />
              {isPaymentDisplayed && (
                <div
                  className={`absolute left-0 top-[5rem] w-full divide-y-[1px] divide-solid  rounded-[0.8rem]  py-[1.6rem] shadow-bigSh ${isDarkMode ? "divide-[#1e2139] bg-[#252945] text-white" : "divide-[#dfe3fa] bg-white text-[#0c0e16]"}`}
                >
                  <p
                    className="px-[2.4rem] pb-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] hover:text-[#9277ff]"
                    onClick={() => setPayment(1)}
                  >
                    Next 1 Day
                  </p>
                  <p
                    className="px-[2.4rem] py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] hover:text-[#9277ff]"
                    onClick={() => setPayment(7)}
                  >
                    Next 7 Days
                  </p>
                  <p
                    className="px-[2.4rem] py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] hover:text-[#9277ff]"
                    onClick={() => setPayment(14)}
                  >
                    Next 14 Days
                  </p>
                  <p
                    className="px-[2.4rem] pt-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] hover:text-[#9277ff]"
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
              className={`block pb-4 text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] ${errors?.description?.message ? "text-[#ec5757]" : isDarkMode ? "text-[#dfe3fa]" : "text-[#7e88c3]"}`}
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
            className={`w-full rounded-[0.4rem] border border-solid px-8 py-6 text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] focus:border  focus:outline-none disabled:bg-slate-200 disabled:text-zinc-500 ${errors?.description?.message ? "border-[#ec5757]" : isDarkMode ? "border-[#252945] focus:border-[#9277ff]" : "border-[#dfe3fa] focus:border-[#9277ff]"} ${isDarkMode ? "bg-[#1e2139] text-white" : "bg-white text-[#0c0e16]"}`}
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
          <div className="grid grid-cols-[4fr_6rem_2fr_2fr_1fr] items-start gap-6 pb-6">
            <p
              className={`text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] ${isDarkMode ? "text-[#dfe3fa]" : "text-[#7e88c3]"}`}
            >
              Item Name
            </p>
            <p
              className={`text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] ${isDarkMode ? "text-[#dfe3fa]" : "text-[#7e88c3]"}`}
            >
              QTY.
            </p>
            <p
              className={`text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] ${isDarkMode ? "text-[#dfe3fa]" : "text-[#7e88c3]"}`}
            >
              Price
            </p>
            <p
              className={`text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] ${isDarkMode ? "text-[#dfe3fa]" : "text-[#7e88c3]"}`}
            >
              Total
            </p>
          </div>

          {itemList &&
            itemList.map((item, index) => (
              <EditInvoiceItem
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                total={item.total}
                key={index}
                register={register}
                index={index}
                errors={errors}
                onDelete={handleDeleteItem}
                setValue={setValue}
                getValues={getValues}
                invoiceId={idd}
                id={item.id}
                isDarkMode={isDarkMode}
              />
            ))}
          <div
            className={`mt-7 flex w-full cursor-pointer items-center justify-center gap-6 rounded-[2.4rem] py-7 ${isDarkMode ? "bg-[#252945] text-white" : "bg-[#f9fafe] text-[#7e88c3] hover:bg-[#dfe3fa]"}`}
            onClick={handleAddNewItem}
          >
            <img src="/icon-plus.svg" alt="plus icon" />
            <p className="text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem]">
              Add New Item
            </p>
          </div>
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

export default EditInvoice;
