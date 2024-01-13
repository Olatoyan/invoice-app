import HomeEmptyInvoice from "./HomeEmptyInvoice";
import HomeInvoiceHeading from "./HomeInvoiceHeading";
// import HomeInvoicesBox from "./HomeInvoicesBox";

function HomeInvoiceSection() {
  return (
    <section className="mx-auto w-full max-w-[80rem]">
      <HomeInvoiceHeading />

      {/* <HomeInvoicesBox /> */}
      <HomeEmptyInvoice />
    </section>
  );
}

export default HomeInvoiceSection;
