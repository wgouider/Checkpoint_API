import { Route, Routes } from "react-router";
import "./App.css";
import NavBar from "./Components/NavBar";
import Admin from "./Pages/Admin";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import UserList from "./Components/UserList";
import { useState } from "react";
import Privateroute from "./Routes/Privateroute";






function App() {
  const [isAuth, setisAuth] = useState (false)
  return (
    <div className="App">
      <NavBar />
      <h1>Workshop API</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Users" element={<UserList />} />
        <Route path="/user/:id" element={<Profile />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Admin" element={<Privateroute isAuth={isAuth} />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
