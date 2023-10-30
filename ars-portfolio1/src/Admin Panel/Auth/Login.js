import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate, useLocation, Link } from "react-router-dom";
import AdLayout from "../AdLayout";
import "./authStyles.css";

const Login = () => {
  // const notify = () => toast("Wow so easy!");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (error) {
      const timeoutId = setTimeout(() => {
        setError("");
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [error]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/user/login", {
        email,
        password,
      });
      if (res.data.success === true) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token", JSON.stringify(res.data.token));
        toast.success("Login Successfully", {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        if (res.data.message) {
          navigate(location.state || "/");
        }
      } else {
        setError(res.data.message);
        toast.error(res.data.message);
      }
    } catch (error) {
      setError(error.message);
      toast.error(error.message);
    }
  };

  return (
    <>
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
                <h1 className="text-center display-5 mt-3 ">Log In User </h1>
                <form onSubmit={handleSubmit}>
                  {error && (
                    <div className="form-group form-control my-3 mx-auto text-danger">
                      {error}
                    </div>
                  )}
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
                  </div>
                  <div className="form-group">
                    <label className="fs-3 p-1">Password</label>
                    <input
                      value={password}
                      onChange={handleChange}
                      type="password"
                      className="form-control form-control-lg"
                      name="password"
                      required
                    />
                  </div>

                  <div className="form-group mt-4 mx-auto d-flex justify-content-around">
                    <Link to="/forget-password" className=" p-2 mt-0">
                      Forgot Password
                    </Link>
                    <Link to="/register" className="p-2 mt-0">
                      I have no account
                    </Link>
                  </div>

                  <div className="form-group my-5">
                    <button
                      type="submit"
                      className="form-control form-control-lg btn btn__pink btn-lg btn-block p-2 mt-0"
                    >
                      Login
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
        {/* </div> */}
      </AdLayout>
    </>
  );
};

export default Login;
