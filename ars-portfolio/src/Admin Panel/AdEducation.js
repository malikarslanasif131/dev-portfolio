import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdLayout from "./AdLayout";

const AdEducation = () => {
  const [degree, setDegree] = useState("");
  const [institute, setInstitute] = useState("");
  const [yearStarted, setYearStarted] = useState("");
  const [yearCompleted, setYearCompleted] = useState("");
  const [details, setDetails] = useState("");
  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    // Fetch education data from the server
    axios.get("/api/education").then((response) => {
      setEducationData(response.data);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/education", {
        degree,
        institute,
        yearStarted,
        yearCompleted,
        details,
      });

      if (response.status === 201) {
        toast.success("Education entry added successfully");
        // Clear the form after successful submission
        setDegree("");
        setInstitute("");
        setYearStarted("");
        setYearCompleted("");
        setDetails("");
        // Refresh the education data
        axios.get("/api/education").then((response) => {
          setEducationData(response.data);
        });
      } else {
        toast.error("Failed to add education entry");
      }
    } catch (error) {
      console.error("Error adding education entry:", error);
      toast.error("An error occurred while adding the education entry");
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`/api/education/${id}`);

      if (response.status === 200) {
        toast.success("Education entry deleted successfully");
        // Refresh the education data
        axios.get("/api/education").then((response) => {
          setEducationData(response.data);
        });
      } else {
        toast.error("Failed to delete education entry");
      }
    } catch (error) {
      console.error("Error deleting education entry:", error);
      toast.error("An error occurred while deleting the education entry");
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
          {/* <h1 className="display-5 my-5">Education Page Setting</h1> */}
          <div className="card">
            <div className="card-body">
              <h5 className="card-title display-6">Education Page</h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control fs-5"
                    placeholder="Degree ..."
                    value={degree}
                    onChange={(e) => setDegree(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control fs-5"
                    placeholder="Institute ..."
                    value={institute}
                    onChange={(e) => setInstitute(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3 d-flex">
                  <div style={{ width: "50%" }}>
                    <input
                      type="number"
                      className="form-control fs-5 me-3"
                      style={{ width: "90%" }}
                      placeholder="Year Started ..."
                      min="1900"
                      max="2099"
                      step="1"
                      value={yearStarted}
                      onChange={(e) =>
                        setYearStarted(e.target.value.slice(0, 4))
                      }
                      required
                    />
                  </div>
                  <div style={{ width: "50%" }}>
                    <input
                      type="number"
                      className="form-control fs-5"
                      style={{ width: "100%" }}
                      placeholder="Year Completed ..."
                      min="1900"
                      max="2099"
                      step="1"
                      value={yearCompleted}
                      onChange={(e) =>
                        setYearCompleted(e.target.value.slice(0, 4))
                      }
                      required
                    />
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
                <h5 className="mb-3">Education Entries</h5>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Degree</th>
                      <th>Institute</th>
                      <th>Year Started</th>
                      <th>Year Completed</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {educationData.map((entry) => (
                      <tr key={entry._id}>
                        <td>{entry.degree}</td>
                        <td>{entry.institute}</td>
                        <td>{entry.yearStarted}</td>
                        <td>{entry.yearCompleted}</td>
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

export default AdEducation;
