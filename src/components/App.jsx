// import Header from "../components/Header";
import Main from "../components/Main";
import Nav from "../components/Nav";
import TaskModal from "./TaskModal";
import Todo from "./Todo";
import ProfileModal from "./ProfileModal";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Avatar from "../images/avatar.avif";
uuidv4();

function App() {
  const [activeModal, setActiveModal] = useState([]);

  const toggleTaskModal = () => {
    setActiveModal("taskModal");
  };

  const toggleProfileModal = () => {
    setActiveModal("profileModal");
  };

  const toggleCloseModal = () => {
    setActiveModal("");
  };

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, complete: false, isEditing: false },
    ]);
  };

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const [value, setValue] = useState("");

  const handleNameChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="App max-w-[700px] m-auto">
      <header className="header m-[20px]">
        <div className="flex justify-between">
          <h1 className="text-black  font-[Poppins] text-[35px] font-semibold self-center">
            Simply Do It
          </h1>
          <div
            className="flex flex-col content-center"
            onClick={toggleProfileModal}
          >
            <img
              className="h-[35px] w-[42px] self-center bg-center rounded-[50%]"
              src={Avatar}
              onClick={toggleProfileModal}
            ></img>
            <p className="font-[Poppins] mt-[5px]" onClick={toggleProfileModal}>
              Hello {value}
            </p>
          </div>
        </div>
        <div className=" mt-[50px] p-[10px] border-[1px] rounded-lg">
          <p className="self-center font-[Poppins]  text-center text-[20px] ">
            Todays date is {currentDate}
          </p>
        </div>
      </header>
      {/* <Main /> */}
      <Nav toggleTaskModal={toggleTaskModal} />
      {activeModal === "taskModal" && (
        <TaskModal toggleCloseModal={toggleCloseModal} addTodo={addTodo} />
      )}
      {todos.map((todo, index) => (
        <Todo task={todo} key={index} />
      ))}

      {activeModal === "profileModal" && (
        <ProfileModal toggleCloseModal={toggleCloseModal}>
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
            value={value}
            onChange={handleNameChange}
            className="w-[100%] border-b-[1px] border-b-black pb-[5px] font-[Poppins] mb-[10px]"
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
        </ProfileModal>
      )}
    </div>
  );
}

export default App;
