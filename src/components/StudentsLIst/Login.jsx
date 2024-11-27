import React, { useState } from "react";
import adminService from "../../model/adminService"
import LoginUI from '../presentation/LoginUI';

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
    <LoginUI
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
      error={error}
    />
  );
};

export default Login;
