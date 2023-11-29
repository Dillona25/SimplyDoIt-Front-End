import { useState } from "react";

const TaskModal = ({ toggleCloseModal, addTodo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    toggleCloseModal();
    setValue("");
  };
  return (
    <div
      id="add-task-modal"
      className="position: fixed flex bottom-0 top-0 right-0 left-0 z-[2] bg-black/80 max-w-[700px] h-[100%] m-auto "
    >
      <div className="position: relative bg-white m-auto p-[30px] max-w-[500px] rounded-lg box-border">
        <button
          className="bg-close top-5 right-5 position: absolute w-[30px] h-[30px]"
          onClick={toggleCloseModal}
        ></button>
        <form
          className="flex flex-col gap-[10px] w-[300px] mt-[20px]"
          onSubmit={handleSubmit}
        >
          <label className="font-[Poppins] font-semibold text-[20px] mb-[10px]">
            Add task
          </label>
          <input
            type="text"
            placeholder="Task description"
            className="w-[100%] border-b-[1px] border-b-black pb-[5px] font-[Poppins] mb-[10px]"
            id="task-input"
            value={value}
          ></input>
          <button
            type="submit"
            className="bg-submit w-[24px] h-[24px] mt-[5px]"
          ></button>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;
