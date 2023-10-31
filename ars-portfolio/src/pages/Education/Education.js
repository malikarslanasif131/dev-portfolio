import React, { useState, useEffect } from "react";
import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import "./Education.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoMdSchool } from "react-icons/io";
// import { SiTaichigraphics } from "react-icons/si";
// import { BiSolidSchool } from "react-icons/bi";
// import { LiaSchoolSolid } from "react-icons/lia";

const Education = () => {
  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    // Fetch education data from the server
    axios.get("/api/education").then((response) => {
      setEducationData(response.data);
    });
  }, []);
  // console.log(educationData);
  return (
    <>
      {/* <ToastContainer /> */}
      <div id="education_id" className="container education__card my-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="display-5 my-5 education__title text-uppercase mb-4">
              Education{" "}
              <span className="align-top p-1 m-1 icon_about">
                {" "}
                <IoMdSchool />
              </span>
            </h2>
            {/* <div className=" p-3">
              <VerticalTimeline>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                  date="2016 - 2018"
                  iconStyle={{ background: "#EA738D", color: "#fff" }}
                  icon={<SiTaichigraphics />}
                  iconClassName={"change__icon__style"}
                >
                  <h3 className="vertical-timeline-element-title">
                    Bsc Computer Science
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    University Of Gujrat
                  </h4>
                  <p>Computer Science, Mathematics, Statistics</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="2014 - 2016"
                  iconStyle={{ background: "#EA738D", color: "#fff" }}
                  icon={<LiaSchoolSolid />}
                  iconClassName={"change__icon__style"}
                >
                  <h3 className="vertical-timeline-element-title">
                    ICS Computer Science
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Islambad Model Collage Rawat
                  </h4>
                  <p>Computer Science, Mathematics, Physics</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="2012 - 2014"
                  iconStyle={{ background: "#EA738D", color: "#fff" }}
                  icon={<BiSolidSchool />}
                  iconClassName={"change__icon__style"}
                >
                  <h3 className="vertical-timeline-element-title">
                    Matric Computer Science
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Rawalpindi Board
                  </h4>
                  <p>Computer Science, Mathematics, Physics, Chemistry</p>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div> */}
            <div className=" p-3 m-3">
              <VerticalTimeline>
                {educationData &&
                  educationData.map((item, index) => (
                    <VerticalTimelineElement
                      key={index} // Add a unique key
                      className="vertical-timeline-element--work"
                      // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                      // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                      date={`${item.yearStarted} - ${item.yearCompleted}`}
                      iconStyle={{ background: "#EA738D", color: "#fff" }}
                      icon={<IoMdSchool />}
                      iconClassName={"change__icon__style"}
                    >
                      <h3 className="vertical-timeline-element-title">
                        {item.degree}
                      </h3>
                      <h4 className="vertical-timeline-element-subtitle">
                        {item.institute}
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

export default Education;
