import { useQuery } from "@tanstack/react-query";
import { getAllInvoices } from "../../utils/helpers";

export function useInvoice(
  status: "all" | "pending" | "draft" | "paid" = "all",
) {
  const { data, isLoading } = useQuery({
    queryKey: ["invoice", status],
    queryFn: () => getAllInvoices(status),
  });
  const allInvoices = data?.data || null;
  return { allInvoices, isLoading };
}
