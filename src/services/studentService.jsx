const API_URL = "http://localhost:8080/admin";

export const getStudentDetails = async (studentId, token) => {
  const response = await fetch(`${API_URL}/students/${studentId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch student details");
  }

  return response.json();
};

export const updateStudentDetails = async (studentId, data, token) => {
  // Flatten educationDetails into the payload
  const educationDetails = data.educationDetails || {};

  const payload = {
    firstName: data.firstName,
    lastName: data.lastName,
    cgpa: data.cgpa,
    totalCredits: data.totalCredits,
    graduationYear: data.graduationYear,
    school12thName: educationDetails.school12thName,
    school12thPercentage: educationDetails.school12thPercentage,
    school10thName: educationDetails.school10thName,
    school10thPercentage: educationDetails.school10thPercentage,
    btechCollegeName: educationDetails.btechCollegeName,
    btechCollegeCgpa: educationDetails.btechCollegeCgpa,
  };

  console.log("Request Payload:", payload); // Debug log

  const response = await fetch(`${API_URL}/students/${studentId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Failed to update student details");
  }

  const contentType = response.headers.get("Content-Type");
  if (contentType && contentType.includes("application/json")) {
    return response.json();
  }
  return response.text();
};


