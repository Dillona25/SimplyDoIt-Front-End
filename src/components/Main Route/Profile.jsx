import Avatar from "../../images/avatar.avif";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Profile = ({
  toggleCloseModal,
  name,
  handleNameChange,
  profileImage,
  handleImageChange,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toggleCloseModal();
  };

  return (
    <div className="p-[30px] flex flex-col">
      <h1 className="font-[Poppins] font-semibold text-[30px] text-center mt-[25px]">
        Your Profile
      </h1>
      <img
        className=" bg-center h-[180px] w-[180px] self-center rounded-[50%] mt-[30px]"
        src={profileImage || Avatar}
      ></img>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-[10px] w-[100%]"
      >
        <label className="font-[Poppins] mt-[30px]">Change Name</label>
        <input
          onChange={handleNameChange}
          value={name}
          type="text"
          placeholder="Name"
          className="w-[100%] bg-slate-200 p-[10px] rounded-[10px] font-[Poppins] mb-[10px]"
        ></input>
        <label className="font-[Poppins] mt-[10px]">Change Profile Image</label>
        <input
          type="link"
          value={profileImage}
          onChange={handleImageChange}
          placeholder="Image Url"
          className="w-[100%] bg-slate-200 rounded-[10px] p-[10px] font-[Poppins] mb-[10px]"
        ></input>
        <Link to="/" className="w-[50%] self-center">
          <button
            type="submit"
            className="bg-black text-white font-[Poppins] w-[100%] py-[10px] rounded-md m-auto"
          >
            Save
          </button>
        </Link>
      </form>
      <Link
        to="/"
        className="bg-slate-200  w-[64px] h-[64px] rounded-[50%] flex justify-center m-auto mt-[50px]"
      >
        <button className="h-[24px] w-[24px] self-center bg-home"></button>
      </Link>
    </div>
  );
};

export default Profile;
