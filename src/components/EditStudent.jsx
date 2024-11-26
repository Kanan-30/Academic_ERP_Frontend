// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { Box, Typography, MenuItem, Select, TextField, Button } from "@mui/material";
// import studentService from "../services/studentService";

// const UpdateStudent = ({ token }) => {
//   const { id } = useParams();
//   const [field, setField] = useState("");
//   const [value, setValue] = useState("");
//   const navigate = useNavigate();

//   const handleUpdate = async () => {
//     if (!field) {
//       alert("Please select a field to update");
//       return;
//     }

//     try {
//       const updateData = { [field]: value };
//       await studentService.updateStudentById(token, id, updateData);
//       alert("Student updated successfully");
//       navigate("/dashboard");
//     } catch (err) {
//       alert("Failed to update student");
//     }
//   };

//   return (
//     <Box p={3}>
//       <Typography variant="h5" gutterBottom>
//         Update Student Details (ID: {id})
//       </Typography>
//       <Box display="flex" flexDirection="column" gap={2} mt={2}>
//         <Select
//           value={field}
//           onChange={(e) => setField(e.target.value)}
//           displayEmpty
//           fullWidth
//         >
//           <MenuItem value="" disabled>
//             Select Field to Update
//           </MenuItem>
//           <MenuItem value="firstName">First Name</MenuItem>
//           <MenuItem value="lastName">Last Name</MenuItem>
//           <MenuItem value="cgpa">CGPA</MenuItem>
//           <MenuItem value="totalCredits">Total Credits</MenuItem>
//           <MenuItem value="graduationYear">Graduation Year</MenuItem>
//           <MenuItem value="photographPath">Photograph Path</MenuItem>
//         </Select>
//         <TextField
//           label={`Enter new ${field}`}
//           variant="outlined"
//           value={value}
//           onChange={(e) => setValue(e.target.value)}
//           fullWidth
//         />
//         <Box display="flex" justifyContent="space-between">
//           <Button variant="contained" color="secondary" onClick={() => navigate("/dashboard")}>
//             Cancel
//           </Button>
//           <Button variant="contained" color="primary" onClick={handleUpdate}>
//             Save Changes
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default UpdateStudent;

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import studentService from "../services/studentService";

const UpdateStudent = ({ token }) => {
  const { id } = useParams();
  const [field, setField] = useState("");
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleUpdate = async () => {
    if (!field) {
      alert("Please select a field to update");
      return;
    }

    try {
      const updateData = { [field]: value };
      await studentService.updateStudentById(token, id, updateData);
      alert("Student updated successfully");
      navigate("/dashboard");
    } catch (err) {
      alert("Failed to update student");
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Update Student Details (ID: {id})</h1>
      <div className="mb-3">
        <label htmlFor="fieldSelect" className="form-label">
          Select Field to Update
        </label>
        <select
          id="fieldSelect"
          className="form-select"
          value={field}
          onChange={(e) => setField(e.target.value)}
        >
          <option value="" disabled>
            Select Field to Update
          </option>
          <option value="firstName">First Name</option>
          <option value="lastName">Last Name</option>
          <option value="cgpa">CGPA</option>
          <option value="totalCredits">Total Credits</option>
          <option value="graduationYear">Graduation Year</option>
          <option value="photographPath">Photograph Path</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="valueInput" className="form-label">
          Enter new {field || "value"}
        </label>
        <input
          type="text"
          id="valueInput"
          className="form-control"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="d-flex justify-content-between">
        <button className="btn btn-secondary" onClick={() => navigate("/dashboard")}>
          Cancel
        </button>
        <button className="btn btn-primary" onClick={handleUpdate}>
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default UpdateStudent;
