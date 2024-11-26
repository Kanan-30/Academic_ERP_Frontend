import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import studentService from "../services/studentService";

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
      await studentService.updateStudentById(token, studentId, editFields);
      setStudent({ ...student, ...editFields });
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
    return <div className="container mt-5">Loading student details...</div>;
  }

  if (!student) {
    return <div className="container mt-5">Student not found.</div>;
  }

  const { domains, specialisation } = student;

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Student Profile</h1>
      <div className="row">
        <div className="col-md-4 text-center">
          <img
            src={student.photographPath || "https://via.placeholder.com/150"}
            alt="Student"
            className="img-thumbnail"
            style={{ width: "100%", maxWidth: "200px" }}
          />
        </div>
        <div className="col-md-8">
          {!isEditing ? (
            <>
              <h4>Personal Information</h4>
              <ul className="list-group mb-3">
                <li className="list-group-item">
                  <strong>Name:</strong> {student.firstName} {student.lastName}
                </li>
                <li className="list-group-item">
                  <strong>ID:</strong> {student.studentId}
                </li>
                <li className="list-group-item">
                  <strong>Graduation Year:</strong> {student.graduationYear}
                </li>
              </ul>

              <h4>Education Details</h4>
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>CGPA:</strong> {student.cgpa}
                </li>
                <li className="list-group-item">
                  <strong>Total Credits:</strong> {student.totalCredits}
                </li>
              </ul>

              <h4>Domain Information</h4>
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>Domain ID:</strong> {domains.domainId}
                </li>
                <li className="list-group-item">
                  <strong>Program:</strong> {domains.program}
                </li>
                <li className="list-group-item">
                  <strong>Batch:</strong> {domains.batch}
                </li>
              </ul>

              <h4>Specialisation Information</h4>
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>Code:</strong> {specialisation.code}
                </li>
                <li className="list-group-item">
                  <strong>Name:</strong> {specialisation.name}
                </li>
                <li className="list-group-item">
                  <strong>Credits Required:</strong>{" "}
                  {specialisation.creditsRequired}
                </li>
              </ul>

              <div className="mt-4 text-center">
                <button
                  className="btn btn-primary me-2"
                  onClick={() => setIsEditing(true)}
                >
                  Modify Details
                </button>
                <button
                  className="btn btn-danger"
                  onClick={async () => {
                    try {
                      await studentService.deleteStudentById(token, studentId);
                      alert("Student deleted successfully.");
                      window.location.href = "/dashboard";
                    } catch (err) {
                      console.error("Error deleting student:", err.message);
                      alert("Failed to delete student.");
                    }
                  }}
                >
                  Delete Student
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Editing code as in previous */}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
