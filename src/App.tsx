import { Navigate, Route, Routes } from "react-router-dom";
import HomeDetails from "./features/home/HomeDetails";
import InvoiceDetails from "./features/invoice/InvoiceDetails";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { DarkModeProvider } from "./context/DarkModeContext";

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
      <DarkModeProvider>
        <Routes>
          <Route path="/" element={<HomeDetails />} />
          <Route path="invoice/:id" element={<InvoiceDetails />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </DarkModeProvider>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#fff",
            color: "#0c0e16",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
