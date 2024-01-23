import { useParams } from "react-router-dom";
import { InvoiceDataProps } from "../types/Types";
import { useDeleteSenderAdd } from "../features/invoice/useDeleteSenderAdd";
import { useDeleteItems } from "../features/invoice/useDeleteItems";
import { useDeleteInvoice } from "../features/invoice/useDeleteInvoice";
import { useDeleteClientAdd } from "../features/invoice/useDeleteClientAdd";
import { useDarkMode } from "../context/DarkModeContext";

type DeleteInvoiceProps = {
  handleUndoDelete: () => void;
  data: InvoiceDataProps;
};

function DeleteInvoice({ handleUndoDelete, data }: DeleteInvoiceProps) {
  const { id } = useParams();

  // const senderData = {

  // }

  const { deleteSender } = useDeleteSenderAdd();
  const { deleteClient } = useDeleteClientAdd();
  const { deleteInvoice } = useDeleteInvoice();
  const { deleteItems } = useDeleteItems();

  console.log(data);
  function deleteInvoiceData() {
    console.log(data);

    // Delete sender
    deleteSender(
      data.senderAdd[0].id,

      // {
      //   onSuccess: () => {
      //     if (
      //       data.clientAddress.length === 0 &&
      //       data.items.length === 0 &&
      //       data.senderAdd.length === 0
      //     ) {
      //       console.log("all data has been deleted");
      //     } else {
      //       deleteInvoice(data.idd);
      //       console.log("there are still data to be deleted");
      //     }
      //   },
      // },
    );

    // Delete client
    deleteClient(data.clientAddress[0].id, {
      onSuccess: () => {
        if (
          data.senderAdd.length === 0 &&
          data.items.length === 0 &&
          data.clientAddress.length === 0
        ) {
          console.log("all data has been deleted");
        } else {
          deleteInvoice(data.idd);
          console.log("there are still data to be deleted");
        }
      },
    });

    // Delete items
    data.items.forEach((item) => {
      deleteItems(item.id);
    });
  }

  const { isDarkMode } = useDarkMode();

  return (
    <div className="mobile:px-8 fixed top-0 z-[3] flex h-full w-full items-center justify-center">
      <div
        className={`mobile:p-12 z-20 max-w-[50rem] rounded-[0.8rem] p-20 shadow-invoiceSh ${isDarkMode ? "bg-[#1e2139]" : "bg-white"}`}
      >
        <h2
          className={`pb-5 text-[2.4rem] font-bold leading-[3.2rem] tracking-[-0.05rem] ${isDarkMode ? "text-white" : "text-[#0c0e16]"}`}
        >
          Confirm Deletion
        </h2>
        <p
          className={`pb-6 text-[1.3rem] font-medium leading-[2.2rem] tracking-[-0.01rem] ${isDarkMode ? "text-[#dfe3fa]" : "text-[#888eb0]"}`}
        >
          Are you sure you want to delete invoice #{id}? This action cannot be
          undone.
        </p>
        <div className="flex items-center justify-end gap-6 pt-6">
          <button
            className="mobile:px-6 mobile:py-5 rounded-[2.4rem] bg-[#f9fafe] px-10 py-7 text-[1.5rem] font-bold leading-[1.5rem]  tracking-[-0.025rem] text-[#7e88c3] hover:bg-[#dfe3fa]"
            onClick={handleUndoDelete}
          >
            Cancel
          </button>
          <button
            className="mobile:px-6 mobile:py-5 rounded-[2.4rem] bg-[#ec5757] px-10 py-7 text-[1.5rem] font-bold leading-[1.5rem]  tracking-[-0.025rem] text-white hover:bg-[#ff9797]"
            onClick={deleteInvoiceData}
          >
            Delete
          </button>
        </div>
      </div>

      <div className="fixed bottom-0 z-[11] h-full w-full bg-black bg-opacity-50"></div>
    </div>
  );
}

export default DeleteInvoice;
