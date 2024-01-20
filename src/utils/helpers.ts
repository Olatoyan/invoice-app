import {
  AllInvoiceDataProps,
  ItemInvoiceProps,
} from "../features/home/useInvoice";
import supabase from "../services/supabase";

type InvoiceResponse = {
  data: AllInvoiceDataProps[] | null;
  error: any;
};

export async function getAllInvoices(): Promise<InvoiceResponse> {
  const { data, error } = await supabase.from("invoice").select(`
  *,
  senderAdd (*),
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
  senderAdd (*),
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

export async function createItemRow(item: ItemInvoiceProps) {
  const { data, error } = await supabase.from("items").insert([item]).select();

  if (error) {
    console.log(error);
    throw new Error(`Could not create item ${item.name}`);
  }

  return { data, error };
}

export async function updateInvoiceItems(
  id: string,
  items: ItemInvoiceProps[],
) {
  const { error } = await supabase.from("items").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error(`Could not delete item ${id}`);
  }

  const { data, error: createError } = await supabase
    .from("items")
    .insert([items])
    .select();

  if (error) {
    console.log(error);
    throw new Error(`Could not create item ${items}`);
  }

  return { data, createError };
}
