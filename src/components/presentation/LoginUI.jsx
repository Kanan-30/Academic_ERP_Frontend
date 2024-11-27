import React from 'react';
import { FaUserLock } from 'react-icons/fa';

const LoginUI = ({ username, setUsername, password, setPassword, handleSubmit, error }) => {
  return (
    <div
      className="container d-flex flex-column align-items-center justify-content-center vh-100"
      style={{ backgroundColor: "#f8f9fa", color: "#333" }}
    >
      <div className="text-center mb-4">
        <FaUserLock size={60} className="mb-3" color="#343a40" />
        <h1>Admin Login</h1>
      </div>
      <div className="card p-4 shadow" style={{ width: "400px" }}>
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
              placeholder="Enter username"
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
              placeholder="Enter password"
            />
          </div>
          {error && (
            <div
              className="alert alert-danger"
              role="alert"
              style={{ backgroundColor: "#ff4d4d", color: "#fff" }}
            >
              {error}
            </div>
          )}
          <button type="submit" className="btn btn-dark w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginUI;
