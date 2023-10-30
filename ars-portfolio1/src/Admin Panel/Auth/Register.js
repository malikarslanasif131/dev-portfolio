import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import AdLayout from "../AdLayout";
import "./authStyles.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
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
      const res = await axios.post("/api/user/register", {
        name,
        email,
        password,
        answer,
      });
      // console.log(res.data);
      if (res.data.success === true) {
        toast.success("Register Successfully");
        navigate("/login");
      } else {
        toast.error(res.data.message);
        setError(res.data.message);
      }
    } catch (error) {
      toast.error(error.message);
      setError(error.message);
    }
  };

  useEffect(() => {
    if (error) {
      const timeoutId = setTimeout(() => {
        setError("");
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [error]);

  return (
    <AdLayout>
      {" "}
      {/* <div className="container-fluid"> */}
      <div className="container">
        <div
          className="row align-content-center my-auto"
          style={{ height: "100vh" }}
        >
          <ToastContainer />
          <div className="col-md-7 offset-3 my-auto">
            <div className="card my-auto px-5 bg-light ">
              <h1 className="text-center display-5 mt-2">Registeration </h1>
              <form className="" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="fs-4 p-1">Name</label>
                  <input
                    value={name}
                    onChange={handleChange}
                    type="text"
                    className="form-control form-control-lg"
                    name="name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="fs-4 p-1">Email</label>
                  <input
                    value={email}
                    onChange={handleChange}
                    type="email"
                    className="form-control form-control-lg"
                    name="email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="fs-4 p-1">Password</label>
                  <input
                    value={password}
                    onChange={handleChange}
                    type="password"
                    className="form-control form-control-lg"
                    name="password"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="fs-4 p-1">
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
                <div className="form-group mt-4 mx-auto">
                  <Link to="/login" className=" p-2 mt-0">
                    I have already account!
                  </Link>
                </div>
                <div className="form-group mt-2">
                  <button
                    type="submit"
                    className="form-control form-control-lg btn btn-lg btn-block p-2 my-3 btn__pink"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
            {/* <div className="col-md-4 my-5 offset-md-1 mx-auto bg-light">
              <p className="display-2 p-3 mx-3 fw-bold">WELLCOME</p>
              <p className="display-5 p-2">
                " Start your journey towards becoming a successful blogger
                today! Register and share your unique perspective with the
                world." <br />
                <small className="fs-4 float-end mt-3">Albert Einstein</small>
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </AdLayout>
  );
};

export default Register;
