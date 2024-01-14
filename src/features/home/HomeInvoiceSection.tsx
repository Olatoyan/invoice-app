import { useEffect, useState } from "react";
import HomeEmptyInvoice from "./HomeEmptyInvoice";
import HomeInvoiceHeading from "./HomeInvoiceHeading";
import { AllInvoiceDataProps, useInvoice } from "./useInvoice";
import HomeInvoicesBox from "./HomeInvoicesBox";
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
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [invoiceQuery]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <section className="mx-auto w-full max-w-[80rem]">
      <HomeInvoiceHeading />

      {data?.length === 0 ? (
        <HomeEmptyInvoice />
      ) : (
        <HomeInvoicesBox data={data} />
      )}
    </section>
  );
}

export default HomeInvoiceSection;
