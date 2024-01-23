import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createInvoiceRow } from "../../utils/helpers";
import { CreateInvoiceProps } from "../../types/Types";
import toast from "react-hot-toast";

export function useCreateInvoice() {
  const queryClient = useQueryClient();

  const { mutate: createInvoice, isPending: creatingInvoice } = useMutation({
    mutationFn: (newInvoice: CreateInvoiceProps) =>
      createInvoiceRow(newInvoice),
    onSuccess: () => {
      toast.success("New Invoice created");
      queryClient.invalidateQueries({ queryKey: ["invoice"] });
    },
    onError: (error) => toast.error(error.message),
  });

  return { createInvoice, creatingInvoice };
}
