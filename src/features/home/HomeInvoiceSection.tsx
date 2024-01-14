import { useEffect, useState } from "react";
import HomeEmptyInvoice from "./HomeEmptyInvoice";
import HomeInvoiceHeading from "./HomeInvoiceHeading";
import { AllInvoiceDataProps, useInvoice } from "./useInvoice";
import HomeInvoicesBox from "./HomeInvoicesBox";
import Loader from "../../ui/Loader";
// import HomeInvoicesBox from "./HomeInvoicesBox";

function HomeInvoiceSection() {
  const invoiceQuery = useInvoice();
  const [data, setData] = useState<AllInvoiceDataProps[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await invoiceQuery;
        console.log(result);
        setData(result.allInvoices);
        setIsLoading(result.isLoading);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [invoiceQuery]);

  if (isLoading) return <Loader />;

  return (
    <section className="mx-auto w-full max-w-[80rem]">
      <HomeInvoiceHeading numInvoices={data?.length} />

      {data?.length === 0 ? (
        <HomeEmptyInvoice />
      ) : (
        <HomeInvoicesBox data={data} />
      )}
    </section>
  );
}

export default HomeInvoiceSection;
