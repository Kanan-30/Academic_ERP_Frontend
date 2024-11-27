// import { useState, useEffect } from 'react';
// import { getStudentDetails, updateStudentDetails } from '../utils/studentServiceutil';

// const useStudentProfile = (studentId, token) => {
//   const [student, setStudent] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editFields, setEditFields] = useState({});
//   const [successMessage, setSuccessMessage] = useState('');

//   useEffect(() => {
//     const fetchStudent = async () => {
//       try {
//         const data = await getStudentDetails(studentId, token);
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
//     if (field.startsWith('educationDetails.')) {
//       const nestedField = field.split('.')[1];
//       setEditFields(prev => ({
//         ...prev,
//         educationDetails: {
//           ...prev.educationDetails,
//           [nestedField]: value,
//         },
//       }));
//     } else {
//       setEditFields(prev => ({ ...prev, [field]: value }));
//     }
//   };

//   const handleSave = async () => {
//     try {
//       const updatedData = {
//         ...student,
//         ...editFields,
//         educationDetails: {
//           ...student.educationDetails,
//           ...editFields.educationDetails,
//         },
//       };

//       await updateStudentDetails(studentId, updatedData, token);
//       setStudent(updatedData);
//       setEditFields({});
//       setIsEditing(false);

//       setSuccessMessage('Details updated successfully!');
//       setTimeout(() => setSuccessMessage(''), 3000);
//     } catch (err) {
//       console.error('Error updating student:', err.message);
//       alert('Failed to update student details.');
//     }
//   };

//   const handleCancel = () => {
//     setEditFields({});
//     setIsEditing(false);
//   };

//   return {
//     student,
//     loading,
//     successMessage,
//     isEditing,
//     handleSetEditing: setIsEditing,
//     handleInputChange,
//     handleSave,
//     handleCancel,
//   };
// };

// export default useStudentProfile;

import { useState, useEffect } from 'react';
import { getStudentDetails, updateStudentDetails } from '../../model/studentService';
import { useError } from '../../context/ErrorContext'; // Import global error handler

const useStudentProfile = (studentId, token) => {
  const { throwError, clearError } = useError(); // Global error handler
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editFields, setEditFields] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const data = await getStudentDetails(studentId, token);
        setStudent(data);
      } catch (err) {
        console.error('Error fetching student:', err.message);
        throwError('Failed to fetch student details.');
      } finally {
        setLoading(false);
      }
    };

    fetchStudent();
  }, [studentId, token, throwError]); // Make sure throwError is included as a dependency

  const handleInputChange = (field, value) => {
    if (field.startsWith('educationDetails.')) {
      const nestedField = field.split('.')[1];
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

      setSuccessMessage('Details updated successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (err) {
      console.error('Error updating student:', err.message);
      throwError('Failed to update student details.');
    }
  };

  const handleCancel = () => {
    setEditFields({});
    setIsEditing(false);
  };

  return {
    student,
    loading,
    successMessage,
    isEditing,
    handleSetEditing: setIsEditing,
    handleInputChange,
    handleSave,
    handleCancel,
  };
};

export default useStudentProfile;
