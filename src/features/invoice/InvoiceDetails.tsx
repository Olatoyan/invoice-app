import NavBar from "../../ui/NavBar";
import InvoiceSection from "./InvoiceSection";
import { useInvoiceById } from "./useInvoiceById";
import { useState } from "react";
import Loader from "../../ui/Loader";
import EditInvoice from "./EditInvoice";
import DeleteInvoice from "../../ui/DeleteInvoice";
import { useDarkMode } from "../../context/DarkModeContext";

function InvoiceDetails() {
  const { invoiceId, isLoading } = useInvoiceById();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const { isDarkMode } = useDarkMode();
 

  function handleEdit() {
    setIsEditing(true);
  }

  function handleUndoEdit() {
    setIsEditing(false);
  }

  function handleDelete() {
    setIsDeleting(true);
  }

  function handleUndoDelete() {
    setIsDeleting(false);
  }

  return (
    <main
      className={`laptop:grid-cols-1 laptop:grid-rows-[auto_1fr] relative grid min-h-[100dvh] grid-cols-[auto_1fr] ${isDarkMode ? "bg-[#141625]" : "bg-[#f8f8f8]"}`}
    >
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
          <EditInvoice
            data={invoiceId!.data[0]}
            handleUndoEdit={handleUndoEdit}
          />
          <div
            className="fixed bottom-0 h-full w-full bg-black bg-opacity-50"
            onClick={handleUndoEdit}
          ></div>
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
            onClick={handleUndoEdit}
          ></div>
        </>
      )}
    </main>
  );
}

export default InvoiceDetails;
