function DeleteInvoice() {
  return (
    <div className="absolute top-0 flex h-full w-full items-center justify-center">
      <div className="shadow-invoiceSh z-20 max-w-[50rem] rounded-[0.8rem] bg-white p-20">
        <h2 className="pb-5 text-[2.4rem] font-bold leading-[3.2rem] tracking-[-0.05rem] text-[#0c0e16]">
          Confirm Deletion
        </h2>
        <p className="pb-6 text-[1.3rem] font-medium leading-[2.2rem] tracking-[-0.01rem] text-[#888eb0]">
          Are you sure you want to delete invoice #XM9141? This action cannot be
          undone.
        </p>
        <div className="flex items-center justify-end">
          <button className="rounded-[2.4rem] bg-[#f9fafe] px-10 py-7 text-[1.5rem] font-bold leading-[1.5rem]  tracking-[-0.025rem] text-[#7e88c3]">
            Cancel
          </button>
          <button className="rounded-[2.4rem] bg-[#ec5757] px-10 py-7 text-[1.5rem] font-bold leading-[1.5rem]  tracking-[-0.025rem] text-white">
            Delete
          </button>
        </div>
      </div>

      <div className="fixed bottom-0 z-[11] h-full w-full bg-black bg-opacity-50"></div>
    </div>
  );
}

export default DeleteInvoice;
