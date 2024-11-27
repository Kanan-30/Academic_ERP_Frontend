import React from 'react';
import { FaUserCircle } from 'react-icons/fa';



const StudentProfileUI = ({
  student,
  successMessage,
  isEditing,
  handleSetEditing,
  handleInputChange,
  handleSave,
  handleCancel,
  imageUrl,
  studentId,
  educationDetails,
  domains,
  specialisation
}) => {
  const {
    rollNumber,
    firstName,
    lastName,
    email,
    cgpa,
    totalCredits,
    graduationYear,
  } = student;

  return (
    <div
      className="container mt-5"
      style={{ backgroundColor: "#f8f9fa", color: "#333", padding: "20px", borderRadius: "10px" }}
    >
      {successMessage && (
        <div
          className="alert alert-success text-center"
          style={{ marginBottom: "20px", borderRadius: "10px" }}
        >
          {successMessage}
        </div>
      )}

      {/* Profile Card */}
      <div className="card p-4 shadow mb-4">
        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="Profile"
                className="profile-image"
                style={{ maxWidth: "250px", borderRadius: "50%" }}
              />
            ) : (
              <FaUserCircle size={100} color="#6c757d" />
            )}
          </div>
          <div className="col-md-8">
            {isEditing ? (
              <>
                <h4>Edit Personal Details</h4>
                <div className="mb-3">
                  <label>First Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label>Last Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label>Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    defaultValue={email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label>CGPA:</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={cgpa}
                    onChange={(e) => handleInputChange("cgpa", e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label>Total Credits:</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={totalCredits}
                    onChange={(e) => handleInputChange("totalCredits", e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label>Graduation Year:</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={graduationYear}
                    onChange={(e) => handleInputChange("graduationYear", e.target.value)}
                  />
                </div>
              </>
            ) : (
              <>
                <h3>
                  {firstName} {lastName}
                </h3>
                <p><strong>Student ID:</strong> {studentId}</p>
                <p><strong>Roll Number:</strong> {rollNumber}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>CGPA:</strong> {cgpa}</p>
                <p><strong>Total Credits:</strong> {totalCredits}</p>
                <p><strong>Graduation Year:</strong> {graduationYear}</p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Details Card */}
      <div className="card p-4 shadow">
        <div className="row">
          {/* Domain Details */}
          <div className="col-md-4">
            <h4>Domain Details</h4>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th>Program</th>
                  <td>{domains.program}</td>
                </tr>
                <tr>
                  <th>Batch</th>
                  <td>{domains.batch}</td>
                </tr>
                <tr>
                  <th>Qualification</th>
                  <td>{domains.qualification}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Specialization Details */}
          <div className="col-md-4">
            <h4>Specialisation Details</h4>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th>Code</th>
                  <td>{specialisation.code}</td>
                </tr>
                <tr>
                  <th>Name</th>
                  <td>{specialisation.name}</td>
                </tr>
                <tr>
                  <th>Year</th>
                  <td>{specialisation.year}</td>
                </tr>
                <tr>
                  <th>Credits Required</th>
                  <td>{specialisation.creditsRequired}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Education Details */}
          <div className="col-md-4">
            <h4>Education Details</h4>
            {isEditing ? (
              <>
                <div className="mb-3">
                  <label>12th School Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={educationDetails.school12thName}
                    onChange={(e) =>
                      handleInputChange("educationDetails.school12thName", e.target.value)
                    }
                  />
                </div>
                <div className="mb-3">
                  <label>12th Percentage:</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={educationDetails.school12thPercentage}
                    onChange={(e) =>
                      handleInputChange("educationDetails.school12thPercentage", e.target.value)
                    }
                  />
                </div>
                <div className="mb-3">
                  <label>10th School Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={educationDetails.school10thName}
                    onChange={(e) =>
                      handleInputChange("educationDetails.school10thName", e.target.value)
                    }
                  />
                </div>
                <div className="mb-3">
                  <label>10th Percentage:</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={educationDetails.school10thPercentage}
                    onChange={(e) =>
                      handleInputChange("educationDetails.school10thPercentage", e.target.value)
                    }
                  />
                </div>
                <div className="mb-3">
                  <label>BTech College Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={educationDetails.btechCollegeName}
                    onChange={(e) =>
                      handleInputChange("educationDetails.btechCollegeName", e.target.value)
                    }
                  />
                </div>
                <div className="mb-3">
                  <label>BTech CGPA:</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={educationDetails.btechCollegeCgpa}
                    onChange={(e) =>
                      handleInputChange("educationDetails.btechCollegeCgpa", e.target.value)
                    }
                  />
                </div>
              </>
            ) : (
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th>12th School</th>
                    <td>{educationDetails.school12thName}</td>
                  </tr>
                  <tr>
                    <th>12th Percentage</th>
                    <td>{educationDetails.school12thPercentage}%</td>
                  </tr>
                  <tr>
                    <th>10th School</th>
                    <td>{educationDetails.school10thName}</td>
                  </tr>
                  <tr>
                    <th>10th Percentage</th>
                    <td>{educationDetails.school10thPercentage}%</td>
                  </tr>
                  <tr>
                    <th>BTech College</th>
                    <td>{educationDetails.btechCollegeName}</td>
                  </tr>
                  <tr>
                    <th>BTech CGPA</th>
                    <td>{educationDetails.btechCollegeCgpa}</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>

      {/* Modify Button */}
      <div className="mt-4 text-end">
        {isEditing ? (
          <>
            <button className="btn btn-success me-2" onClick={handleSave}>
              Save
            </button>
            <button className="btn btn-secondary" onClick={handleCancel}>
              Cancel
            </button>
          </>
        ) : (
          <button className="btn btn-primary" onClick={() => handleSetEditing(true)}>
            Modify Details
          </button>
        )}
      </div>
    </div>
  );
};

export default StudentProfileUI;
