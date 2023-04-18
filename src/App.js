import React, { useState, useEffect, createContext } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from "./firebase/firebase";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";

const auth = getAuth(app);
const Appstate = createContext();

function App() {
  const [user, setUser] = useState(false);
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Appstate.Provider
        value={{
          login,
          setLogin,
          signup,
          setSignup,
          loading,
          setLoading,
          user,
          setUser,
        }}
      >
        <div className="App">
          <h1 className="heading">
            This is an Assessment Project by Breeze.ai
          </h1>
        </div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />:
          <Route path="/" element={<Login />} />
        </Routes>
      </Appstate.Provider>
    </>
  );
}

export default App;
export { Appstate };
