import LoginImage from "../../Images/Login.svg";

const Login = () => {
  return (
    <div className=" flex flex-col items-center p-10">
      <img src={LoginImage} alt="Tasks image" className="w-[300px] h-[300px]" />
      <h1 className="font-[Poppins] font-semibold text-[30px] mt-5">
        Lets Get Logged In
      </h1>
    </div>
  );
};

export default Login;
