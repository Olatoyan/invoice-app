import { useState } from "react";
import NavBar from "../../ui/NavBar";
import HomeInvoiceSection from "./HomeInvoiceSection";
import { useInvoice } from "./useInvoice";
import Loader from "../../ui/Loader";
import CreateInvoice from "./CreateInvoice";

function HomeDetails() {
  const [createInvoice, setCreateInvoice] = useState(false);
  const { allInvoices, isLoading } = useInvoice();

  return (
    <main className="relative grid min-h-[100dvh] grid-cols-[auto_1fr] bg-[#f8f8f8]">
      <NavBar />

      {isLoading ? (
        <Loader />
      ) : (
        <HomeInvoiceSection
          allInvoices={allInvoices}
          setCreateInvoice={setCreateInvoice}
        />
      )}

      {createInvoice && (
        <>
          <CreateInvoice />
          <div
            className="fixed bottom-0 left-0 h-full w-full bg-black bg-opacity-50"
            onClick={() => setCreateInvoice(false)}
          ></div>
        </>
      )}
    </main>
  );
}

export default HomeDetails;
