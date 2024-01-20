import { useMutation } from "@tanstack/react-query";
import { createClientAddressRow } from "../../utils/helpers";
import { ClientAddressProps } from "../../types/Types";

export function useCreateClientAdd() {
  const { mutate: createClAddress } = useMutation({
    mutationFn: (address: ClientAddressProps) =>
      createClientAddressRow(address),
  });

  return { createClAddress };
}
