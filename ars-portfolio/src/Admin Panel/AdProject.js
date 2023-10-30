import React, { useState, useEffect } from "react";
import axios from "axios";
import AdLayout from "./AdLayout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import ReactSelect from "../components/ReactSelect";

const AdProject = () => {
  const [name, setName] = useState("");
  const [stack, setStack] = useState("");
  const [usedTech, setUsedTech] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [details, setDetails] = useState("");
  const [projects, setProjects] = useState([]);
  const handleImageChange = (e) => {
    var file = e.target.files[0];
    if (file) {
      setImage(file);
    } else {
      setImage(null);
      file = null;
    }
  };
  const handleVideoChange = (e) => {
    var file = e.target.files[0];
    if (file) {
      setVideo(file);
    } else {
      setVideo(null);
      file = null;
    }
  };

  useEffect(() => {
    // Fetch projects from the server
    axios.get("/api/projects").then((response) => {
      setProjects(response.data.data);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // return;
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("stack", stack);
      formData.append("usedTech", usedTech);
      formData.append("details", details);
      formData.append("selectedOption", selectedOption);
      if (image) {
        formData.append("image", image);
      }
      if (video) {
        formData.append("video", video);
      }

      const response = await axios.post(
        "http://localhost:8080/api/projects",
        formData
      );

      if (response.data.success) {
        toast.success("Project added successfully");
        // Clear the form and update the projects list
        setName("");
        setStack("");
        setUsedTech("");
        setDetails("");
        setImage(null);
        setProjects([...projects, response.data.data]);
      } else {
        toast.error("Failed to add project");
      }
    } catch (error) {
      console.error("Error adding project:", error);
      toast.error("An error occurred while adding the project");
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/projects/${id}`
      );
      if (response.data.success) {
        toast.success("Project deleted successfully");
        // Update the projects list after deletion
        setProjects(projects.filter((project) => project._id !== id));
      } else {
        toast.error("Failed to delete project");
      }
    } catch (error) {
      console.error("Error deleting project:", error);
      toast.error("An error occurred while deleting the project");
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
          {/* <h1 className="display-5 my-5">Project Page Setting</h1> */}
          <div className="card">
            <div className="card-body">
              <h5 className="card-title display-6">Project Page</h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control fs-5"
                    placeholder="Project name ..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control fs-5"
                    placeholder="Stack ..."
                    value={stack}
                    onChange={(e) => setStack(e.target.value)}
                    required
                  />
                </div>
                {/* <div className="mb-3">
                  <label className="form-label fs-6">Category:</label>
                  <ReactSelect
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                  />
                </div> */}
                <div className="mb-3">
                  <label className="form-label fs-6">Category:</label>
                  <input
                    type="text"
                    className="form-control fs-5"
                    placeholder="React, Mongo , Node"
                    value={usedTech}
                    onChange={(e) => setUsedTech(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fs-6">Project Image:</label>
                  <input
                    type="file"
                    className="form-control fs-6"
                    name="image"
                    required
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fs-6">Project Video:</label>
                  <input
                    type="file"
                    className="form-control fs-6"
                    // required
                    accept="video/*"
                    name="video"
                    onChange={handleVideoChange}
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    className="form-control fs-5"
                    placeholder="Enter details ..."
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-secondary fs-4 btn__pink"
                >
                  Update
                </button>
              </form>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-6 w-100 offset-3 mx-auto card">
              <h2>Projects</h2>
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Stack</th>
                    <th>UsedTech</th>
                    {/* <th>Category</th> */}
                    <th>Details</th>
                    <th>Image</th>
                    <th>video</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project) => (
                    <tr key={project._id}>
                      <td>{project.name}</td>
                      <td>{project.stack}</td>
                      <td>{project.usedTech}</td>
                      {/* <td>{project.category}</td> */}
                      <td>{project.details}</td>
                      <td>
                        {project.image ? (
                          <img
                            src={`http://localhost:8080/uploads/${project.image}`}
                            alt="ImageFile"
                            width="100"
                          />
                        ) : (
                          "No Image"
                        )}
                      </td>
                      <td>
                        {project.video ? (
                          <video
                            src={`http://localhost:8080/uploads/${project.video}`}
                            alt="ImageFile"
                            width="100"
                          />
                        ) : (
                          "No Video"
                        )}
                      </td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(project._id)}
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
    </AdLayout>
  );
};

export default AdProject;
