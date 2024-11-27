import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStudentDetails, updateStudentDetails } from "../../model/studentService";
import StudentProfileUI from '../presentation/StudentProfileUI';

const StudentProfile = ({ token }) => {
  const { studentId } = useParams();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editFields, setEditFields] = useState({});
  const [successMessage, setSuccessMessage] = useState(""); 

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const data = await getStudentDetails(studentId, token);
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
    if (field.startsWith("educationDetails.")) {
      const nestedField = field.split(".")[1];
      setEditFields((prev) => ({
        ...prev,
        educationDetails: {
          ...prev.educationDetails,
          [nestedField]: value,
        },
      }));
    } else {
      setEditFields((prev) => ({ ...prev, [field]: value }));
    }
  };

  const handleSave = async () => {
    try {
      const updatedData = {
        ...student,
        ...editFields,
        educationDetails: {
          ...student.educationDetails,
          ...editFields.educationDetails,
        },
      };

      await updateStudentDetails(studentId, updatedData, token);
      setStudent(updatedData);
      setEditFields({});
      setIsEditing(false);

      setSuccessMessage("Details updated successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);
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

  const {
    photographPath,
    domains,
    specialisation,
    educationDetails,
  } = student;

  const imageUrl = photographPath
    ? `http://localhost:8080${photographPath}`
    : null;

  return (
    <StudentProfileUI 
      student={student}
      successMessage={successMessage}
      isEditing={isEditing}
      handleSetEditing={setIsEditing} 
      handleInputChange={handleInputChange}
      handleSave={handleSave}
      handleCancel={handleCancel}
      imageUrl={imageUrl}
      studentId={studentId}
      educationDetails={educationDetails}
      domains={domains}
      specialisation={specialisation}
    />
  );
};

export default StudentProfile;
