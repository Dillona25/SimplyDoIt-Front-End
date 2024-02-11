import { Form } from "../Components/Form/Form";
import { Link } from "react-router-dom";
import registerImage from "../Images/registerImage.svg";

export const Register = () => {
  return (
    <div className="flex flex-col items-center h-[100vh] justify-center px-10">
      <img className="h-[250px] w-[250px]" src={registerImage} />
      <h1 className="font-[Poppins] font-semibold text-[40px] mt-5 text-center">
        Register
      </h1>
      <Form>
        <Form.TextInput labelText={"Name"} placeholder={"Your name"} />
        <Form.TextInput
          labelText={"Profile image"}
          placeholder={"Profile Image URL"}
        />
        <Form.TextInput labelText={"Email"} placeholder={"Your email"} />
        <Form.TextInput labelText={"Password"} placeholder={"Your password"} />
        <Form.Submit buttonText={"Register"} />
      </Form>
      <p className="font-[Poppins] mt-10 opacity-70">
        Already have an account?<Link to="/login"> Sign in</Link>
      </p>
    </div>
  );
};
