import { useMutation } from "@tanstack/react-query";
import { createItemRow } from "../../utils/helpers";
import { ItemInvoiceProps } from "../home/useInvoice";

export function useCreateItemRow() {
  const { mutate, isLoading } = useMutation({
    mutationFn: (item: ItemInvoiceProps) => createItemRow(item),
  });
}
