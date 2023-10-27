const Todo = ({ task }) => {
  return (
    <div className="bg-[#8687E7] p-[15px] rounded-md m-auto ml-[20px] mr-[20px] mt-[50px] flex justify-between">
      <p className="font-[Poppins] text-white text-[20px] text-ellipsis whitespace-nowrap ">
        {task.task}
      </p>
      <div className="flex justify-center gap-[20px]">
        <button className="bg-edit h-[25px] w-[25px] bg-no-repeat scale-125 m-auto"></button>
        <button className="bg-delete bg-no-repeat h-[25px] w-[25px] scale-125 m-auto"></button>
      </div>
    </div>
  );
};
export default Todo;
