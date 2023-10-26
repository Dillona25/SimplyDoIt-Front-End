import Avatar from "../images/avatar.avif";

const Header = ({ toggleProfileModal }) => {
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
        <div
          className="flex flex-col content-center"
          onClick={toggleProfileModal}
        >
          <img
            className="h-[35px] w-[42px] self-center bg-center rounded-[50%]"
            src={Avatar}
            onClick={toggleProfileModal}
          ></img>
          <p className="font-[Poppins] mt-[5px]" onClick={toggleProfileModal}>
            Hey, Dillon
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
