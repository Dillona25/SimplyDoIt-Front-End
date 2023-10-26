const Nav = ({ toggleTaskModal }) => {
  return (
    <nav className="nav position: fixed w-[100%] bottom-0 mb-[15px] max-w-[700px] ">
      <div>
        <ul className="flex gap-[20px] list-none p-[20px] justify-center ">
          <li>
            <div className="bg-[#8687E7]  w-[64px] h-[64px] rounded-[50%] flex justify-center">
              <button
                className="h-[32px] w-[32px] self-center bg-Add"
                onClick={toggleTaskModal}
              ></button>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
