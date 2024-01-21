import { useMutation } from "@tanstack/react-query";
import { ClientAddressProps } from "../../types/Types";
import { updateClientAddress } from "../../utils/helpers";

export function useUpdateClientAdd() {
  const { mutate: updateClAddress } = useMutation({
    mutationFn: (data: { address: ClientAddressProps; id: number }) =>
      updateClientAddress(data.address, data.id),
  });

  return { updateClAddress };
}
