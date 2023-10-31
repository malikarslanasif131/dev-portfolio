import React, { useState, useEffect } from "react";
import "./Layout.css";
import Navbar from "../../components/Navbar";
import Home from "../Home/Home";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Education from "../Education/Education";
import Seprator from "../../components/Seprator";
import Experience from "../Experience/Experience";
import Footer from "../../components/Footer";
import Project from "../Project/Project";
import Contact from "../Contact/Contact";
import axios from "axios";

const Layout = () => {
  const [colors, setColors] = useState({});

  useEffect(() => {
    // Fetch color values from your API
    axios
      .get("/api/setting")
      .then((response) => {
        setColors(response.data.data[0]);
        // console.log(response.data.data[0]);
      })
      .catch((error) => console.error(error));
  }, []);

  const rootStyle = {
    "--primary-color": colors.primaryColor || "#EA738D",
    "--secondary-color": colors.secondaryColor || "#8AAAE5",
    "--tertiary-color": colors.tertiaryColor || "#008080",
    "--quaternary-color": colors.quaternaryColor || "#4b0082",
  };
  // console.log(colors);
  return (
    <>
      <div style={rootStyle} className="layout_main">
        <Navbar />
        <Home />
        <Seprator />
        <About />
        <Skills />
        <Seprator />
        <Education />
        <Seprator />
        <Project />
        <Seprator />
        <Experience />
        <Contact />
        {/* <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="HORIZONTAL" data-vanity="malik-arslan-asif-99b4b2256" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://pk.linkedin.com/in/malik-arslan-asif-99b4b2256?trk=profile-badge">Malik Arslan asif</a></div> */}
        {/* <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="dark" data-type="HORIZONTAL" data-vanity="malik-arslan-asif-99b4b2256" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://pk.linkedin.com/in/malik-arslan-asif-99b4b2256?trk=profile-badge">Malik Arslan asif</a></div> */}

        <Footer />
      </div>
    </>
  );
};

export default Layout;
