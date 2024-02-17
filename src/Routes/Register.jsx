import { Form } from "../Components/Form/Form";
import { Link } from "react-router-dom";
import registerImage from "../Images/registerImage.svg";
import { useState, useEffect } from "react";

export const Register = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [avatar, setAvatar] = useState("");
  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    setEmail("");
    setPassword("");
    setName("");
    setAvatar("");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, avatar, email, password });
  };

  return (
    <div className="flex flex-col items-center h-[100vh] justify-center px-10">
      <img className="h-[250px] w-[250px]" src={registerImage} />
      <h1 className="font-[Poppins] font-semibold text-[40px] mt-5 text-center">
        Register
      </h1>
      <Form onSubmit={handleSubmit}>
        <Form.TextInput
          onChange={handleNameChange}
          labelText={"Name"}
          placeholder={"Your name"}
        />
        <Form.TextInput
          onChange={handleAvatarChange}
          labelText={"Profile image"}
          placeholder={"Profile Image URL"}
        />
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
        <Form.Submit buttonText={"Register"} />
      </Form>
      <p className="font-[Poppins] mt-10 opacity-70">
        Already have an account?<Link to="/login"> Sign in</Link>
      </p>
    </div>
  );
};
