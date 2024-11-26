// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import StudentDetails from "../components/ StudentDetails";
// import studentService from "../services/studentService";

// const Dashboard = ({ token }) => {
//   const [studentId, setStudentId] = useState("");
//   const [student, setStudent] = useState(null);
//   const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
//   const navigate = useNavigate();

//   const fetchStudent = async () => {
//     try {
//       const data = await studentService.getStudentById(token, studentId);
//       setStudent(data);
//     } catch (err) {
//       alert("Error fetching student details");
//     }
//   };

//   const deleteStudent = async () => {
//     try {
//       await studentService.deleteStudentById(token, studentId);
//       alert("Student deleted successfully");
//       setStudent(null);
//       setStudentId("");
//       setDeleteDialogOpen(false);
//     } catch (err) {
//       alert("Failed to delete student");
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h1 className="mb-4">Dashboard</h1>
//       <div className="row g-3 align-items-center mb-4">
//         <div className="col-auto">
//           <label htmlFor="studentId" className="form-label">
//             Student ID
//           </label>
//           <input
//             type="text"
//             id="studentId"
//             className="form-control"
//             value={studentId}
//             onChange={(e) => setStudentId(e.target.value)}
//           />
//         </div>
//         <div className="col-auto">
//           <button className="btn btn-primary" onClick={fetchStudent}>
//             Get Details
//           </button>
//         </div>
//       </div>
//       {student && (
//         <div>
//           <StudentDetails student={student} />
//           <div className="d-flex gap-2 mt-3">
//             <button
//               className="btn btn-danger"
//               onClick={() => setDeleteDialogOpen(true)}
//             >
//               Delete Student
//             </button>
//             <button
//               className="btn btn-secondary"
//               onClick={() => navigate(`/update-student/${studentId}`)}
//             >
//               Update Student Details
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Confirmation Modal for Deletion */}
//       {deleteDialogOpen && (
//         <div className="modal show d-block" tabIndex="-1" role="dialog">
//           <div className="modal-dialog" role="document">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Confirm Delete</h5>
//                 <button
//                   type="button"
//                   className="btn-close"
//                   aria-label="Close"
//                   onClick={() => setDeleteDialogOpen(false)}
//                 ></button>
//               </div>
//               <div className="modal-body">
//                 <p>
//                   Are you sure you want to delete the student with ID {studentId}?
//                 </p>
//               </div>
//               <div className="modal-footer">
//                 <button
//                   type="button"
//                   className="btn btn-secondary"
//                   onClick={() => setDeleteDialogOpen(false)}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-danger"
//                   onClick={deleteStudent}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;

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
