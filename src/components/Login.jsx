// import React, { useState } from "react";
// import { TextField, Button, Box, Typography, Alert } from "@mui/material";
// import adminService from "../services/adminService";

// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const token = await adminService.login({ username, password });
//       localStorage.setItem("token", token);
//       onLogin(token);
//     } catch (err) {
//       setError("Invalid credentials");
//     }
//   };

//   return (
//     <Box
//       display="flex"
//       flexDirection="column"
//       alignItems="center"
//       justifyContent="center"
//       minHeight="100vh"
//     >
//       <Typography variant="h4" gutterBottom>
//         Admin Login
//       </Typography>
//       <form onSubmit={handleSubmit} style={{ width: "300px" }}>
//         <TextField
//           fullWidth
//           label="Username"
//           variant="outlined"
//           margin="normal"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <TextField
//           fullWidth
//           type="password"
//           label="Password"
//           variant="outlined"
//           margin="normal"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         {error && <Alert severity="error">{error}</Alert>}
//         <Button type="submit" variant="contained" color="primary" fullWidth>
//           Login
//         </Button>
//       </form>
//     </Box>
//   );
// };

// export default Login;


import React, { useState } from "react";
import adminService from "../services/adminService";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await adminService.login({ username, password });
      localStorage.setItem("token", token);
      onLogin(token);
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="card p-4" style={{ width: "300px" }}>
        <h4 className="card-title text-center mb-4">Admin Login</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
