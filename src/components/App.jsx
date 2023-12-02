import Header from "../components/Header";
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
  const [showMain, setShowMain] = useState(true);
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState("");
  const [profileImage, setProfileImage] = useState("");

  const toggleTaskModal = () => {
    setActiveModal("taskModal");
  };

  const toggleProfileModal = () => {
    setActiveModal("profileModal");
  };

  const toggleCloseModal = () => {
    setActiveModal("");
  };

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: todo,
      },
    ]);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageChange = (e) => {
    setProfileImage(e.target.value);
  };

  const handleShowMain = () => {
    setShowMain(false);
  };

  const handleDeleteTask = () => {
    setIsDeleted(false);
  };

  return (
    <div className="App max-w-[700px] m-auto">
      <Header
        toggleProfileModal={toggleProfileModal}
        name={name}
        profileImage={profileImage}
      />
      {showMain && <Main />}
      <Nav toggleTaskModal={toggleTaskModal} />
      {activeModal === "taskModal" && (
        <TaskModal
          toggleCloseModal={toggleCloseModal}
          addTodo={addTodo}
          handleShowMain={handleShowMain}
        />
      )}
      {todos.map((todo, index) => (
        <Todo task={todo} key={index} />
      ))}

      {activeModal === "profileModal" && (
        <ProfileModal
          name={name}
          profileImage={profileImage}
          toggleCloseModal={toggleCloseModal}
          handleNameChange={handleNameChange}
          handleImageChange={handleImageChange}
        ></ProfileModal>
      )}
    </div>
  );
}

export default App;
