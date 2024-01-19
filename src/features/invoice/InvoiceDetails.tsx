// import DeleteInvoice from "../../ui/DeleteInvoice";
import { useParams } from "react-router-dom";
import NavBar from "../../ui/NavBar";
// import CreateEditInvoice from "./CreateEditInvoice";
import InvoiceSection from "./InvoiceSection";
import { useInvoiceById } from "./useInvoiceById";
import { useState } from "react";
import Loader from "../../ui/Loader";
import EditInvoice from "./EditInvoice";

function InvoiceDetails() {
  const { id } = useParams();

  const { invoiceId, isLoading } = useInvoiceById(id);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  console.log(invoiceId);

  function handleEdit() {
    setIsEditing(true);
  }

  return (
    <main className="relative grid min-h-[100dvh] grid-cols-[auto_1fr] bg-[#f8f8f8]">
      <NavBar />

      {isLoading ? (
        <Loader />
      ) : (
        <InvoiceSection
          data={invoiceId?.data?.[0] || null}
          handleEdit={handleEdit}
        />
      )}

      {isEditing && (
        <>
          <EditInvoice type="edit" data={invoiceId?.data?.[0] || null} />
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
