import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/presentation/Navbar";
import Login from "./components/StudentsLIst/Login";
import Dashboard from "./components/StudentsLIst/Dashboard";
// import UpdateStudent from "./components/EditStudent";
import StudentProfile from "./components/StudentsLIst/StudentProfile";
import 'bootstrap/dist/css/bootstrap.min.css';


import "./App.css";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <Router>
      <Navbar isAuthenticated={!!token} onLogout={handleLogout} />
<Routes>
  <Route path="/login" element={!token ? <Login onLogin={setToken} /> : <Navigate to="/dashboard" />} />
  <Route path="/dashboard" element={token ? <Dashboard token={token} /> : <Navigate to="/login" />} />
  <Route
    path="/student-profile/:studentId"
    element={token ? <StudentProfile token={token} /> : <Navigate to="/login" />}
  />
  {/* <Route
    path="/update-student/:id"
    element={token ? <UpdateStudent token={token} /> : <Navigate to="/login" />}
  /> */}
  <Route path="*" element={<Navigate to={token ? "/dashboard" : "/login"} />} />
</Routes>

    </Router>
  );
};

export default App;

