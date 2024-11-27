import axios from 'axios';

const getStudentDetails = async (studentId, token) => {
  try {
    const response = await axios.get(`/students/${studentId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch student details');
  }
};

const updateStudentDetails = async (studentId, updatedData, token) => {
  try {
    const response = await axios.put(`/students/${studentId}`, updatedData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to update student details');
  }
};

export { getStudentDetails, updateStudentDetails };
