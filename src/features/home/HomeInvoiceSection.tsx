import HomeEmptyInvoice from "./HomeEmptyInvoice";
import HomeInvoiceHeading from "./HomeInvoiceHeading";
import { useInvoice } from "./useInvoice";
import HomeInvoicesBox from "./HomeInvoicesBox";
import Loader from "../../ui/Loader";
import { useState } from "react";
import CreateInvoice from "./CreateInvoice";
// import HomeInvoicesBox from "./HomeInvoicesBox";

function HomeInvoiceSection() {
  const [createInvoice, setCreateInvoice] = useState(false);
  const { allInvoices, isLoading } = useInvoice();

  if (isLoading) return <Loader />;

  return (
    <section className="mx-auto min-h-[100dvh] w-full max-w-[80rem]">
      <HomeInvoiceHeading
        numInvoices={allInvoices?.length}
        setCreateInvoice={setCreateInvoice}
      />

      {allInvoices?.length === 0 ? (
        <HomeEmptyInvoice />
      ) : (
        <HomeInvoicesBox data={allInvoices} />
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
    </section>
  );
}

export default HomeInvoiceSection;
