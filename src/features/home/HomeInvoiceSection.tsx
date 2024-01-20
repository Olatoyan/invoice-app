import HomeEmptyInvoice from "./HomeEmptyInvoice";
import HomeInvoiceHeading from "./HomeInvoiceHeading";
import HomeInvoicesBox from "./HomeInvoicesBox";
import { InvoiceDataProps } from "../../types/Types";

type HomeInvoiceSectionProps = {
  allInvoices: InvoiceDataProps[] | null;
  setCreateInvoice: React.Dispatch<React.SetStateAction<boolean>>;
};

function HomeInvoiceSection({
  allInvoices,
  setCreateInvoice,
}: HomeInvoiceSectionProps) {
  return (
    <section className="mx-auto w-full max-w-[80rem]">
      <HomeInvoiceHeading
        numInvoices={allInvoices?.length}
        setCreateInvoice={setCreateInvoice}
      />

      {allInvoices?.length === 0 ? (
        <HomeEmptyInvoice />
      ) : (
        <HomeInvoicesBox data={allInvoices} />
      )}
    </section>
  );
}

export default HomeInvoiceSection;
