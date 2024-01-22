// import DeleteInvoice from "../../ui/DeleteInvoice";
// import { useParams } from "react-router-dom";
import NavBar from "../../ui/NavBar";
// import CreateEditInvoice from "./CreateEditInvoice";
import InvoiceSection from "./InvoiceSection";
import { useInvoiceById } from "./useInvoiceById";
import { useState } from "react";
import Loader from "../../ui/Loader";
import EditInvoice from "./EditInvoice";
import DeleteInvoice from "../../ui/DeleteInvoice";

function InvoiceDetails() {
  const { invoiceId, isLoading } = useInvoiceById();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  // console.log(invoiceId);

  function handleEdit() {
    setIsEditing(true);
  }

  function handleDelete() {
    setIsDeleting(true);
  }

  function handleUndoDelete() {
    setIsDeleting(false);
  }

  return (
    <main className="relative grid min-h-[100dvh] grid-cols-[auto_1fr] bg-[#f8f8f8]">
      <NavBar />

      {isLoading ? (
        <Loader />
      ) : (
        <InvoiceSection
          data={invoiceId!.data[0]}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      )}

      {isEditing && (
        <>
          <EditInvoice data={invoiceId!.data[0]} />
          <div
            className="fixed bottom-0 h-full w-full bg-black bg-opacity-50"
            onClick={() => setIsEditing(false)}
          ></div>
          {/* <DeleteInvoice /> */}
        </>
      )}

      {isDeleting && (
        <>
          <DeleteInvoice
            handleUndoDelete={handleUndoDelete}
            data={invoiceId!.data[0]}
          />
          <div
            className="fixed bottom-0 h-full w-full bg-black bg-opacity-50"
            onClick={() => setIsEditing(false)}
          ></div>
        </>
      )}
    </main>
  );
}

export default InvoiceDetails;
