import NavBar from "../../ui/NavBar";
import HomeInvoiceSection from "./HomeInvoiceSection";

function HomeDetails() {
  return (
    <main className="grid min-h-[100dvh] grid-cols-[auto_1fr] bg-[#f8f8f8]">
      <NavBar />
      <HomeInvoiceSection />
    </main>
  );
}

export default HomeDetails;
