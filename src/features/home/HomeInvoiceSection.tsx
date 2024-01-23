import HomeEmptyInvoice from "./HomeEmptyInvoice";
import HomeInvoiceHeading from "./HomeInvoiceHeading";
import HomeInvoicesBox from "./HomeInvoicesBox";
import { InvoiceDataProps } from "../../types/Types";

type HomeInvoiceSectionProps = {
  allInvoices: InvoiceDataProps[] | null;
  setCreateInvoice: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedCheckbox: React.Dispatch<
    React.SetStateAction<"all" | "pending" | "paid" | "draft" | undefined>
  >;
  selectedCheckbox: "all" | "pending" | "paid" | "draft" | undefined;
};

function HomeInvoiceSection({
  allInvoices,
  setCreateInvoice,
  setSelectedCheckbox,
  selectedCheckbox,
}: HomeInvoiceSectionProps) {
  return (
    <section className="mx-auto w-full max-w-[88rem] px-8">
      <HomeInvoiceHeading
        numInvoices={allInvoices?.length}
        setCreateInvoice={setCreateInvoice}
        setSelectedCheckbox={setSelectedCheckbox}
        selectedCheckbox={selectedCheckbox}
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
