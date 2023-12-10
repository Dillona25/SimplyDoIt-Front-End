import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Nav = ({ toggleTaskModal, toggleProfileModal }) => {
  return (
    <nav className="nav position: fixed w-[100%] mb-[25px] bottom-0 h-[75px]">
      <div className="flex gap-[20px] p-[20px] justify-evenly">
        <Link to="/Settings" className="flex flex-col items-center gap-[10px]">
          <button className="bg-settings h-[24px] w-[24px]"></button>
          <p className="font-[Poppins] `text-[15px]">Settings</p>
        </Link>
        <div className="bg-black  w-[64px] h-[64px] rounded-[50%] flex justify-center position: relative top-[-30px]">
          <button
            className="h-[32px] w-[32px] self-center bg-Add"
            onClick={toggleTaskModal}
          ></button>
        </div>
        <Link to="/Profile" className="flex flex-col items-center gap-[10px]">
          <button
            onClick={toggleProfileModal}
            className="bg-profile h-[24px] w-[24px]"
          ></button>
          <p className="font-[Poppins] text-[15px]">Profile</p>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
