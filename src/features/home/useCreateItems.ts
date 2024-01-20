import { useMutation } from "@tanstack/react-query";
import { ItemProps } from "../../types/Types";
import { createItemsRow } from "../../utils/helpers";

export function useCreateItems() {
  const { mutate: createItems } = useMutation({
    mutationFn: (item: ItemProps) => createItemsRow(item),
  });

  return { createItems };
}
