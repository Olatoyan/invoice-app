import DeleteInvoice from "../../ui/DeleteInvoice";
import NavBar from "../../ui/NavBar";
import EditInvoice from "./EditInvoice";
import InvoiceSection from "./InvoiceSection";

function InvoiceDetails() {
  return (
    <main className="relative grid min-h-[100dvh] grid-cols-[auto_1fr] bg-[#f8f8f8]">
      <NavBar />
      <InvoiceSection />

      {/* <EditInvoice /> */}
      <div className="fixed bottom-0 h-full w-full bg-black bg-opacity-50"></div>
      <DeleteInvoice />
    </main>
  );
}

export default InvoiceDetails;
