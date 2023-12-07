import Avatar from "../images/avatar.avif";

const Header = ({ toggleProfileModal, name, profileImage }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header m-[20px]">
      <div className="flex justify-between">
        <h1 className="text-black  font-[Poppins] text-[35px] font-semibold self-center">
          Simply Do It
        </h1>
        <div className="flex flex-col content-center">
          <img
            className="h-[50px] w-[50px] self-center bg-center rounded-[50%] cursor-pointer"
            src={profileImage || Avatar}
            onClick={toggleProfileModal}
          ></img>
          <p className="font-[Poppins] mt-[5px] max-w-[200px] text-ellipsis whitespace-nowrap overflow-hidden cursor-pointer">
            Hello {name || "user"}
          </p>
        </div>
      </div>
      <div className=" mt-[50px] p-[10px] border-[1px] rounded-lg">
        <p className="self-center font-[Poppins]  text-center text-[20px] ">
          Todays date is {currentDate}
        </p>
      </div>
    </header>
  );
};

export default Header;
