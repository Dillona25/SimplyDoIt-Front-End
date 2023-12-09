import Avatar from "../images/avatar.avif";

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
    <div>
      <div></div>
    </div>
  );
};

export default Profile;
