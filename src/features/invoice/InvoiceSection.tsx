import { useNavigate, useParams } from "react-router-dom";
import InvoiceDetailsSection from "./InvoiceDetailsSection";
import InvoiceStatusBox from "./InvoiceStatusBox";
import { useInvoiceById } from "./useInvoiceById";
import { useEffect, useState } from "react";
import { AllInvoiceDataProps } from "../home/useInvoice";
import Loader from "../../ui/Loader";

function InvoiceSection() {
  const { id } = useParams();
  const invoiceQuery = useInvoiceById(id);
  // console.log(invoiceQuery);

  const [data, setData] = useState<AllInvoiceDataProps | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const navigate = useNavigate();

  function handleMoveBack() {
    navigate(-1);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, isLoading } = await invoiceQuery;
        setData(data?.data?.[0] || null);
        // console.log(isLoading);
        // setData(result.allInvoices)
        setIsLoading(isLoading);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [invoiceQuery]);

  if (isLoading) return <Loader />;

  return (
    <section className="mx-auto w-full max-w-[80rem] pt-24">
      <div
        onClick={() => navigate(-1)}
        className="flex cursor-pointer items-center gap-12 pb-12"
      >
        <img src="/icon-arrow-left.svg" alt="arrow left" />
        <p className="text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16]">
          Go back
        </p>
      </div>
      <InvoiceStatusBox data={data} />
      <InvoiceDetailsSection data={data} />
    </section>
  );
}

export default InvoiceSection;
