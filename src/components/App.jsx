import Header from "../components/Header";
import Main from "../components/Main";
import Nav from "../components/Nav";
import TaskModal from "./TaskModal";
import ProfileModal from "./ProfileModal";
import TaskTemp from "../components/TaskTemp";
import { useEffect, useState } from "react";

function App() {
  const [activeModal, setActiveModal] = useState("");

  const toggleTaskModal = () => {
    setActiveModal("taskModal");
  };

  const toggleProfileModal = () => {
    setActiveModal("profileModal");
  };

  const toggleCloseModal = () => {
    setActiveModal("");
  };

  return (
    <div className="App max-w-[700px] m-auto">
      <Header toggleProfileModal={toggleProfileModal} />
      <Main />
      <Nav toggleTaskModal={toggleTaskModal} />
      {activeModal === "taskModal" && (
        <TaskModal toggleCloseModal={toggleCloseModal} />
      )}
      {activeModal === "profileModal" && (
        <ProfileModal toggleCloseModal={toggleCloseModal} />
      )}
      <TaskTemp />
    </div>
  );
}

export default App;
