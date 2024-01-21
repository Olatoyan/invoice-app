import { useQuery } from "@tanstack/react-query";
import { getInvoiceById } from "../../utils/helpers";
import { useParams } from "react-router-dom";

export function useInvoiceById() {
  const { id } = useParams();
  const { data: invoiceId, isLoading } = useQuery({
    queryKey: ["invoice", id],
    queryFn: () => getInvoiceById(id),
  });

  return { invoiceId, isLoading };
}
