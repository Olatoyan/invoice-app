import { useMutation } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { deleteInvoiceRow } from "../../utils/helpers";
import toast from "react-hot-toast";

export function useDeleteInvoice() {
  // const { id } = useParams();
  const navigate = useNavigate();
  const { mutate: deleteInvoice } = useMutation({
    mutationFn: (id: number) => deleteInvoiceRow(id),
    onSuccess: (data) => {
      console.log(data);
      // const dataId = data.id;
      toast.success(`Invoice  has been deleted`);
      navigate("/");
    },
  });

  return { deleteInvoice };
}
