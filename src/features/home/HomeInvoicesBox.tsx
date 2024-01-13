import HomeInvoiceItem from "./HomeInvoiceItem";

function HomeInvoicesBox() {
  return (
    <section className="flex flex-col gap-[1.6rem]">
      <HomeInvoiceItem
        id="RT3080"
        name="Jensen Huang"
        status="paid"
        amount="14,002.33"
        dueDate="19 Aug 2021"
      />
      <HomeInvoiceItem
        id="RT2080"
        name="Alysa Werner"
        status="pending"
        amount="102.04"
        dueDate="12 Oct 2021"
      />
      <HomeInvoiceItem
        id="RT2080"
        name="Alysa Werner"
        status="draft"
        amount="102.04"
        dueDate="12 Oct 2021"
      />
    </section>
  );
}

export default HomeInvoicesBox;
