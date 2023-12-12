import { motion } from "framer-motion";
import feedback from "../../images/feedback.svg";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const FeedbackModal = ({ toggleCloseModal }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    toggleCloseModal();

    emailjs
      .sendForm(
        "service_2giy5m7",
        "template_wql51t6",
        form.current,
        "sKJvZiM-ZQ5-Pjc96"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
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
          ref={form}
          onSubmit={sendEmail}
        >
          <label className="font-[Poppins]">Your name</label>
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            className="w-[100%] bg-slate-200 p-[10px] rounded-[10px] font-[Poppins] mb-[10px]"
          ></input>
          <label className="font-[Poppins]">Your email</label>
          <input
            type="email"
            name="user_email"
            placeholder="email"
            className="w-[100%] bg-slate-200 p-[10px] rounded-[10px] font-[Poppins] mb-[10px]"
          ></input>
          <label className="font-[Poppins]">Send us a message</label>
          <textarea
            type="email"
            name="message"
            placeholder="Your message"
            className="w-[100%] bg-slate-200 p-[10px] rounded-[10px] font-[Poppins] mb-[10px]"
          ></textarea>
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
