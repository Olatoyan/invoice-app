import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createInvoiceRow } from "../../utils/helpers";
import { CreateInvoiceProps } from "../../types/Types";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCreateInvoice() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: createInvoice } = useMutation({
    mutationFn: (newInvoice: CreateInvoiceProps) =>
      createInvoiceRow(newInvoice),
    onSuccess: () => {
      toast.success("New Invoice created");
      queryClient.invalidateQueries({ queryKey: ["invoice"] });
      navigate("/");
    },
    onError: (error) => toast.error(error.message),
  });

  return { createInvoice };
}
