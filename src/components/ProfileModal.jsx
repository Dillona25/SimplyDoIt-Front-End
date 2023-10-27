import Avatar from "../images/avatar.avif";
import { useState } from "react";

const ProfileModal = ({ toggleCloseModal }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <div
      id="profile-modal"
      className="position: fixed flex bottom-0 top-0 right-0 left-0 z-2 bg-black/80 max-w-[700px] h-[100%] "
    >
      <div className="position: relative bg-white m-auto p-[30px] max-w-[500px] rounded-lg box-border">
        <button
          className="bg-close top-5 right-5 position: absolute w-[30px] h-[30px]"
          onClick={toggleCloseModal}
        ></button>
        <form
          className="flex flex-col gap-[10px] w-[300px] mt-[20px]"
          onSubmit={handleSubmit}
        >
          <img
            className=" bg-center h-[140px] w-[160px] self-center rounded-[50%] mt-[30px]"
            src={Avatar}
          ></img>
          <label className="font-[Poppins] text-[20px]  mt-[30px]">
            Change Name
          </label>
          <input
            type="text"
            placeholder="Name"
            className="w-[100%] border-b-[1px] border-b-black pb-[5px] font-[Poppins] mb-[10px]"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></input>
          <label className="font-[Poppins] text-[20px]  mt-[10px]">
            Change Profile Image
          </label>
          <input
            type="url"
            placeholder="Image Url"
            className="w-[100%] border-b-[1px] border-b-black pb-[5px] font-[Poppins] mb-[10px]"
          ></input>
          <button
            type="submit"
            className=" bg-[#8687E7] py-[5px] mt-[5px] rounded-[10px] font-[Poppins] font-semibold"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileModal;
