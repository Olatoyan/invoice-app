// import DeleteInvoice from "../../ui/DeleteInvoice";
import { useParams } from "react-router-dom";
import NavBar from "../../ui/NavBar";
import CreateEditInvoice from "./CreateEditInvoice";
import InvoiceSection from "./InvoiceSection";
import { useInvoiceById } from "./useInvoiceById";
import { useEffect, useState } from "react";
import Loader from "../../ui/Loader";
import { AllInvoiceDataProps } from "../home/useInvoice";

function InvoiceDetails() {
  const { id } = useParams();
  const invoiceQuery = useInvoiceById(id);
  // console.log(invoiceQuery);

  const [data, setData] = useState<AllInvoiceDataProps | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  function handleEdit() {
    setIsEditing(true);
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

  // if (isLoading) return <Loader />;

  return (
    <main className="relative grid min-h-[100dvh] grid-cols-[auto_1fr] bg-[#f8f8f8]">
      <NavBar />

      {isLoading ? (
        <Loader />
      ) : (
        <InvoiceSection data={data} handleEdit={handleEdit} />
      )}

      {isEditing && (
        <>
          <CreateEditInvoice type="edit" data={data} />
          <div
            className="fixed bottom-0 h-full w-full bg-black bg-opacity-50"
            onClick={() => setIsEditing(false)}
          ></div>
          {/* <DeleteInvoice /> */}
        </>
      )}
    </main>
  );
}

export default InvoiceDetails;
