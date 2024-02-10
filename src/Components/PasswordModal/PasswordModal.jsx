import { motion } from "framer-motion";
import { Form } from "../Form/Form";

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
        <Form>
          <Form.TextInput
            labelText={"Current Password"}
            placeholder={"Current Password"}
            name={"Current password"}
            type={"password"}
          />
          <Form.TextInput
            labelText={"New Password"}
            placeholder={"New Password"}
            name={"New password"}
            type={"password"}
          />
          <Form.TextInput
            labelText={"Repeat New Password"}
            placeholder={"Repeat New Password"}
            name={"Repeat New password"}
            type={"password"}
          />
          <Form.Submit buttonText={"Update"} />
        </Form>
      </motion.div>
    </div>
  );
};

export default PasswordModal;
