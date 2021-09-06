import React, { useState } from "react";
import LoginForm from './components/LoginForm';
import TodoList from "./components/TodoList";

function App() {
  const adminUser = {
    email: "test@rapptrlabs.com",
    password: "Test123"
  }

  const [user, setUser] = useState({email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email === adminUser.email && details.password === adminUser.password){
      console.log("Logged in");
      setUser({
        email: details.email,
        password: details.password
      });
    } else {
      console.log("Not a valid email");
      setError("Not a valid email");
    }
  }

  const Logout = () => {
    setUser({email: ""});
  }

  return (
    <div className="App">
      {(user.email !== "") ? (
        <div className="todo-app">
          <TodoList />
          <div className="todolist">
          <button onClick={Logout}>Logout</button>
          </div>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
