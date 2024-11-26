const API_URL = "http://localhost:8080/admin/students";

const getStudentById = async (token, id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch student");
  }

  return response.json();
};


const deleteStudentById = async (token, id) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      const errorText = await response.text(); // Debugging help
      throw new Error(`Failed to delete student: ${errorText}`);
    }
  };
  
  
const updateStudentById = async (token, id, updateData) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(updateData),
  });
  if (!response.ok) {
    const errorText = await response.text(); // Debugging help
    throw new Error(`Failed to update student: ${errorText}`);
  }
};

  
  export default { getStudentById, deleteStudentById, updateStudentById };
  
