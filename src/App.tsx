import { Route, Routes } from "react-router-dom";
import HomeDetails from "./features/home/HomeDetails";
import InvoiceDetails from "./features/invoice/InvoiceDetails";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Routes>
        <Route path="/" element={<HomeDetails />} />
        <Route path="/invoice" element={<InvoiceDetails />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
