import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Project.css";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { Modal, Button } from "react-bootstrap";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const handleOpenModal = (url, name) => {
    setVideoUrl(url);
    setProjectName(name);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setVideoUrl("");
    setShowModal(false);
  };
  useEffect(() => {
    // Fetch projects from the server
    axios.get("/api/projects").then((response) => {
      setProjects(response.data.data);
    });
  }, []);
  // console.log(projects);
  return (
    <>
      <div id="project_id" className="container my-5">
        <div className="row">
          <div className="m-3">
            <h1 className="display-5 text-center">
              Projects{" "}
              <span className="align-top p-1 m-1 icon_about">
                {" "}
                <AiOutlineFundProjectionScreen />
              </span>
            </h1>
          </div>

          {projects &&
            projects.map((project) => {
              // setProjectName(project.name); // Set the project name here or wherever needed
              return (
                <div key={project._id} className="col-md-4 ">
                  <span className="top_badge__style indigo_badge p-2">
                    {project.stack}
                  </span>
                  <div
                    className="card card__style "
                    // style={{ minWidth: "24rem", maxWidth: "24rem" }}
                  >
                    <img
                      src={`/uploads/${project.image}`}
                      className="card-img-top"
                      style={{ minHeight: "220px" }}
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{project.name}</h5>
                      <p>
                        {project.usedTech.split(",").map((tech, index) => (
                          <span
                            className="badge__style teal_badge m-1 px-2"
                            key={index}
                          >
                            {tech}
                          </span>
                        ))}
                      </p>
                      <p className="card-text">{project.details}</p>
                      <div className="d-grid gap-2 col-12 mx-auto">
                        <button
                          className="btn btn-primary btn_color_pink"
                          type="button"
                          // onClick={() =>
                          //   handleOpenModal(
                          //     `/uploads/${project.video}`,
                          //     project.name
                          //   )
                          // }
                          onClick={() =>
                            handleOpenModal(project.video, project.name)
                          }
                        >
                          Watch Video
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        size="lg"
        className="model__style"
      >
        <div className="card__style">
          <Modal.Header closeButton>
            <Modal.Title>{projectName} Video</Modal.Title>
          </Modal.Header>
          <Modal.Body className="my-0">
            <video width="100%" height="auto" controls autoPlay={true}>
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Modal.Body>
          <Modal.Footer className="mt-0 mx-auto">
            <Button
              className="btn btn-primary  btn_color_pink w-25 align-items-center"
              // variant="secondary"
              onClick={handleCloseModal}
            >
              Close
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
};

export default Project;
