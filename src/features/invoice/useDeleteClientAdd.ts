import { useMutation } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { deleteClientRow } from "../../utils/helpers";

export function useDeleteClientAdd() {
  // const { id } = useParams();
  const { mutate: deleteClient, isSuccess: isDeletingClient } = useMutation({
    mutationFn: (id: number) => deleteClientRow(id),
    onSuccess: () => {
      console.log("client has been deleted");
    },
  });

  return { deleteClient, isDeletingClient };
}
