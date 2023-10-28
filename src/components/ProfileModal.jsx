import Avatar from "../images/avatar.avif";
import { useState } from "react";

const ProfileModal = ({ toggleCloseModal, children }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toggleCloseModal();
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
          {children}
        </form>
      </div>
    </div>
  );
};

export default ProfileModal;
