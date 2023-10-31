import React, { useState, useEffect } from "react";
import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import "./Experience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SiExpertsexchange } from "react-icons/si";
// import { BiSolidSchool } from "react-icons/bi";
// import { FaDrupal, FaDigitalOcean } from "react-icons/fa6";

const Experience = () => {
  const [experienceData, setExperienceData] = useState([]);
  function formatDate(dateString) {
    if (!dateString) {
      return "Present";
    }

    const options = { year: "numeric", month: "long" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  }
  useEffect(() => {
    // Fetch experience data from the server
    axios.get("/api/experience").then((response) => {
      setExperienceData(response.data);
    });
  }, []);
  // console.log(experienceData);
  return (
    <>
      {/* <ToastContainer /> */}
      <div id="experience_id" className="container experience__card my-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="display-5 my-5 experience__title text-uppercase mb-4">
              Experience{" "}
              <span className="align-top p-1 m-1 icon_about">
                {" "}
                <SiExpertsexchange />
              </span>
            </h2>
            {/* <div className=" p-3">
              <VerticalTimeline lineColor="#fff">
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                  date="April-2023 - Presant"
                  iconStyle={{ background: "#EA738D", color: "#fff" }}
                  icon={<FaDrupal />}
                  iconClassName={"change__icon__style"}
                >
                  <h3 className="vertical-timeline-element-title">
                    FigOver Developer Pvt
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Drupal PHP Backend Developer
                  </h4>
                  <p>
                    In my role at FigOver, I serve as a back-end PHP developer
                    specializing in creating PHP modules for the Drupal CMS
                    platform. My responsibilities include designing and
                    implementing code to enhance the functionality and features
                    of the CMS.
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="April-2022 - March-2023"
                  iconStyle={{ background: "#EA738D", color: "#fff" }}
                  icon={<FaDigitalOcean />}
                  iconClassName={"change__icon__style"}
                >
                  <h3 className="vertical-timeline-element-title">
                    DigiTech Ultra
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    MERN Stack Developer
                  </h4>
                  <p>
                    Developed full-stack web applications using MongoDB,
                    ExpressJS (Node.js), ReactJS, and also work on Laravel(PHP)
                    during internship. Collaborated with team members to build
                    scalable and responsive web solutions.
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="April-2019 - March-2022"
                  iconStyle={{ background: "#EA738D", color: "#fff" }}
                  icon={<BiSolidSchool />}
                  iconClassName={"change__icon__style"}
                >
                  <h4 className="vertical-timeline-element-title">
                    Scientific Ideal Education School
                  </h4>
                  <h4 className="vertical-timeline-element-subtitle">
                    Teacher
                  </h4>
                  <p>
                    I'm Computer science and Mathematics teacher of
                    matriculation classes in "Scientific Ideal Education
                    School".
                  </p>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div> */}
            <div className=" p-3 m-3">
              <VerticalTimeline>
                {experienceData &&
                  experienceData.map((item, index) => (
                    <VerticalTimelineElement
                      key={index} // Add a unique key
                      className="vertical-timeline-element--work"
                      // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                      // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                      date={`${formatDate(item.joiningDate)} - ${formatDate(
                        item.completionDate
                      )}`}
                      iconStyle={{ background: "#EA738D", color: "#fff" }}
                      icon={<SiExpertsexchange />}
                      iconClassName={"change__icon__style"}
                    >
                      <h3 className="vertical-timeline-element-title">
                        {item.organization}
                      </h3>
                      <h4 className="vertical-timeline-element-subtitle">
                        {item.role}
                      </h4>
                      <p>{item.details}</p>
                    </VerticalTimelineElement>
                  ))}
              </VerticalTimeline>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
