// import Avatar from "../images/avatar.avif";

// const ProfileModal = ({
//   toggleCloseModal,
//   name,
//   handleNameChange,
//   profileImage,
//   handleImageChange,
// }) => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     toggleCloseModal();
//   };

//   return (
//     <div className="position: relative bg-white m-auto p-[30px] w-[100%] rounded-lg box-border">
//       <button
//         className="bg-close top-5 right-5 position: absolute w-[30px] h-[30px]"
//         onClick={toggleCloseModal}
//       ></button>
//       <div className="flex flex-col gap-[10px] w-[300px] mt-[20px]">
//         <div
//           id="profile-modal"
//           className="position: fixed flex bottom-0 top-0 right-0 left-0 z-2 bg-black/80 max-w-[700px] h-[100%] "
//         >
//           <div className="position: relative bg-white m-auto p-[30px] max-w-[500px] rounded-lg box-border">
//             <button
//               className="bg-close top-5 right-5 position: absolute w-[30px] h-[30px]"
//               onClick={toggleCloseModal}
//             ></button>
//             <form
//               className="flex flex-col gap-[10px] w-[275px] mt-[20px]"
//               onSubmit={handleSubmit}
//             >
//               <img
//                 className=" bg-center h-[130px] w-[130px] self-center rounded-[50%] mt-[30px]"
//                 src={profileImage || Avatar}
//               ></img>
//               <label className="font-[Poppins] text-[20px]  mt-[30px]">
//                 Change Name
//               </label>
//               <input
//                 onChange={handleNameChange}
//                 value={name}
//                 type="text"
//                 placeholder="Name"
//                 className="w-[100%] border-b-[1px] border-b-black pb-[5px] font-[Poppins] mb-[10px]"
//               ></input>
//               <label className="font-[Poppins] text-[20px]  mt-[10px]">
//                 Change Profile Image
//               </label>
//               <input
//                 type="link"
//                 value={profileImage}
//                 onChange={handleImageChange}
//                 placeholder="Image Url"
//                 className="w-[100%] border-b-[1px] border-b-black pb-[5px] font-[Poppins] mb-[10px]"
//               ></input>
//               <button
//                 type="submit"
//                 className=" bg-[#8687E7] py-[10px] mt-[5px] rounded-[10px] font-[Poppins] font-semibold w-[50%] self-center"
//               >
//                 Save
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileModal;
