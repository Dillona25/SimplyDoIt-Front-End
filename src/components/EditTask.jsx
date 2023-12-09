import { useState } from "react";

const EditTask = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    toggleCloseModal();
  };

  return (
    <div
      id="add-task-modal"
      className="position: fixed flex bottom-0 top-0 right-0 left-0 z-[2] bg-black/80 max-w-[100%] h-[100%] m-auto "
    >
      <div className="position: relative bg-white m-auto p-[30px] w-[300px] rounded-lg box-border">
        <form
          className="flex flex-col gap-[10px] mt-[20px]"
          onSubmit={handleSubmit}
        >
          <label className="font-[Poppins] font-semibold text-[20px] mb-[10px]">
            Update your task
          </label>
          <input
            type="text"
            placeholder="Update task description"
            className="w-[250px] border-b-[1px] border-b-black pb-[5px] font-[Poppins] mb-[10px]"
            id="task-input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
            minLength={3}
          ></input>
          <div className="flex gap-[20px]">
            <button
              type="submit"
              className="bg-submit w-[24px] h-[24px] mt-[5px]"
            ></button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTask;
