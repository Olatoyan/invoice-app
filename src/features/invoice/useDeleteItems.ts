import { useMutation } from "@tanstack/react-query";
import { deleteItemsRow } from "../../utils/helpers";

export function useDeleteItems() {
  const { mutate: deleteItems } = useMutation({
    mutationFn: (id: number) => deleteItemsRow(id),
  });

  return { deleteItems };
}
