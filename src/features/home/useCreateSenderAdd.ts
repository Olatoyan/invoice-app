import { useMutation } from "@tanstack/react-query";
import { createSenderAddressRow } from "../../utils/helpers";
import { SenderAddressProps } from "../../types/Types";
import toast from "react-hot-toast";

export function useCreateSenderAdd() {
  const { mutate: createSAddress,isPending: creatingSAddress } = useMutation({
    mutationFn: (address: SenderAddressProps) =>
      createSenderAddressRow(address),
    onSuccess: () => {
      toast.success("New Sender Address created");
    },
    onError: (error) => toast.error(error.message),
  });
  return { createSAddress,creatingSAddress };
}
