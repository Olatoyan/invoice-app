import { useQuery } from "@tanstack/react-query";
import { getAllInvoices } from "../../utils/helpers";

export type AllInvoiceDataProps = {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: string;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: SenderAddressProps[];
  clientAddress: ClientAddressProps[];
  items: ItemInvoiceProps[];
  total: string;
};

type ClientAddressProps = {
  id: string;
  street: string;
  city: string;
  country: string;
  postCode: string;
};
type SenderAddressProps = {
  id: string;
  street: string;
  city: string;
  country: string;
  postCode: string;
};

export type ItemInvoiceProps = {
  id: string;
  name: string;
  quantity: string;
  price: string;
  total: string;
  invoiceId: string;
};

// type InvoiceData = {
//   invoice: AllInvoiceDataProps[] | null;
// };

// type InvoiceData = {
//   invoice: any[] | null;
//   isLoading: boolean;
// };

export async function useInvoice() {
  const { data, isLoading } = useQuery({
    queryKey: ["invoice"],
    queryFn: getAllInvoices,
  });
  const allInvoices = data?.data || null;
  return { allInvoices, isLoading };
}
