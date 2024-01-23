import { useMutation } from "@tanstack/react-query";
import { deleteClientRow } from "../../utils/helpers";

export function useDeleteClientAdd() {
  const { mutate: deleteClient, isSuccess: isDeletingClient } = useMutation({
    mutationFn: (id: number) => deleteClientRow(id),
  });

  return { deleteClient, isDeletingClient };
}
