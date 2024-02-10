export const Form = ({ children }) => {
  return (
    <form className="flex flex-col gap-[10px] w-[300px] mt-[20px]">
      {children}
    </form>
  );
};

Form.TextInput = ({
  labelText,
  value,
  type,
  name,
  register,
  onChange,
  placeholder,
  isValid,
}) => {
  return (
    <>
      <label className="font-[Poppins]">{labelText}</label>
      <input
        register={register}
        onChange={onChange}
        value={value}
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-[100%] bg-slate-200 p-[10px] rounded-[10px] font-[Poppins] border-black border-[1px]"
      ></input>
    </>
  );
};

Form.TextArea = ({ labelText, type, name, placeholder }) => {
  return (
    <>
      <label className="font-[Poppins]">{labelText}</label>
      <textarea
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-[100%] bg-slate-200 p-[10px] rounded-[10px] font-[Poppins] border-black border-[1px]"
      ></textarea>
    </>
  );
};

Form.Submit = ({ buttonText }) => {
  return (
    <div className="flex gap-[20px]">
      <button
        type="submit"
        className="bg-black text-white font-[Poppins] px-[30px] py-[10px] rounded-md mt-5 m-auto"
      >
        {buttonText}
      </button>
    </div>
  );
};

Form.Disabled = ({ buttonText }) => {
  return (
    <div className="flex gap-[20px]">
      <button
        disabled={true}
        type="submit"
        className="bg-black text-white font-[Poppins] px-[30px] py-[10px] rounded-md mt-5 m-auto opacity-25 cursor-not-allowed"
      >
        {buttonText}
      </button>
    </div>
  );
};

Form.Feedback = ({ message }) => {
  return (
    <>
      <p className="font-[Poppins] text-left text-error-message text-[#FF4040]">
        {message}
      </p>
    </>
  );
};
