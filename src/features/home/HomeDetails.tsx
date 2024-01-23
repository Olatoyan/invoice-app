import { useState } from "react";
import NavBar from "../../ui/NavBar";
import HomeInvoiceSection from "./HomeInvoiceSection";
import { useInvoice } from "./useInvoice";
import Loader from "../../ui/Loader";
import CreateInvoice from "./CreateInvoice";
import { useDarkMode } from "../../context/DarkModeContext";

function HomeDetails() {
  const [createInvoice, setCreateInvoice] = useState(false);
  const [selectedCheckbox, setSelectedCheckbox] = useState<
    "all" | "pending" | "draft" | "paid" | undefined
  >("all");

  const { allInvoices, isLoading } = useInvoice(selectedCheckbox);

  const { isDarkMode } = useDarkMode();

  return (
    <main
      className={`relative grid min-h-[100dvh] grid-cols-[auto_1fr] ${isDarkMode ? "bg-[#141625]" : "bg-[#f8f8f8]"} laptop:grid-cols-1`}
    >
      <NavBar />

      {isLoading ? (
        <Loader />
      ) : (
        <HomeInvoiceSection
          allInvoices={allInvoices}
          setCreateInvoice={setCreateInvoice}
          setSelectedCheckbox={setSelectedCheckbox}
          selectedCheckbox={selectedCheckbox}
        />
      )}

      {createInvoice && (
        <>
          <CreateInvoice setCreateInvoice={setCreateInvoice} />
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
