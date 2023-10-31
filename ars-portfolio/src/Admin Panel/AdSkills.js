import React, { useState, useEffect } from "react";
import AdLayout from "./AdLayout";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdSkills = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  // const [iconLibrary, setIconLibrary] = useState("");
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // Fetch skills from the server
    axios.get("/api/skills").then((response) => {
      setSkills(response.data.data);
    });
  }, []);
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setImage(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("image", image); // Use FormData to send the image as a file

      const response = await axios.post("/api/skills", formData);
      if (response.data.success) {
        toast.success("Skill added successfully");
        // Clear the form and update the skills list
        setName("");
        setImage("");
        setSkills([...skills, response.data.data]);
      } else {
        toast.error("Failed to add skill");
      }
    } catch (error) {
      console.error("Error adding skill:", error);
      toast.error("An error occurred while adding the skill");
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`/api/skills/${id}`);
      if (response.data.success) {
        toast.success("Skill deleted successfully");
        // Update the skills list after deletion
        setSkills(skills.filter((skill) => skill._id !== id));
      } else {
        toast.error("Failed to delete skill");
      }
    } catch (error) {
      console.error("Error deleting skill:", error);
      toast.error("An error occurred while deleting the skill");
    }
  };

  return (
    <>
      <AdLayout>
        <ToastContainer />
        <div className="row">
          <div
            className="col-7 w-100 offset-3 mx-auto p-5"
            // style={{ height: "100vh" }}
          >
            {/* <h1 className="display-5 my-5">Skills Page Setting</h1> */}
            <div className="card">
              <div className="card-body">
                <h5 className="card-title display-6">Skills Page</h5>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                  <p className="card-text pt-3">
                    <input
                      type="text"
                      className="form-control fs-5"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Skill Name ..."
                      required
                    />
                  </p>
                  <p className="card-text pt-3 d-flex ">
                    <p>
                      <input
                        type="file"
                        className="form-control fs-5 me-3"
                        id="image"
                        name="image"
                        onChange={handleFileChange}
                        required
                      />
                      <span className="text-muted fs-6 ms-1">
                        Add Icons all technology which you have. (e.g., HTML,
                        ReactJs, Andriod, etc.)
                      </span>
                    </p>
                  </p>
                  <p className="card-text pt-3 ">
                    <button
                      // onClick={handleSubmit}
                      type="submit"
                      className=" form-control btn btn-secondary fs-4 btn__pink"
                    >
                      Update
                    </button>
                  </p>
                </form>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-7 w-100 offset-3 mx-auto card">
                <h2>Skill Table</h2>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Icon</th>

                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {skills.map((skill) => (
                      <tr key={skill._id}>
                        <td>{skill.name}</td>
                        <td>
                          {skill.image ? (
                            <img
                              src={`/uploads/${skill.image}`}
                              alt="ImageFile"
                              width="100"
                            />
                          ) : (
                            "No Image"
                          )}
                        </td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => handleDelete(skill._id)}
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
    </>
  );
};

export default AdSkills;
