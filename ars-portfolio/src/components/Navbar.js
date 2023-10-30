import React, { useEffect, useState } from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home_main"); // Initialize with the "Home" section ID

  // Define the sections and their corresponding IDs
  const sections = [
    { name: "Home", id: "home_main" },
    { name: "About", id: "about_me" },
    { name: "Skills", id: "skills_id" },
    { name: "Education", id: "education_id" },
    { name: "Projects", id: "project_id" },
    { name: "Experience", id: "experience_id" },
    { name: "Contact Me", id: "contact_id" },
  ];

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const targetScrollPosition = targetElement.offsetTop - 100;

      window.scrollTo({
        top: targetScrollPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position and determine the active section
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        const targetElement = document.getElementById(section.id);

        if (targetElement) {
          const sectionTop = targetElement.offsetTop - 200;
          const sectionBottom = sectionTop + targetElement.clientHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(section.id);
            return;
          }
        }
      }

      // If no section is active, set it to null
      setActiveSection(null);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light sticky-top nav__style">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto p-2 letter__spacing">
              {sections.map((section) => (
                <NavLink
                  key={section.id}
                  className={`nav-link text__pink me-3 ${
                    activeSection === section.id ? "nav__active" : ""
                  }`}
                  to={`#${section.id}`}
                  onClick={(e) => handleLinkClick(e, section.id)}
                >
                  {section.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
