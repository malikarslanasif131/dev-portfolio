import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdLayout from "./AdLayout";

const AdExperience = () => {
  const [organization, setOrganization] = useState("");
  const [role, setRole] = useState("");
  const [joiningDate, setJoiningDate] = useState("");
  const [completionDate, setCompletionDate] = useState("");
  const [details, setDetails] = useState("");
  const [experienceData, setExperienceData] = useState([]);

  useEffect(() => {
    // Fetch experience data from the server
    axios.get("/api/experience").then((response) => {
      setExperienceData(response.data);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/experience",
        {
          organization,
          role,
          joiningDate,
          completionDate,
          details,
        }
      );

      if (response.status === 201) {
        toast.success("Experience entry added successfully");
        // Clear the form after successful submission
        setOrganization("");
        setRole("");
        setJoiningDate("");
        setCompletionDate("");
        setDetails("");
        // Refresh the experience data
        axios.get("/api/experience").then((response) => {
          setExperienceData(response.data);
        });
      } else {
        toast.error("Failed to add experience entry");
      }
    } catch (error) {
      console.error("Error adding experience entry:", error);
      toast.error("An error occurred while adding the experience entry");
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/experience/${id}`
      );

      if (response.status === 200) {
        toast.success("Experience entry deleted successfully");
        // Refresh the experience data
        axios.get("/api/experience").then((response) => {
          setExperienceData(response.data);
        });
      } else {
        toast.error("Failed to delete experience entry");
      }
    } catch (error) {
      console.error("Error deleting experience entry:", error);
      toast.error("An error occurred while deleting the experience entry");
    }
  };

  return (
    <AdLayout>
      <ToastContainer />
      <div className="row">
        <div
          className="col-7 w-100 offset-3 mx-auto p-5"
          // style={{ height: "100vh" }}
        >
          {/* <h1 className="display-5 my-5">Experience Page Setting</h1> */}
          <div className="card">
            <div className="card-body">
              <h5 className="card-title display-6">Experience Page</h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control fs-5"
                    placeholder="Organization ..."
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control fs-5"
                    placeholder="Role ..."
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3 d-flex">
                  <div style={{ width: "50%" }}>
                    <input
                      type="date"
                      className="form-control fs-5 me-3"
                      style={{ width: "90%" }}
                      placeholder="Joining Date ..."
                      value={joiningDate}
                      onChange={(e) => setJoiningDate(e.target.value)}
                      required
                    />
                    <span className="text-muted fs-6 ms-1">
                      Joining Date ...
                    </span>
                  </div>
                  <div style={{ width: "50%" }}>
                    <input
                      type="date"
                      className="form-control fs-5"
                      style={{ width: "100%" }}
                      placeholder="Completion Date ..."
                      value={completionDate}
                      onChange={(e) => setCompletionDate(e.target.value)}
                    />
                    <span className="text-muted fs-6 mt-1 ms-1">
                      Completion Date ...(leave empty if current)
                    </span>
                  </div>
                </div>
                <div className="mb-3">
                  <textarea
                    type="text"
                    className="form-control fs-5"
                    placeholder="Enter details ..."
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div className="mb-3">
                  <button
                    type="submit"
                    className="form-control btn btn-secondary fs-4 btn__pink"
                  >
                    Add Entry
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-6 w-100 offset-3 mx-auto card">
              <div className="mt-4">
                <h5 className="mb-3">Experience Entries</h5>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Organization</th>
                      <th>Role</th>
                      <th>Joining Date</th>
                      <th>Completion Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {experienceData.map((entry) => (
                      <tr key={entry._id}>
                        <td>{entry.organization}</td>
                        <td>{entry.role}</td>
                        <td>{entry.joiningDate}</td>
                        <td>{entry.completionDate || "N/A"}</td>
                        <td>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleDelete(entry._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdLayout>
  );
};

export default AdExperience;
