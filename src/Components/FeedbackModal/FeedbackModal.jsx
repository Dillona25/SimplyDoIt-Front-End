import { motion } from "framer-motion";
import feedback from "../../images/feedback.svg";
import React, { useRef } from "react";
import { Form as ReusableForm } from "../Form/Form";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { Result } from "postcss";

const FeedbackModal = ({ toggleCloseModal }) => {
  const form = useRef();

  const sendEmail = (e) => {
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

  const {
    register,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleCloseModal();
    sendEmail();
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
          ref={form}
          className="flex flex-col gap-[10px] w-[300px] mt-[20px]"
          onSubmit={handleSubmit}
        >
          <ReusableForm.TextInput
            errors={errors}
            register={register("name", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Enter 2 or more characters",
              },
            })}
            isValid={!errors.name}
            onChange={(evt) => {
              setValue("name", evt.target.value, { shouldValidate: true });
            }}
            labelText={"Your Name"}
            type={"name"}
            name={"user_name"}
            placeholder={"Name"}
          />
          {errors.name && (
            <ReusableForm.Feedback message={errors.name.message} />
          )}
          <ReusableForm.TextInput
            errors={errors}
            register={register("email", {
              required: "Email is required",
              pattern: {
                value: /[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4}/,
                message: "Invalid Email",
              },
            })}
            onChange={(evt) => {
              setValue("email", evt.target.value, { shouldValidate: true });
            }}
            isValid={!errors.email}
            labelText={"Your email"}
            type={"email"}
            name={"user_email"}
            placeholder={"email"}
          />
          {errors.email && (
            <ReusableForm.Feedback message={errors.email.message} />
          )}
          <ReusableForm.TextArea
            labelText={"Send us a message"}
            type={"message"}
            name={"message"}
            placeholder={"Your message"}
          />
          {isValid ? (
            <ReusableForm.Submit buttonText={"Send"} />
          ) : (
            <ReusableForm.Disabled buttonText={"Send"} />
          )}
        </form>
      </motion.div>
    </div>
  );
};

export default FeedbackModal;
