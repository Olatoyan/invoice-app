import { useMutation } from "@tanstack/react-query";
import { createClientAddressRow } from "../../utils/helpers";
import { ClientAddressProps } from "../../types/Types";

export function useCreateClientAdd() {
  const { mutate: createClAddress, isPending: creatingClAddress } = useMutation(
    {
      mutationFn: (address: ClientAddressProps) =>
        createClientAddressRow(address),
      onSuccess: (data) => {
        console.log('client:', data);
      },
    },
  );

  return { createClAddress, creatingClAddress };
}
