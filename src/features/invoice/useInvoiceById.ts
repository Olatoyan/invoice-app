import { useQuery } from "@tanstack/react-query";
import { getInvoiceById } from "../../utils/helpers";

export async function useInvoiceById(id: string | undefined) {
  const { data: invoiceId, isLoading } = useQuery({
    queryKey: ["invoice", id],
    queryFn: () => getInvoiceById(id),
  });
  return { data: invoiceId, isLoading };
}
