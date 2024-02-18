import loginImage from "../Images/Login.svg";
import { Form } from "../Components/Form/Form";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="flex flex-col items-center h-[100vh] justify-center">
      <img className="h-[300px] w-[300px]" src={loginImage} />
      <h1 className="font-[Poppins] font-semibold text-[40px] mt-5">Sign in</h1>
      <Form>
        <Form.TextInput labelText={"Email"} placeholder={"Your email"} />
        <Form.TextInput labelText={"Password"} placeholder={"Your password"} />
        <Form.Submit buttonText={"Sign in"} />
      </Form>
      <p className="font-[Poppins] mt-10 opacity-70">
        Dont have an account?<Link to="/register"> Register</Link>
      </p>
    </div>
  );
};
