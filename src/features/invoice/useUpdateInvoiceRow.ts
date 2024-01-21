import { useMutation } from "@tanstack/react-query";
import { updateInvoiceRows } from "../../utils/helpers";
import { useNavigate, useParams } from "react-router-dom";
import { CreateInvoiceProps } from "../../types/Types";
import toast from "react-hot-toast";

export function useUpdateInvoiceRow() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { mutate: updateInvoice } = useMutation({
    mutationFn: (invoice: CreateInvoiceProps) =>
      updateInvoiceRows(invoice, id!),
    onSuccess: (data) => {
      console.log(data);
      const dataId = data.data[0].id;
      toast.success(`Invoice ${dataId} has been updated`);
      navigate("/");
    },
  });

  return { updateInvoice };
}
