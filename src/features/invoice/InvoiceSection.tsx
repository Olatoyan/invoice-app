import InvoiceDetailsSection from "./InvoiceDetailsSection";
import InvoiceStatusBox from "./InvoiceStatusBox";

function InvoiceSection() {
  return (
    <section className="mx-auto w-full max-w-[80rem] pt-24">
      <div className="flex items-center gap-12 pb-12">
        <img src="./icon-arrow-left.svg" alt="arrow left" />
        <p className="text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16]">
          Go back
        </p>
      </div>
      <InvoiceStatusBox />
      <InvoiceDetailsSection />
    </section>
  );
}

export default InvoiceSection;
