// import React from "react";
// import { Card, CardContent, Typography, Button, Box } from "@mui/material"; // Add Box here
// import EditStudent from "./EditStudent";

// const StudentDetails = ({ student, token }) => {
//   const [editMode, setEditMode] = React.useState(false);

//   return (
//     <Card>
//       <CardContent>
//         {!editMode ? (
//           <>
//             <Typography variant="h6">{student.firstName} {student.lastName}</Typography>
//             <Typography>ID: {student.studentId}</Typography>
//             <Typography>CGPA: {student.cgpa}</Typography>
//             <Typography>Total Credits: {student.totalCredits}</Typography>
//             <Typography>Graduation Year: {student.graduationYear}</Typography>
//             <img src={student.photographPath} alt="Student" style={{ width: "100px", marginTop: "10px" }} />
//             {/* <Box mt={2}>
//               <Button variant="outlined" color="primary" onClick={() => setEditMode(true)}>
//                 Edit
//               </Button>
//             </Box> */}
//           </>
//         ) : (
//           <EditStudent student={student} token={token} onSave={() => setEditMode(false)} />
//         )}
//       </CardContent>
//     </Card>
//   );
// };

// export default StudentDetails;

import React, { useState } from "react";
import EditStudent from "./EditStudent";

const StudentDetails = ({ student, token }) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="card">
      <div className="card-body">
        {!editMode ? (
          <>
            <h5 className="card-title">
              {student.firstName} {student.lastName}
            </h5>
            <p className="card-text">ID: {student.studentId}</p>
            <p className="card-text">CGPA: {student.cgpa}</p>
            <p className="card-text">Total Credits: {student.totalCredits}</p>
            <p className="card-text">Graduation Year: {student.graduationYear}</p>
            <img
              src={student.photographPath}
              alt="Student"
              className="img-thumbnail"
              style={{ width: "100px", marginTop: "10px" }}
            />
            <div className="mt-3">
              <button
                className="btn btn-outline-primary"
                onClick={() => setEditMode(true)}
              >
                Edit
              </button>
            </div>
          </>
        ) : (
          <EditStudent student={student} token={token} onSave={() => setEditMode(false)} />
        )}
      </div>
    </div>
  );
};

export default StudentDetails;
