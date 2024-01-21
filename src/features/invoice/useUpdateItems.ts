import { useMutation } from "@tanstack/react-query";
import { updateItemsRow } from "../../utils/helpers";
import { ItemProps } from "../../types/Types";
import toast from "react-hot-toast";

export function useUpdateItems() {
  const { mutate: updateItems } = useMutation({
    mutationFn: (data: { items: ItemProps; id: number }) =>
      updateItemsRow(data.items, data.id),
    onSuccess: () => {
      toast.success("Item has been updated");
    },
  });

  return { updateItems };
}
