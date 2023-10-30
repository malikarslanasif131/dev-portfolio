import React, { useState, useEffect } from "react";
import { GiStack } from "react-icons/gi";
import axios from "axios";
// import reactImage from "../../images/react.png";
import "./Skills.css";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // Fetch skills from the server
    axios.get("http://localhost:8080/api/skills").then((response) => {
      setSkills(response.data.data);
    });
  }, []);
  // console.log(skills);

  return (
    <>
      <div id="skills_id" className="container">
        <div className="row">
          <div className="col-md-12 text-center skill__styles p-5">
            <h2 className="display-5 my-5 stack__title text-uppercase mb-4">
              Techonology Stack{" "}
              <span className="align-top p-1 m-1 icon_about">
                <GiStack />
              </span>
            </h2>
            <div className="stack__list">
              <div className="container p-3">
                <div className="row">
                  {skills &&
                    skills.map((skill) => (
                      <div key={skill._id} className="col-md-3 pt-1 mt-1">
                        <div
                          className="card card_style_stack"
                          style={{ width: "16rem" }}
                        >
                          <img
                            src={`http://localhost:8080/uploads/${skill.image}`}
                            className="card-img-top mt-2"
                            alt="..."
                          />
                          <div className="card-body">
                            <h4>{skill.name}</h4>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
