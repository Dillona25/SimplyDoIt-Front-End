import { motion } from "framer-motion";

const PasswordModal = ({ toggleCloseModal }) => {
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
        <h1 className="font-[Poppins] font-semibold text-[30px] mb-[10px] mt-[30px] text-center">
          Update password
        </h1>
        <form className="flex flex-col gap-[10px] w-[300px] mt-[20px]">
          <label className="font-[Poppins]">Current password</label>
          <input
            type="text"
            placeholder="Current password"
            className="w-[100%] bg-slate-200 p-[10px] rounded-[10px] font-[Poppins] mb-[10px]"
          ></input>
          <label className="font-[Poppins]">New password</label>
          <input
            type="text"
            placeholder="New password"
            className="w-[100%] bg-slate-200 p-[10px] rounded-[10px] font-[Poppins] mb-[10px]"
          ></input>
          <div className="flex gap-[20px]">
            <button
              type="submit"
              className="bg-black text-white font-[Poppins] px-[30px] py-[10px] rounded-md m-auto"
            >
              Update
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default PasswordModal;
