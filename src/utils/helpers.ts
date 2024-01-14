import { AllInvoiceDataProps } from "../features/home/useInvoice";
import supabase from "../services/supabase";

type InvoiceResponse = {
  invoice: AllInvoiceDataProps[] | null;
  error: any;
};

export async function getAllInvoices(): Promise<InvoiceResponse> {
  const { data: invoice, error } = await supabase.from("invoice").select(`
  *,
  senderAddress (*),
  clientAddress (*),
  items (*)
  `);

  return { invoice, error };
}
