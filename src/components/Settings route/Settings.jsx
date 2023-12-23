import { Link } from "react-router-dom/cjs/react-router-dom.min";
import key from "../../images/Key.svg";
import user from "../../images/user.svg";
import logout from "../../images/logout.svg";
import about from "../../images/About.svg";
import like from "../../images/like.svg";
import flash from "../../images/flash.svg";
import info from "../../images/info.svg";

const Settings = ({ toggleFeedbackModal, togglePasswordModal }) => {
  return (
    <settings className="flex flex-col px-[30px] h-screen justify-center">
      <div>
        <h1 className="font-[Poppins] font-semibold text-[30px] text-center mt-[25px]">
          App settings
        </h1>
        <h2 className="font-[Poppins] text-[15px] mt-[30px]">Account</h2>
        <div className="flex flex-col gap-[20px] mt-[10px]">
          <button
            onClick={togglePasswordModal}
            className="flex gap-[10px] bg-black p-[10px] rounded-[10px] font-[Poppins] text-white"
          >
            <img className="h-[24px] w-[24px]" src={key}></img>
            Change password
          </button>
          <Link
            to="/Profile"
            className="flex gap-[10px] bg-black text-white p-[10px] rounded-[10px] font-[Poppins]"
          >
            <img className="h-[24px] w-[24px]" src={user}></img>
            Edit name & Image
          </Link>
          <button className="flex gap-[10px] bg-black text-red-500 p-[10px] rounded-[10px] font-[Poppins]">
            <img className="h-[24px] w-[24px]" src={logout}></img>
            Log out
          </button>
        </div>
        <h2 className="font-[Poppins] text-[15px] mt-[30px]">The Creator</h2>
        <div className="flex flex-col gap-[20px] mt-[10px]">
          <Link
            to={{ pathname: "https://arnoldsportfolio.com/" }}
            target="_blank"
            className="flex gap-[10px] bg-black text-white p-[10px] rounded-[10px] font-[Poppins]"
          >
            <img className="h-[24px] w-[24px]" src={about}></img>
            About the creator
          </Link>
          <Link
            to={{
              pathname: "https://www.linkedin.com/in/dillon-arnold-352782275/",
            }}
            target="_blank"
            className="flex gap-[10px] bg-black text-white p-[10px] rounded-[10px] font-[Poppins]"
          >
            <img className="h-[24px] w-[24px]" src={like}></img>
            Support the creator
          </Link>
          <button
            onClick={toggleFeedbackModal}
            className="flex gap-[10px] bg-black text-white p-[10px] rounded-[10px] font-[Poppins]"
          >
            <img className="h-[24px] w-[24px]" src={flash}></img>
            Feedback and help
          </button>
          <Link
            to={{
              pathname:
                "https://www.figma.com/file/D7FaYWal2aQlr1eQT5lJUj/UpTodo---Todo-list-app-UI-Kit-(Community)?node-id=0%3A1&mode=dev",
            }}
            target="_blank"
            className="flex gap-[10px] bg-black text-white p-[10px] rounded-[10px] font-[Poppins]"
          >
            <img className="h-[24px] w-[24px]" src={info}></img>
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
    </settings>
  );
};

export default Settings;
