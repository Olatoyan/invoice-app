import { Route, Routes } from "react-router-dom";
import HomeDetails from "./features/home/HomeDetails";
import InvoiceDetails from "./features/invoice/InvoiceDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeDetails />} />
      <Route path="/invoice" element={<InvoiceDetails />} />
    </Routes>
  );
}

export default App;
