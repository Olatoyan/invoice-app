import { useMutation } from "@tanstack/react-query";
import { updateInvoiceRows } from "../../utils/helpers";
import { useParams } from "react-router-dom";
import { CreateInvoiceProps } from "../../types/Types";

export function useUpdateInvoiceRow() {
  const { id } = useParams();
  const { mutate } = useMutation({
    mutationFn: (invoice: CreateInvoiceProps) =>
      updateInvoiceRows(invoice, id!),
  });

  return { mutate };
}
