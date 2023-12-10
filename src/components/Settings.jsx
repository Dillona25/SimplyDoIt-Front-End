import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Settings = () => {
  return (
    <div className="p-[30px]">
      <h1 className="font-[Poppins] font-semibold text-[30px] text-center mt-[25px]">
        App settings
      </h1>
      <h2 className="font-[Poppins] text-[15px] mt-[30px]">Account</h2>
      <div className="flex flex-col gap-[20px] mt-[10px]">
        <button className="flex gap-[10px] bg-slate-200 p-[10px] rounded-[10px] font-[Poppins]">
          Change password
        </button>
        <Link
          to="/Profile"
          className="flex gap-[10px] bg-slate-200 p-[10px] rounded-[10px] font-[Poppins]"
        >
          Edit name & Image
        </Link>
        <button className="flex gap-[10px] bg-slate-200 p-[10px] rounded-[10px] font-[Poppins]">
          Log out
        </button>
      </div>
      <h2 className="font-[Poppins] text-[15px] mt-[30px]">The Creator</h2>
      <div className="flex flex-col gap-[20px] mt-[10px]">
        <Link
          to="https://arnoldsportfolio.com/"
          className="flex gap-[10px] bg-slate-200 p-[10px] rounded-[10px] font-[Poppins]"
        >
          About the creator
        </Link>
        <Link
          to="https://www.linkedin.com/in/dillon-arnold-352782275/"
          className="flex gap-[10px] bg-slate-200 p-[10px] rounded-[10px] font-[Poppins]"
        >
          Support the creator
        </Link>
        <button className="flex gap-[10px] bg-slate-200 p-[10px] rounded-[10px] font-[Poppins]">
          Feedback and help
        </button>
        <Link
          to="https://www.figma.com/file/D7FaYWal2aQlr1eQT5lJUj/UpTodo---Todo-list-app-UI-Kit-(Community)?node-id=0%3A1&mode=dev"
          className="flex gap-[10px] bg-slate-200 p-[10px] rounded-[10px] font-[Poppins]"
        >
          Original figma design
        </Link>
      </div>
      <Link
        to="/"
        className="bg-slate-200  w-[64px] h-[64px] rounded-[50%] flex justify-center m-auto mt-[50px]"
      >
        <button className="h-[24px] w-[24px] self-center bg-home"></button>
      </Link>
    </div>
  );
};

export default Settings;
