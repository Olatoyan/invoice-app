import InVoicePriceItems from "./InVoicePriceItems";
import { InvoiceDataProps } from "../../types/Types";
import { useDarkMode } from "../../context/DarkModeContext";

function InvoiceDetailsSection({ data }: { data: InvoiceDataProps }) {
  const { isDarkMode } = useDarkMode();

  const {
    id,
    createdAt,
    paymentDue,
    description,
    clientName,
    clientEmail,
    clientAddress,
    senderAdd,
    items,
    total,
  } = data;

  const {
    street: clientStreet,
    city: clientCity,
    postCode: clientPostCode,
    country: clientCountry,
  } = clientAddress?.[0] || {};
  const {
    street: senderStreet,
    city: senderCity,
    postCode: senderPostCode,
    country: senderCountry,
  } = senderAdd?.[0] || {};

  const isSmallScreen = window.innerWidth < 600;
  return (
    <section
      className={`rounded-[0.8rem] p-20 pb-[4.8rem] shadow-invoiceSh mobile:p-8 ${isDarkMode ? "bg-[#1e2139]" : "bg-white"}`}
    >
      <div className="flex justify-between mobile:flex-col mobile:gap-12">
        <div>
          <h2 className="pb-3 text-[1.5rem] font-bold leading-[2.4rem] tracking-[-0.025rem] text-[#888eb0]">
            #
            <span className={`${isDarkMode ? "text-white" : "text-[#0c0e16]"}`}>
              {id}
            </span>
          </h2>
          <p
            className={`text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] ${isDarkMode ? "text-[#dfe3fa]" : "text-[#7e88c3]"}`}
          >
            {description}
          </p>
        </div>

        <address
          className={`flex flex-col items-end text-[1.3rem] font-medium not-italic leading-[1.8rem] tracking-[-0.01rem] mobile:items-start ${isDarkMode ? "text-[#dfe3fa]" : "text-[#7e88c3]"}`}
        >
          <span>{senderStreet}</span>
          <span>{senderCity}</span>
          <span>{senderPostCode}</span>
          <span>{senderCountry}</span>
        </address>
      </div>

      <div className="grid grid-cols-4 gap-12 pb-20 pt-8 mobile:grid-cols-2 mobile:pt-12">
        <div className="flex flex-col justify-between">
          <div>
            <h3
              className={`text-[1.4rem] font-medium leading-[1.5rem] tracking-[-0.01rem] ${isDarkMode ? "text-[#dfe3fa]" : "text-[#7e88c3]"}`}
            >
              Invoice Date
            </h3>
            <p
              className={`pt-6 text-[1.5rem] font-bold leading-[2rem] tracking-[-0.025rem] ${isDarkMode ? "text-white" : "text-[#0c0e16]"}`}
            >
              {createdAt}
            </p>
          </div>
          <div>
            <h3
              className={`text-[1.4rem] font-medium leading-[1.5rem] tracking-[-0.01rem] ${isDarkMode ? "text-[#dfe3fa]" : "text-[#7e88c3]"}`}
            >
              Payment Due
            </h3>
            <p
              className={`pt-6 text-[1.5rem] font-bold leading-[2rem] tracking-[-0.025rem] ${isDarkMode ? "text-white" : "text-[#0c0e16]"}`}
            >
              {paymentDue}
            </p>
          </div>
        </div>

        <div>
          <h3
            className={`text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] ${isDarkMode ? "text-[#dfe3fa]" : "text-[#7e88c3]"}`}
          >
            Bill To
          </h3>
          <p
            className={`pb-3 pt-6 text-[1.5rem] font-bold leading-[2rem] tracking-[-0.025rem] ${isDarkMode ? "text-white" : "text-[#0c0e16]"}`}
          >
            {clientName}
          </p>
          <address
            className={`flex flex-col items-start text-[1.3rem] font-medium not-italic leading-[1.8rem] tracking-[-0.01rem] ${isDarkMode ? "text-[#dfe3fa]" : "text-[#7e88c3]"}`}
          >
            <span>{clientStreet}</span>
            <span>{clientCity}</span>
            <span>{clientPostCode}</span>
            <span>{clientCountry}</span>
          </address>
        </div>

        <div className="col-start-3 col-end-5 mobile:col-span-full mobile:row-start-2">
          <h3
            className={`text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] ${isDarkMode ? "text-[#dfe3fa]" : "text-[#7e88c3]"}`}
          >
            Send to
          </h3>
          <p
            className={`pt-6 text-[1.5rem] font-bold leading-[2rem] tracking-[-0.025rem] ${isDarkMode ? "text-white" : "text-[#0c0e16]"}`}
          >
            {clientEmail}
          </p>
        </div>
      </div>

      <div>
        <div
          className={`rounded-[0.8rem_0.8rem_0_0] p-[3.3rem] pb-0 mobile:p-7 mobile:pb-0 ${isDarkMode ? "bg-[#252945]" : "bg-[#f9fafe]"}`}
        >
          <div className="grid grid-cols-[3fr_2.6rem_1fr_1fr] gap-28 pb-12 mobile:hidden">
            <h3
              className={`text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] ${isDarkMode ? "text-[#dfe3fa]" : "text-[#7e88c3]"}`}
            >
              Item Name
            </h3>

            <h3
              className={`text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] ${isDarkMode ? "text-[#dfe3fa]" : "text-[#7e88c3]"}`}
            >
              QTY.
            </h3>

            <h3
              className={`text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] ${isDarkMode ? "text-[#dfe3fa]" : "text-[#7e88c3]"}`}
            >
              Price
            </h3>

            <h3
              className={`text-[1.3rem] font-medium leading-[1.5rem] tracking-[-0.01rem] ${isDarkMode ? "text-[#dfe3fa]" : "text-[#7e88c3]"}`}
            >
              Total
            </h3>
          </div>

          {items?.map((item) => (
            <InVoicePriceItems
              key={item.id}
              name={item.name}
              qty={item.quantity}
              price={item.price}
              total={item.total}
            />
          ))}
        </div>

        <div
          className={`flex items-center justify-between rounded-[0_0_0.8rem_0.8rem] p-[3.3rem] pb-10 ${isDarkMode ? "bg-[#0c0e16]" : "bg-[#373b53]"}`}
        >
          <p className="text-[1.3rem] font-medium leading-[1.8rem] tracking-[-0.01rem] text-white">
            {isSmallScreen ? "Grand Total" : "Amount Due"}
          </p>
          <p className="text-[2.4rem] font-bold leading-[3.2rem] tracking-[-0.05rem] text-white">
            £ {(+total!).toFixed(2)}
          </p>
        </div>
      </div>
    </section>
  );
}

export default InvoiceDetailsSection;
