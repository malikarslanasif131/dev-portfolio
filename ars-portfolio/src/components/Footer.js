import React from "react";
import "./styles.css";
import {
  SiArstechnica,
  SiFacebook,
  SiTwitter,
  SiLinkedin,
  SiGithub,
} from "react-icons/si";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="container-fluid bgf__color__white px-5">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top bgf__color__white">
          <div className="col-md-4 d-flex align-items-center">
            <Link
              to="/login"
              className="mb-3 me-2 mb-md-0 text-dark text-decoration-none lh-1"
            >
              <SiArstechnica size={50} />
            </Link>
            <span className="text-muted">© 2023 Malik Arslan Asif, Inc</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-4  ">
              <Link className="" to="#">
                <SiFacebook size={25} />
              </Link>
            </li>
            <li className="ms-4  ">
              <Link className="text-dark" to="#">
                <SiTwitter size={25} />
              </Link>
            </li>
            <li className="ms-4  ">
              <Link className="text-dark" to="#">
                <SiGithub size={25} />
              </Link>
            </li>
            <li className="ms-4  ">
              <Link className="" to="#">
                <SiLinkedin size={25} />
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};

export default Footer;
