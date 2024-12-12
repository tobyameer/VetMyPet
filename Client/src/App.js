import React from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import DoctorList from "./pages/DoctorList";
import FindDoc from "./pages/FindDoc";
import Signup from "./pages/Signup";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/appointments" element={<DoctorList />} />
      <Route path="/find" element={<FindDoc />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/findDoc" element={<FindDoc />} />
    </Routes>
  );
}

export default App;
