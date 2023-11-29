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

  const [name, setName] = useState();

  return (
    <div className="App max-w-[700px] m-auto">
      <Header toggleProfileModal={toggleProfileModal} />
      <Main />
      <Nav toggleTaskModal={toggleTaskModal} />
      {activeModal === "taskModal" && (
        <TaskModal toggleCloseModal={toggleCloseModal} addTodo={addTodo} />
      )}
      {todos.map((todo, index) => (
        <Todo task={todo} key={index} />
      ))}

      {activeModal === "profileModal" && (
        <ProfileModal toggleCloseModal={toggleCloseModal}></ProfileModal>
      )}
    </div>
  );
}

export default App;
