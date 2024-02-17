import loginImage from "../Images/Login.svg";
import { Form } from "../Components/Form/Form";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Login = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <div className="flex flex-col items-center h-[100vh] justify-center">
      <img className="h-[300px] w-[300px]" src={loginImage} />
      <h1 className="font-[Poppins] font-semibold text-[40px] mt-5">Sign in</h1>
      <Form onSubmit={handleSubmit}>
        <Form.TextInput
          onChange={handleEmailChange}
          labelText={"Email"}
          placeholder={"Your email"}
        />
        <Form.TextInput
          onChange={handlePasswordChange}
          labelText={"Password"}
          placeholder={"Your password"}
        />
        <Form.Submit buttonText={"Sign in"} />
      </Form>
      <p className="font-[Poppins] mt-10 opacity-70">
        Dont have an account?<Link to="/register"> Register</Link>
      </p>
    </div>
  );
};
