import { useMutation } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { deleteClientRow } from "../../utils/helpers";

export function useDeleteClientAdd() {
  // const { id } = useParams();
  const { mutate: deleteClient } = useMutation({
    mutationFn: (id: number) => deleteClientRow(id),
  });

  return { deleteClient };
}
