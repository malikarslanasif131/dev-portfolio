import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import AdLayout from "../AdLayout";
import "./authStyles.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "newPassword":
        setNewPassword(value);
        break;
      case "answer":
        setAnswer(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/user/forgot-password", {
        email,
        newPassword,
        answer,
      });
      if (res.data.success === true) {
        toast.success("Reset Password Successfully");
        if (res.data.message) navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <AdLayout>
      {/* <div className="container-fluid"> */}
      <div className="container">
        <div
          className="row align-content-center my-auto"
          style={{ height: "100vh" }}
        >
          <ToastContainer />
          <div className="col-md-7 offset-3 my-auto">
            <div className="card my-auto px-5 bg-light ">
              <h1 className="text-center display-4 mt-5">Reset Password </h1>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="fs-3 p-1">Email</label>
                  <input
                    value={email}
                    onChange={handleChange}
                    type="email"
                    className="form-control form-control-lg"
                    name="email"
                    required
                  />
                </div>{" "}
                <div className="form-group">
                  <label className="fs-4 p-1 mt-2">
                    What is your favourite Book
                  </label>
                  <input
                    value={answer}
                    onChange={handleChange}
                    type="text"
                    className="form-control form-control-lg"
                    name="answer"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="fs-3 p-1 ">New Password</label>
                  <input
                    value={newPassword}
                    onChange={handleChange}
                    type="password"
                    className="form-control form-control-lg"
                    name="newPassword"
                    required
                  />
                </div>
                <div className="form-group mt-4 mx-auto">
                  <Link to="/login" className=" p-2 mt-0">
                    Login to account !
                  </Link>
                </div>
                <div className="form-group mt-3">
                  <button
                    type="submit"
                    className="form-control form-control-lg btn btn__pink btn-lg btn-block p-2 my-5"
                  >
                    Reset Password
                  </button>
                </div>
              </form>
            </div>
            {/* <div className="col-md-4 my-5 mx-auto bg-light">
            <p className="display-2 p-2 mx-3 fw-bold">WELLCOME</p>
            <p className="display-4 p-2">
              "In the middle of every difficulty lies opportunity." <br />
              <small className="fs-4 float-end mt-3">Albert Einstein</small>
            </p>
          </div> */}
          </div>
        </div>
      </div>
    </AdLayout>
  );
};

export default ForgotPassword;
