import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createItemRow } from "../../utils/helpers";
import { ItemInvoiceProps } from "../home/useInvoice";
import toast from "react-hot-toast";

export function useCreateItemRow(id: string | undefined) {
  const queryClient = useQueryClient();
  console.log(id);

  const { mutate: createItem } = useMutation({
    mutationFn: (item: ItemInvoiceProps) => createItemRow(item),
    onSuccess: (data) => {
      console.log(data);
      toast.success("Item created");
      queryClient.invalidateQueries({ queryKey: ["invoice", id] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { createItem };
}
