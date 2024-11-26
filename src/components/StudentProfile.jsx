

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import studentService from "../services/studentService";
// import { FaUserCircle } from "react-icons/fa";

// const StudentProfile = ({ token }) => {
//   const { studentId } = useParams();
//   const [student, setStudent] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editFields, setEditFields] = useState({});

//   useEffect(() => {
//     const fetchStudent = async () => {
//       try {
//         const data = await studentService.getStudentById(token, studentId);
//         setStudent(data);
//       } catch (err) {
//         console.error("Error fetching student:", err.message);
//         alert("Failed to fetch student details.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStudent();
//   }, [studentId, token]);

//   const handleInputChange = (field, value) => {
//     setEditFields({ ...editFields, [field]: value });
//   };

//   const handleSave = async () => {
//     try {
//       const updatedFields = { ...editFields };
//       // Only send updated student details, not domain or specialisation details
//       const updatedStudent = {
//         ...student,
//         ...updatedFields,
//         domains: student.domains,  // Retain original domain details
//         specialisation: student.specialisation,  // Retain original specialisation details
//       };
//       await studentService.updateStudentById(token, studentId, updatedStudent);
//       setStudent({ ...student, ...updatedFields });
//       setEditFields({});
//       setIsEditing(false);
//       alert("Details updated successfully.");
//     } catch (err) {
//       console.error("Error updating student:", err.message);
//       alert("Failed to update student details.");
//     }
//   };

//   const handleCancel = () => {
//     setEditFields({});
//     setIsEditing(false);
//   };

//   if (loading) {
//     return <div className="container mt-5 text-center">Loading student details...</div>;
//   }

//   if (!student) {
//     return <div className="container mt-5 text-center">Student not found.</div>;
//   }

//   const { domains, specialisation } = student;

//   return (
//     <div className="container mt-5">
//       <h1 className="text-center mb-4">Student Profile</h1>
//       <div className="card p-4 shadow" style={{ borderRadius: "10px" }}>
//         <div className="row">
//           {/* Left: Student Photo */}
//           <div className="col-md-4 text-center">
//             <div className="profile-image-container mb-3">
//               {student.photographPath ? (
//                 <img
//                   src={`data:image/jpeg;base64,${student.photographPath}`}
//                   alt="Profile"
//                   className="profile-image"
//                 />
//               ) : (
//                 <FaUserCircle size={100} color="#6c757d" />
//               )}
//             </div>
//           </div>
//           {/* Right: Personal Information */}
//           <div className="col-md-8">
//             {!isEditing ? (
//               <div>
//                 <div className="mb-3">
//                   <strong>Name:</strong> {student.firstName} {student.lastName}
//                 </div>
//                 <div className="mb-3">
//                   <strong>ID:</strong> {student.studentId}
//                 </div>
//                 <div className="mb-3">
//                   <strong>Graduation Year:</strong> {student.graduationYear}
//                 </div>

//                 <div className="mb-3">
//                   <strong>CGPA:</strong> {student.cgpa}
//                 </div>
//                 <div className="mb-3">
//                   <strong>Total Credits:</strong> {student.totalCredits}
//                 </div>

//                 {/* Domain and Specialisation (Non-Editable) */}
//                 <div className="mb-3">
//                   <strong>Domain ID:</strong> {domains.domainId}
//                 </div>
//                 <div className="mb-3">
//                   <strong>Program:</strong> {domains.program}
//                 </div>
//                 <div className="mb-3">
//                   <strong>Batch:</strong> {domains.batch}
//                 </div>

//                 <div className="mb-3">
//                   <strong>Specialisation Code:</strong> {specialisation.code}
//                 </div>
//                 <div className="mb-3">
//                   <strong>Specialisation Name:</strong> {specialisation.name}
//                 </div>
//                 <div className="mb-3">
//                   <strong>Credits Required:</strong> {specialisation.creditsRequired}
//                 </div>

//                 <div className="mt-4 text-center">
//                   <button
//                     className="btn btn-primary me-2"
//                     onClick={() => setIsEditing(true)}
//                   >
//                     Modify Details
//                   </button>
//                   <button
//                     className="btn btn-danger"
//                     onClick={async () => {
//                       try {
//                         await studentService.deleteStudentById(token, studentId);
//                         alert("Student deleted successfully.");
//                         window.location.href = "/dashboard";
//                       } catch (err) {
//                         console.error("Error deleting student:", err.message);
//                         alert("Failed to delete student.");
//                       }
//                     }}
//                   >
//                     Delete Student
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <div>
//                 {/* Editable Student Details */}
//                 <div className="mb-3">
//                   <strong>First Name:</strong>
//                   <input
//                     type="text"
//                     className="form-control"
//                     defaultValue={student.firstName}
//                     onChange={(e) => handleInputChange("firstName", e.target.value)}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <strong>Last Name:</strong>
//                   <input
//                     type="text"
//                     className="form-control"
//                     defaultValue={student.lastName}
//                     onChange={(e) => handleInputChange("lastName", e.target.value)}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <strong>Graduation Year:</strong>
//                   <input
//                     type="text"
//                     className="form-control"
//                     defaultValue={student.graduationYear}
//                     onChange={(e) =>
//                       handleInputChange("graduationYear", e.target.value)
//                     }
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <strong>CGPA:</strong>
//                   <input
//                     type="text"
//                     className="form-control"
//                     defaultValue={student.cgpa}
//                     onChange={(e) => handleInputChange("cgpa", e.target.value)}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <strong>Total Credits:</strong>
//                   <input
//                     type="text"
//                     className="form-control"
//                     defaultValue={student.totalCredits}
//                     onChange={(e) =>
//                       handleInputChange("totalCredits", e.target.value)
//                     }
//                   />
//                 </div>

//                 {/* Domain and Specialisation (Non-Editable) */}
//                 <div className="mb-3">
//                   <strong>Domain ID:</strong> {domains.domainId}
//                 </div>
//                 <div className="mb-3">
//                   <strong>Program:</strong> {domains.program}
//                 </div>
//                 <div className="mb-3">
//                   <strong>Batch:</strong> {domains.batch}
//                 </div>

//                 <div className="mb-3">
//                   <strong>Specialisation Code:</strong> {specialisation.code}
//                 </div>
//                 <div className="mb-3">
//                   <strong>Specialisation Name:</strong> {specialisation.name}
//                 </div>
//                 <div className="mb-3">
//                   <strong>Credits Required:</strong> {specialisation.creditsRequired}
//                 </div>

//                 <div className="mt-4 text-center">
//                   <button className="btn btn-success me-2" onClick={handleSave}>
//                     Save Changes
//                   </button>
//                   <button className="btn btn-secondary" onClick={handleCancel}>
//                     Cancel
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentProfile;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import studentService from "../services/studentService";
import { FaUserCircle } from "react-icons/fa";

const StudentProfile = ({ token }) => {
  const { studentId } = useParams();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editFields, setEditFields] = useState({});

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const data = await studentService.getStudentById(token, studentId);
        setStudent(data);
      } catch (err) {
        console.error("Error fetching student:", err.message);
        alert("Failed to fetch student details.");
      } finally {
        setLoading(false);
      }
    };

    fetchStudent();
  }, [studentId, token]);

  const handleInputChange = (field, value) => {
    setEditFields({ ...editFields, [field]: value });
  };

  const handleSave = async () => {
    try {
      const updatedFields = { ...editFields };
      // Only send updated student details, not domain or specialisation details
      const updatedStudent = {
        ...student,
        ...updatedFields,
        domains: student.domains,  // Retain original domain details
        specialisation: student.specialisation,  // Retain original specialisation details
      };
      await studentService.updateStudentById(token, studentId, updatedStudent);
      setStudent({ ...student, ...updatedFields });
      setEditFields({});
      setIsEditing(false);
      alert("Details updated successfully.");
    } catch (err) {
      console.error("Error updating student:", err.message);
      alert("Failed to update student details.");
    }
  };

  const handleCancel = () => {
    setEditFields({});
    setIsEditing(false);
  };

  if (loading) {
    return <div className="container mt-5 text-center">Loading student details...</div>;
  }

  if (!student) {
    return <div className="container mt-5 text-center">Student not found.</div>;
  }

  const { domains, specialisation } = student;

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Student Profile</h1>
      <div className="card p-4 shadow" style={{ borderRadius: "10px" }}>
        <div className="row">
          {/* Left: Student Photo */}
          <div className="col-md-4 text-center">
            <div className="profile-image-container mb-3">
              {student.photographPath ? (
                <img
                  src={`data:image/jpeg;base64,${student.photographPath}`}
                  alt="Profile"
                  className="profile-image"
                />
              ) : (
                <FaUserCircle size={100} color="#6c757d" />
              )}
            </div>
          </div>
          {/* Right: Personal Information */}
          <div className="col-md-8">
            {!isEditing ? (
              <div>
                <div className="mb-3">
                  <strong>Name:</strong> {student.firstName} {student.lastName}
                </div>
                <div className="mb-3">
                  <strong>ID:</strong> {student.studentId}
                </div>
                <div className="mb-3">
                  <strong>Graduation Year:</strong> {student.graduationYear}
                </div>

                <div className="mb-3">
                  <strong>CGPA:</strong> {student.cgpa}
                </div>
                <div className="mb-3">
                  <strong>Total Credits:</strong> {student.totalCredits}
                </div>

                {/* Domain and Specialisation (Non-Editable) */}
                <div className="mb-3">
                  <strong>Domain ID:</strong> {domains.domainId}
                </div>
                <div className="mb-3">
                  <strong>Program:</strong> {domains.program}
                </div>
                <div className="mb-3">
                  <strong>Batch:</strong> {domains.batch}
                </div>

                <div className="mb-3">
                  <strong>Specialisation Code:</strong> {specialisation.code}
                </div>
                <div className="mb-3">
                  <strong>Specialisation Name:</strong> {specialisation.name}
                </div>
                <div className="mb-3">
                  <strong>Credits Required:</strong> {specialisation.creditsRequired}
                </div>

                {/* Modify Details Button */}
                <div className="mt-4 text-center">
                  <button
                    className="btn btn-primary"
                    onClick={() => setIsEditing(true)}
                  >
                    Modify Details
                  </button>
                </div>
              </div>
            ) : (
              <div>
                {/* Editable Student Details */}
                <div className="mb-3">
                  <strong>First Name:</strong>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={student.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <strong>Last Name:</strong>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={student.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <strong>Graduation Year:</strong>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={student.graduationYear}
                    onChange={(e) =>
                      handleInputChange("graduationYear", e.target.value)
                    }
                  />
                </div>

                <div className="mb-3">
                  <strong>CGPA:</strong>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={student.cgpa}
                    onChange={(e) => handleInputChange("cgpa", e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <strong>Total Credits:</strong>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={student.totalCredits}
                    onChange={(e) =>
                      handleInputChange("totalCredits", e.target.value)
                    }
                  />
                </div>

                {/* Domain and Specialisation (Non-Editable) */}
                <div className="mb-3">
                  <strong>Domain ID:</strong> {domains.domainId}
                </div>
                <div className="mb-3">
                  <strong>Program:</strong> {domains.program}
                </div>
                <div className="mb-3">
                  <strong>Batch:</strong> {domains.batch}
                </div>

                <div className="mb-3">
                  <strong>Specialisation Code:</strong> {specialisation.code}
                </div>
                <div className="mb-3">
                  <strong>Specialisation Name:</strong> {specialisation.name}
                </div>
                <div className="mb-3">
                  <strong>Credits Required:</strong> {specialisation.creditsRequired}
                </div>

                {/* Save Changes & Cancel Buttons */}
                <div className="mt-4 text-center">
                  <button className="btn btn-success me-2" onClick={handleSave}>
                    Save Changes
                  </button>
                  <button className="btn btn-secondary" onClick={handleCancel}>
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
