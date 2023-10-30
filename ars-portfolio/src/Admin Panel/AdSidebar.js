import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./adStyles.css";
import { FaHome, FaProjectDiagram } from "react-icons/fa";
import { HiInformationCircle } from "react-icons/hi";
import { GiSkills } from "react-icons/gi";
import { LuLogIn, LuLogOut } from "react-icons/lu";
import { MdCastForEducation } from "react-icons/md";
import { AiTwotoneExperiment, AiTwotoneSetting } from "react-icons/ai";

const AdSidebar = () => {
  const storedUser = localStorage.getItem("user");
  const storedToken = localStorage.getItem("token");

  // let user = null;
  // let token = null;

  // try {
  //   if (storedUser) {
  //     user = JSON.parse(storedUser);
  //   }
  //   if (storedToken) {
  //     token = JSON.parse(storedToken);
  //   }
  // } catch (error) {
  //   // Handle the JSON parsing error, e.g., log the error or take appropriate action.
  //   console.error("Error parsing JSON data:", error);
  // }
  const handleLogout = () => {
    // Clear user and token data from localStorage
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    // Redirect to the login page
    // You can customize the URL as needed
    window.location.href = "/login";
  };
  const location = useLocation();
  // Now you can use the user and token objects in your code
  // For example:
  // console.log("User:", user);
  // console.log("Token:", token);
  return (
    <>
      <div className="container-fluid m-0 p-0">
        <div className="row">
          <div
            className="col-12 mx-auto bg-dark text-light custom__sidebar"
            style={{ position: "fixed", width: "320px", height: "100vh" }}
          >
            <h1 className="display-3 m-3 p-3 custom__head">Ars Portfolio</h1>
            <hr className="mt-5 w-75 mx-auto" />

            <div className="mt-5">
              <ul className="m-3 custom__ul">
                <li
                  className={`p-2 ${
                    location.pathname === "/admin/adHome" ? "custom_active" : ""
                  }`}
                >
                  <Link to="/admin/adHome" className="custom__anchor fs-5">
                    <span className="mx-3">
                      <FaHome />
                    </span>
                    Home
                  </Link>
                </li>
                <li
                  className={`p-2 ${
                    location.pathname === "/admin/adAbout"
                      ? "custom_active"
                      : ""
                  }`}
                >
                  <Link to="/admin/adAbout" className="custom__anchor fs-5">
                    <span className="mx-3">
                      <HiInformationCircle />
                    </span>
                    About
                  </Link>
                </li>
                <li
                  className={`p-2 ${
                    location.pathname === "/admin/adSkills"
                      ? "custom_active"
                      : ""
                  }`}
                >
                  <Link to="/admin/adSkills" className="custom__anchor fs-5">
                    <span className="mx-3">
                      <GiSkills />
                    </span>
                    Skills
                  </Link>
                </li>
                <li
                  className={`p-2 ${
                    location.pathname === "/admin/adEducation"
                      ? "custom_active"
                      : ""
                  }`}
                >
                  <Link to="/admin/adEducation" className="custom__anchor fs-5">
                    <span className="mx-3">
                      <MdCastForEducation />
                    </span>
                    Education
                  </Link>
                </li>
                <li
                  className={`p-2 ${
                    location.pathname === "/admin/adProject"
                      ? "custom_active"
                      : ""
                  }`}
                >
                  <Link to="/admin/adProject" className="custom__anchor fs-5">
                    <span className="mx-3">
                      <FaProjectDiagram />
                    </span>
                    Project
                  </Link>
                </li>
                <li
                  className={`p-2 ${
                    location.pathname === "/admin/adExperience"
                      ? "custom_active"
                      : ""
                  }`}
                >
                  <Link
                    to="/admin/adExperience"
                    className="custom__anchor fs-5"
                  >
                    <span className="mx-3">
                      <AiTwotoneExperiment />
                    </span>
                    Experience
                  </Link>
                </li>
                <li
                  className={`p-2 ${
                    location.pathname === "/admin/adSetting"
                      ? "custom_active"
                      : ""
                  }`}
                >
                  <Link to="/admin/adSetting" className="custom__anchor fs-5">
                    <span className="mx-3">
                      <AiTwotoneSetting />
                    </span>
                    Setting
                  </Link>
                </li>
              </ul>
              <hr className="mt-5 w-75 mx-auto" />
            </div>
            <div className="mt-">
              <ul className="m-3 custom__ul">
                {storedUser && storedToken ? (
                  <li className="p-2">
                    <button
                      className="btn btn-close-white fs-5 custom_active_hover"
                      onClick={handleLogout}
                    >
                      <span className="">
                        <LuLogOut />
                      </span>
                      Logout
                    </button>
                  </li>
                ) : (
                  <li
                    className={`p-2 ${
                      location.pathname === "/login" ? "custom_active" : ""
                    }`}
                  >
                    <Link to="/login" className="custom__anchor fs-5">
                      <span className="mx-3">
                        <LuLogIn />
                      </span>
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdSidebar;
