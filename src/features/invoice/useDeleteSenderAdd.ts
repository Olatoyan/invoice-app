import { useMutation } from "@tanstack/react-query";
import { deleteSenderRow } from "../../utils/helpers";
// import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

export function useDeleteSenderAdd() {
  const { mutate: deleteSender } = useMutation({
    mutationFn: (id: number) => deleteSenderRow(id),
    onSuccess: () => {
      toast.success("Sender Address has been deleted");
      console.log("sender has been deleted");
    },
  });

  return { deleteSender };
}
