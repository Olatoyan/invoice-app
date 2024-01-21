import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleStatus } from "../../utils/helpers";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

export function useUpdateStatus() {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const { mutate: updateStatus } = useMutation({
    mutationFn: () => toggleStatus(id!),
    onSuccess: () => {
      toast.success(`Invoice ${id} status has been updated`);
      queryClient.invalidateQueries({ queryKey: ["invoice", id] });
    },
  });

  return { updateStatus };
}
