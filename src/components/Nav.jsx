const Nav = ({ toggleTaskModal, toggleProfileModal }) => {
  return (
    <nav className="nav position: fixed w-[100%] mb-[25px] bottom-0 h-[75px]">
      <div className="flex gap-[20px] p-[20px] justify-evenly">
        <div className="flex flex-col items-center gap-[10px]">
          <button
            onClick={toggleProfileModal}
            className="bg-profile h-[24px] w-[24px]"
          ></button>
          <p className="font-[Poppins] text-[15px]">Profile</p>
        </div>
        <div className="bg-black  w-[64px] h-[64px] rounded-[50%] flex justify-center position: relative top-[-30px]">
          <button
            className="h-[32px] w-[32px] self-center bg-Add"
            onClick={toggleTaskModal}
          ></button>
        </div>
        <div className="flex flex-col items-center gap-[10px]">
          <button className="bg-settings h-[24px] w-[24px]"></button>
          <p className="font-[Poppins] `text-[15px]">Settings</p>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
