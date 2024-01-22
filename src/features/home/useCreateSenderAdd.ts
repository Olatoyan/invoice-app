import { useMutation } from "@tanstack/react-query";
import { createSenderAddressRow } from "../../utils/helpers";
import { SenderAddressProps } from "../../types/Types";

export function useCreateSenderAdd() {
  const { mutate: createSAddress, isPending: creatingSAddress } = useMutation({
    mutationFn: (address: SenderAddressProps) =>
      createSenderAddressRow(address),
    onSuccess: (data) => {
      console.log("sender:", data);
    },
  });
  return { createSAddress, creatingSAddress };
}
