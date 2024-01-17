import HomeEmptyInvoice from "./HomeEmptyInvoice";
import HomeInvoiceHeading from "./HomeInvoiceHeading";
import { useInvoice } from "./useInvoice";
import HomeInvoicesBox from "./HomeInvoicesBox";
import Loader from "../../ui/Loader";
// import HomeInvoicesBox from "./HomeInvoicesBox";

function HomeInvoiceSection() {
  const { allInvoices, isLoading } = useInvoice();

  if (isLoading) return <Loader />;

  return (
    <section className="mx-auto w-full max-w-[80rem]">
      <HomeInvoiceHeading numInvoices={allInvoices?.length} />

      {allInvoices?.length === 0 ? (
        <HomeEmptyInvoice />
      ) : (
        <HomeInvoicesBox data={allInvoices} />
      )}
    </section>
  );
}

export default HomeInvoiceSection;
