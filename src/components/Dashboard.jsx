import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa"; // Importing an icon from react-icons

const Dashboard = ({ token }) => {
  const [studentId, setStudentId] = useState("");
  const navigate = useNavigate();

  const fetchStudentDetails = () => {
    if (studentId.trim() === "") {
      alert("Please enter a Student ID");
      return;
    }
    navigate(`/student-profile/${studentId}`);
  };

  return (
    <div
      className="container d-flex flex-column align-items-center justify-content-center vh-100"
      style={{ backgroundColor: "#f8f9fa", color: "#333" }}
    >
      <div className="text-center mb-4">
        <FaGraduationCap size={60} className="mb-3" color="#343a40" />
        <h1>Student Dashboard</h1>
      </div>
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <label htmlFor="studentId" className="form-label">
          Enter Student ID
        </label>
        <input
          id="studentId"
          type="text"
          className="form-control mb-3"
          placeholder="e.g., 12345"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />
        <button
          className="btn btn-dark w-100"
          onClick={fetchStudentDetails}
        >
          Get Student Details
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
