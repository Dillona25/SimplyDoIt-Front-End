import { useState } from "react";
import { motion } from "framer-motion";

const TaskModal = ({ toggleCloseModal, addTodo, handleShowMain }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(task);
    toggleCloseModal();
    handleShowMain();
    setTask("");
  };

  return (
    <div
      id="add-task-modal"
      className="position: fixed flex bottom-0 top-0 right-0 left-0 z-[2] bg-black/80 max-w-[700px] h-[100%] m-auto "
    >
      <motion.div
        animate={{ y: 0 }}
        initial={{ y: -500 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="position: relative bg-white m-auto p-[30px] max-w-[500px] rounded-lg box-border"
      >
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
            className="w-[100%] bg-slate-200 p-[10px] rounded-[10px] font-[Poppins] border-black border-[1px]"
            id="task-input"
            value={task}
            onChange={(e) => setTask(e.target.value)}
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
      </motion.div>
    </div>
  );
};

export default TaskModal;
