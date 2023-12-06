const ConfirmationModal = ({ task, deleteToDo, toggleCloseModal }) => {
  return (
    <div className="position: fixed flex bottom-0 top-0 right-0 left-0 z-2 bg-black/20  h-[100%]">
      <div className="position: relative bg-white m-auto p-[30px] max-w-[350px] rounded-lg box-border">
        <h1 className="font-[Poppins] text-[20px] font-semibold text-center">
          Are you sure you want to delete this task? It cannot be undone.
        </h1>
        <div className="flex gap-[20px] justify-center mt-[20px]">
          <button
            onClick={() => deleteToDo(task.id)}
            className="py-[10px] px-[25px] bg-red-400 rounded-md font-[Poppins] font-semibold"
          >
            Delete
          </button>
          <button
            onClick={toggleCloseModal}
            className="py-[10px] px-[25px] border-[1px] border-black rounded-md font-[Poppins] font-semibold"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
