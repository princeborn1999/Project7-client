import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeComponent from "./components/home-component";
import NavComponent from "./components/nav-component";
import RegisterComponent from "./components/register-component";
import LoginComponent from "./components/login-component";
function App() {
  return (
    <div>
      <NavComponent />
      <Routes>
        <Route path="/" element={<HomeComponent />} exact />
        <Route path="/register" element={<RegisterComponent />} exact />
        <Route path="/login" element={<LoginComponent />} exact />
      </Routes>
    </div>
  );
}

export default App;
