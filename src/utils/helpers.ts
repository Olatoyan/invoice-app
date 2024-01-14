import { AllInvoiceDataProps } from "../features/home/useInvoice";
import supabase from "../services/supabase";

type InvoiceResponse = {
  data: AllInvoiceDataProps[] | null;
  error: any;
};

export async function getAllInvoices(): Promise<InvoiceResponse> {
  const { data, error } = await supabase.from("invoice").select(`
  *,
  senderAddress (*),
  clientAddress (*),
  items (*)
  `);

  if (error) {
    console.log(error);
    throw new Error("Could not get all Invoices");
  }

  return { data, error };
}

export async function getInvoiceById(
  id: string | undefined,
): Promise<InvoiceResponse> {
  const { data, error } = await supabase
    .from("invoice")
    .select(
      `
  *,
  senderAddress (*),
  clientAddress (*),
  items (*)
  `,
    )
    .eq("id", id);

  if (error) {
    console.log(error);
    throw new Error(`Could not get Invoice ${id}`);
  }

  return { data, error };
}
