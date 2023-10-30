import React, { useState, useEffect } from "react";
import "./About.css";
import { useWindupString } from "windups";
import { FcAbout } from "react-icons/fc";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const About = () => {
  const [text] = useWindupString("About Me");
  const [contentFlag, setContentFlag] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch all data for the table
    axios.get("http://localhost:8080/api/about").then((response) => {
      setData(response.data.data[0].content);
    });
  }, [contentFlag]);
  // console.log(data);
  return (
    <>
      <ToastContainer />
      <div id="about_me" className="container my-5 ">
        {/* <Seprator/> */}
        {/* <div className='text-center display-4 about__title text-uppercase my-3'>About Me</div> */}
        <div className="row my-5">
          <div className="col-md-10 m-auto p-5 about__card">
            <div className="text-center display-5 about__title text-uppercase mb-4 ">
              {text}{" "}
              <span className="align-top p-1 m-1 icon_about">
                <FcAbout />
              </span>
            </div>

            {/* <p className="about_details">{data && data}</p> */}
            <p
              className="about_details"
              dangerouslySetInnerHTML={{ __html: data }}
            ></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
