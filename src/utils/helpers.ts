import { addDays, format } from "date-fns";
import {
  AllInvoiceDataProps,
  ItemInvoiceProps,
} from "../features/home/useInvoice";
import supabase from "../services/supabase";
import { InvoiceDataProps } from "../types/Types";

type InvoiceResponse = {
  data: AllInvoiceDataProps[] | null;
  error: any;
};
type InvoiceResponse2 = {
  data: InvoiceDataProps[] | null;
  error: any;
};

export async function getAllInvoices(): Promise<InvoiceResponse2> {
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

export async function createInvoiceRow(invoice: InvoiceDataProps) {
  const { data, error } = await supabase
    .from("invoice")
    .insert([invoice])
    .select();

  if (error) {
    console.log(error);
    throw new Error(`Could not create Invoice ${invoice.clientName}`);
  }

  return { data, error };
}

export function generateRandomId() {
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randomNumber = Math.floor(1000 + Math.random() * 9000); // Generates a random 4-digit number
  const randomUppercaseLetter1 = uppercaseLetters.charAt(
    Math.floor(Math.random() * uppercaseLetters.length),
  );
  const randomUppercaseLetter2 = uppercaseLetters.charAt(
    Math.floor(Math.random() * uppercaseLetters.length),
  );

  const randomId = `${randomUppercaseLetter1}${randomUppercaseLetter2}${randomNumber}`;

  console.log(randomId);
  return randomId;
}

export function getPaymentDue(createdAt: string, paymentTerms: number) {
  const paymentDueDate = addDays(createdAt, paymentTerms);
  const formattedPaymentDueDate = format(paymentDueDate, "yyyy-MM-dd");
  return formattedPaymentDueDate;
}
