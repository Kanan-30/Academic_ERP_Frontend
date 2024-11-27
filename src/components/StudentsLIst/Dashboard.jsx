import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardUI from "../presentation/DashboardUI"

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
    <DashboardUI
      studentId={studentId}
      setStudentId={setStudentId}
      fetchStudentDetails={fetchStudentDetails}
    />
  );
};

export default Dashboard;
