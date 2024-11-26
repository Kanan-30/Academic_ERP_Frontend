// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Navbar = ({ isAuthenticated, onLogout }) => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     onLogout();
//     navigate("/login");
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">
//           Student Management
//         </a>
//         <div className="d-flex">
//           {isAuthenticated ? (
//             <>
//               <button
//                 className="btn btn-outline-light me-2"
//                 onClick={() => navigate("/dashboard")}
//               >
//                 Dashboard
//               </button>
//               <button className="btn btn-outline-light" onClick={handleLogout}>
//                 Logout
//               </button>
//             </>
//           ) : (
//             <button
//               className="btn btn-outline-light"
//               onClick={() => navigate("/login")}
//             >
//               Login
//             </button>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ isAuthenticated, onLogout }) => {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Student Management
        </a>
        <div className="d-flex">
          {isAuthenticated ? (
            <>
              <button
                className="btn btn-outline-light me-2"
                onClick={() => navigate("/dashboard")}
              >
                Dashboard
              </button>
              <button
                className="btn btn-outline-light"
                onClick={() => {
                  onLogout();
                  navigate("/login");
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <button
              className="btn btn-outline-light"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
