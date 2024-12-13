import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Appointments from "./pages/Appointments";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import DoctorLogin from "./pages/DoctorLogin";
import DoctorSignup from "./pages/DoctorSignup";
import Map from "./pages/Map";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<Map />} />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/userLogin" element={<UserLogin />} />
      <Route path="/userSignup" element={<UserSignup />} />
      <Route path="/doctorLogin" element={<DoctorLogin />} />
      <Route path="/doctorSignup" element={<DoctorSignup />} />
    </Routes>
  );
}

export default App;
