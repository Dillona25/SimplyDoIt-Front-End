import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import TaskModal from "./TaskModal/TaskModal";
import Todo from "./Todo/Todo";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ConfirmationModal from "./ConfirmationModal/ConfirmationModal";
import EditTask from "./EditTaskModal/EditTask";
import {
  Route,
  Switch,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
uuidv4();
import Settings from "./Settings/Settings";
import FeedbackModal from "./FeedbackModal/FeedbackModal";
import PasswordModal from "./PasswordModal/PasswordModal";
import Profile from "./Profile/Profile";
import { Login } from "../Routes/Login";
import { Register } from "../Routes/Register";
import { ProtectedRoute } from "./ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "./Contexts/CurrentUserContext";
import * as auth from "../Utils/Auth";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [showMain, setShowMain] = useState(true);
  const [todos, setTodos] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  const toggleTaskModal = () => {
    setActiveModal("taskModal");
  };

  const toggleProfileModal = () => {
    setActiveModal("profileModal");
  };

  const toggleConfirmationModal = () => {
    setActiveModal("confirmModal");
  };

  const toggleFeedbackModal = () => {
    setActiveModal("contactModal");
  };

  const togglePasswordModal = () => {
    setActiveModal("passwordModal");
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

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if ({ token }) {
      localStorage.setItem("jwt", token);
      auth
        .checkToken(token)
        .then((res) => {
          setIsLoggedIn(true);
          setCurrentUser(res.data);
        })
        .catch((err) => {
          console.error("error in useEffect", err);
        });
    }
  }, []);

  const history = useHistory();
  const redirectToMain = () => {
    history.push("/");
  };

  const handleLogin = ({ email, password }) => {
    auth
      .loginUser(email, password)
      .then((res) => {
        if (res) {
          localStorage.setItem("jwt", res.token);
          auth
            .checkToken(res.token)
            .then((data) => {
              setCurrentUser(data.data);
              setIsLoggedIn(true);
              redirectToMain();
            })
            .catch((err) => {
              console.error("Error in loginUser", err);
            });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  function handleRegistration({ email, password, name, avatar }) {
    auth
      .registerUser(email, password, name, avatar)
      .then((res) => {
        if (res) {
          localStorage.setItem("jwt", res.token);
          auth
            .checkToken(res.token)
            .then((data) => {
              setCurrentUser(data);
              setIsLoggedIn(true);
              redirectToMain();
            })
            .catch((err) => {
              console.error(err);
            });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      <div className="App max-w-[700px] m-auto">
        <Route path="/login">
          <Login onSubmit={handleLogin} />
        </Route>
        <Route path="/register">
          <Register onSubmit={handleRegistration} />
        </Route>
        <ProtectedRoute isLoggedIn={isLoggedIn} exact path="/">
          <Header toggleProfileModal={toggleProfileModal} />
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
          {activeModal === "confirmModal" &&
            todos.map((todo, index) => (
              <ConfirmationModal
                task={todo}
                key={index}
                deleteToDo={deleteToDo}
                toggleCloseModal={toggleCloseModal}
              />
            ))}

          <Switch>
            <Route path="/Profile">
              <Profile />
            </Route>
            <Route path="/Settings">
              <Settings
                toggleFeedbackModal={toggleFeedbackModal}
                togglePasswordModal={togglePasswordModal}
              ></Settings>
            </Route>
          </Switch>
          {activeModal === "contactModal" && (
            <FeedbackModal toggleCloseModal={toggleCloseModal} />
          )}
          {activeModal === "passwordModal" && (
            <PasswordModal toggleCloseModal={toggleCloseModal} />
          )}
        </ProtectedRoute>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
