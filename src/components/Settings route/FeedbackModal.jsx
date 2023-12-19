import { motion } from "framer-motion";
import feedback from "../../images/feedback.svg";
import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";

const FeedbackModal = ({ toggleCloseModal }) => {
  const [inputFields, setInputFields] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const [submitting, setSubmitting] = useState(false);

  const validateValues = (inputValues) => {
    const errors = {};
    if (inputValues.name.length < 2) {
      errors.name = "Name is not long enough, please use 2 characters or more";
    }
    if (inputValues.email.length < 8) {
      errors.email =
        "Email is not long enough, please use 8 characters or more";
    }
    if (inputValues.message.length < 10) {
      errors.message =
        "Message not long enough, dont be shy! Please use 10 characters or more";
    }
    return errors;
  };

  const handleChange = (e) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateValues(inputFields));
    setSubmitting(true);
  };

  const finishSubmit = () => {
    console.log(inputFields);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      finishSubmit();
    }
  }, [errors]);

  return (
    <div
      id="add-task-modal"
      className="position: fixed flex bottom-0 top-0 right-0 left-0 z-[2] bg-black/80 max-w-[700px] h-[100%] m-auto "
    >
      <motion.div
        animate={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        className="position: relative bg-white m-auto p-[30px] max-w-[500px] rounded-lg box-border"
      >
        <button
          className="bg-close top-5 right-5 position: absolute w-[30px] h-[30px]"
          onClick={toggleCloseModal}
        ></button>
        <h1
          className="font-[Poppins] font-semibold text-[30px] mt-[30px]
            text-center"
        >
          Send us a message
        </h1>
        <h2
          className="font-[Poppins] text-[15px] mb-[10px] mt-[5px]
            text-center"
        >
          With your help, we can improve our site!
        </h2>
        <img src={feedback} className="h-[200px] w-fit m-auto"></img>
        <form
          className="flex flex-col gap-[10px] w-[300px] mt-[20px]"
          onSubmit={handleSubmit}
        >
          <label className="font-[Poppins]">Your name</label>
          <input
            type="name"
            name="name"
            value={inputFields.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-[100%] bg-slate-200 p-[10px] rounded-[10px] font-[Poppins]"
          ></input>
          {errors.name ? (
            <p className="font-[Poppins] text-red-600 text-[12px] mb-[5px]">
              Name is not long enough, please use 2 characters or more
            </p>
          ) : null}
          <label className="font-[Poppins]">Your email</label>
          <input
            type="email"
            name="email"
            value={inputFields.email}
            onChange={handleChange}
            placeholder="email"
            className="w-[100%] bg-slate-200 p-[10px] rounded-[10px] font-[Poppins]"
          ></input>
          {errors.email ? (
            <p className="font-[Poppins] text-red-600 text-[12px] mb-[5px]">
              Email is not long enough, please use 8 characters or more
            </p>
          ) : null}
          <label className="font-[Poppins]">Send us a message</label>
          <textarea
            type="message"
            value={inputFields.message}
            onChange={handleChange}
            name="message"
            placeholder="Your message"
            className="w-[100%] bg-slate-200 p-[10px] rounded-[10px] font-[Poppins]"
          ></textarea>
          {errors.message ? (
            <p className="font-[Poppins] text-red-600 text-[12px] mb-[5px]">
              Message not long enough, dont be shy! Please use 10 characters or
              more
            </p>
          ) : null}
          <div className="flex gap-[20px]">
            <button
              type="submit"
              className="bg-black text-white font-[Poppins] px-[30px] py-[10px] rounded-md m-auto"
            >
              Send
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default FeedbackModal;
