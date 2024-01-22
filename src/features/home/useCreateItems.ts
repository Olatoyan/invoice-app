import { useMutation } from "@tanstack/react-query";
import { ItemProps } from "../../types/Types";
import { createItemsRow } from "../../utils/helpers";

export function useCreateItems() {
  const { mutate: createItems, isPending: creatingItems } = useMutation({
    mutationFn: (item: ItemProps) => createItemsRow(item),
    onSuccess: (data) => {
      console.log("items:", data);
    },
  });

  return { createItems, creatingItems };
}
