import { useNavigate } from "react-router-dom";
import InvoiceDetailsSection from "./InvoiceDetailsSection";
import InvoiceStatusBox from "./InvoiceStatusBox";
// import { useInvoiceById } from "./useInvoiceById";
// import { useEffect, useState } from "react";
// import { AllInvoiceDataProps } from "../home/useInvoice";
import { InvoiceDataProps } from "../../types/Types";
// import Loader from "../../ui/Loader";

type InvoiceSectionProps = {
  data: InvoiceDataProps;
  handleEdit: () => void;
  handleDelete: () => void;
};

function InvoiceSection({
  data,
  handleEdit,
  handleDelete,
}: InvoiceSectionProps) {
  const navigate = useNavigate();

  function handleMoveBack() {
    navigate(-1);
  }

  return (
    <section className="mx-auto w-full max-w-[80rem] pt-24">
      <div
        onClick={handleMoveBack}
        className="flex cursor-pointer items-center gap-12 pb-12"
      >
        <img src="/icon-arrow-left.svg" alt="arrow left" />
        <p className="text-[1.5rem] font-bold leading-[1.5rem] tracking-[-0.025rem] text-[#0c0e16]">
          Go back
        </p>
      </div>
      <InvoiceStatusBox
        data={data}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      <InvoiceDetailsSection data={data} />
    </section>
  );
}

export default InvoiceSection;
