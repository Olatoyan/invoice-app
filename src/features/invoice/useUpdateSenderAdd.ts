import { useMutation } from "@tanstack/react-query";
import { updateSenderAddress } from "../../utils/helpers";
import { SenderAddressProps } from "../../types/Types";

export function useUpdateSenderAdd() {
  const { mutate: updateSeAddress } = useMutation({
    mutationFn: (data: { address: SenderAddressProps; id: number }) =>
      updateSenderAddress(data.address, data.id),
  });

  return { updateSeAddress };
}
