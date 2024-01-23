import { useMutation } from "@tanstack/react-query";
import { deleteItemsRow } from "../../utils/helpers";

export function useDeleteItems() {
  const { mutate: deleteItems, isSuccess: isDeletingItems } = useMutation({
    mutationFn: (id: number) => deleteItemsRow(id),
  });

  return { deleteItems, isDeletingItems };
}
