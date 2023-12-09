import Header from "../components/Header";
import Main from "../components/Main";
import Nav from "../components/Nav";
import TaskModal from "./TaskModal";
import Todo from "./Todo";
import ProfileModal from "./ProfileModal";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Avatar from "../images/avatar.avif";
import ConfirmationModal from "./ConfirmationModal";
import EditTask from "./EditTask";
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

  const toggleConfirmationModal = () => {
    setActiveModal("confirmModal");
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
        completed: false,
        isEditing: false,
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

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteToDo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    toggleCloseModal();
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="App max-w-[700px] m-auto">
      <Header
        toggleProfileModal={toggleProfileModal}
        name={name}
        profileImage={profileImage}
      />
      {showMain && <Main />}
      <Nav
        toggleTaskModal={toggleTaskModal}
        toggleProfileModal={toggleProfileModal}
      />
      {activeModal === "taskModal" && (
        <TaskModal
          toggleCloseModal={toggleCloseModal}
          addTodo={addTodo}
          handleShowMain={handleShowMain}
        />
      )}
      <div className="max-h-[500px] overflow-auto">
        {todos.map((todo, index) =>
          todo.isEditing ? (
            <EditTask key={index} editTodo={editTask} task={todo} />
          ) : (
            <Todo
              task={todo}
              key={index}
              toggleComplete={toggleComplete}
              toggleConfirmationModal={toggleConfirmationModal}
              editTodo={editTodo}
            />
          )
        )}
      </div>

      {activeModal === "profileModal" && (
        <ProfileModal
          name={name}
          profileImage={profileImage}
          toggleCloseModal={toggleCloseModal}
          handleNameChange={handleNameChange}
          handleImageChange={handleImageChange}
        ></ProfileModal>
      )}
      {activeModal === "confirmModal" &&
        todos.map((todo, index) => (
          <ConfirmationModal
            task={todo}
            key={index}
            deleteToDo={deleteToDo}
            toggleCloseModal={toggleCloseModal}
          />
        ))}
    </div>
  );
}

export default App;
