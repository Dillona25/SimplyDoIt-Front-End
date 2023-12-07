const Nav = ({ toggleTaskModal }) => {
  return (
    <nav className="nav position: fixed w-[100%] bottom-0 border-black border-t-[1px] h-[75px]">
      <div>
        <div className="flex gap-[20px] list-none p-[20px] justify-center ">
          <div className="bg-black  w-[64px] h-[64px] rounded-[50%] flex justify-center position: relative top-[-50px]">
            <button
              className="h-[32px] w-[32px] self-center bg-Add"
              onClick={toggleTaskModal}
            ></button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
