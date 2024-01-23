import { useMutation } from "@tanstack/react-query";
import { deleteSenderRow } from "../../utils/helpers";

export function useDeleteSenderAdd() {
  const { mutate: deleteSender } = useMutation({
    mutationFn: (id: number) => deleteSenderRow(id),
  });

  return { deleteSender };
}
