import { Form } from "../Form/Form";
import avatar from "../../Images/avatar.avif";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useForm } from "react-hook-form";

const Profile = () => {
  const {
    register,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      avatar: "",
    },
  });
  return (
    <div className="flex flex-col gap-5 items-center align-middle p-10 h-[100vh] justify-center">
      <h1 className="font-[Poppins] text-[40px] font-semibold">Edit Profile</h1>
      <img
        className="w-[200px] h-[200px] rounded-[50%]"
        alt="profile Image"
        src={avatar}
      />
      <Form>
        <Form.TextInput
          errors={errors}
          register={register("name", {
            required: "New name is required",
            minLength: {
              value: 2,
              message: "Use 2 or more characters",
            },
          })}
          onChange={(evt) => {
            setValue("name", evt.target.value, { shouldValidate: true });
          }}
          isValid={!errors.name}
          labelText={"Edit Name"}
          name={"name"}
          type={"name"}
          placeholder={"Edit Name"}
        />
        {errors.name && <Form.Feedback message={errors.name.message} />}
        <Form.TextInput
          errors={errors}
          register={register("avatar", {
            required: "New avatar is required",
            pattern: {
              value:
                /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
              message: "Invalid URL",
            },
          })}
          onChange={(evt) => {
            setValue("avatar", evt.target.value, { shouldValidate: true });
          }}
          isValid={!errors.avatar}
          labelText={"New Avatar"}
          type={"url"}
          name={"avatar"}
          placeholder={"New Avatar URL"}
        />
        {errors.avatar && <Form.Feedback message={errors.avatar.message} />}
        {isValid ? (
          <Form.Submit buttonText={"Update"} />
        ) : (
          <Form.Disabled buttonText={"Update"} />
        )}
      </Form>
      <Link
        to="/"
        className="bg-slate-200  w-[64px] h-[64px] rounded-[50%] flex justify-center mt-5 mx-auto"
      >
        <button className="h-[24px] w-[24px] self-center bg-home"></button>
      </Link>
    </div>
  );
};

export default Profile;
