import React, { useState } from "react";
import "./Contact.css";
import { BiSolidContact } from "react-icons/bi";
// import { ContactUs } from "../../components/EmailJS.js";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(name, email, message);
    if (name === "" || email === "" || message === "") {
      toast.error("Please fill all the fields");
      return;
    }
    // Email validation using a regular expression
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    const Data = {
      to_name: name,
      to_email: email,
      message: message,
    };
    emailjs
      .send("service_i4plhg7", "template_u5z0i6f", Data, "FenPdmumdsxkfssD8")
      .then(
        async (result) => {
          await axios.post("/api/contact", {
            name,
            email,
            message,
          });
          // console.log(result.text);
          setName("");
          setEmail("");
          setMessage("");
          toast.success("Message sent successfully");
        },
        (error) => {
          // console.log(error.text);
          toast.error("Failed to send message");
        }
      );
  };

  return (
    <>
      {/* <ContactUs /> */}
      <ToastContainer />
      <div
        id="contact_id"
        className="container contact__section  my-5 custom__mt-7rem"
      >
        <div className="row my-5">
          <div className="mt-5 mb-3">
            <h1 className="display-5 text-center ">
              Contact Me{" "}
              <span className="align-top p-1 m-1 icon_about">
                {" "}
                <BiSolidContact />
              </span>
            </h1>
          </div>
          <div className="col-md-4 offset-1">
            <div className="m-auto image_round">
              <img
                className="image__round"
                src={require("../../images/contact-us.jpg")}
                width={350}
                height={300}
                alt="Logo"
              />
            </div>
          </div>
          <div className="col-md-6 mx-auto">
            <form>
              <div className="mb-3">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Your Name..."
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Enter Your Email..."
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control form-control-lg"
                  placeholder="Massage Here ..."
                  rows="2"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="d-grid gap-2 col-12 mx-auto">
                <button
                  type="submit"
                  className="btn btn-primary btn_color_pink "
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
