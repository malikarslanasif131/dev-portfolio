import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import AdLayout from "./AdLayout";
import HomeDataTable from "./HomeDataTable.js";

const AdHome = () => {
  const [proName, setProName] = useState("");
  const [tech, setTech] = useState("");
  const [contactLink, setContactLink] = useState("");
  const [image, setImage] = useState(null);
  const [resumefile, setResumefile] = useState(null);
  const [phoneNo, setPhoneNo] = useState(0);
  const [update, setUpdate] = useState(false);

  // const token = localStorage.getItem("token").slice(1, -1);
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    } else {
      setImage(null);
    }
  };

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResumefile(file);
    } else {
      setResumefile(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("proName", proName);
      formData.append("tech", tech);
      formData.append("contactLink", contactLink);
      formData.append("phoneNo", phoneNo);
      if (image) {
        formData.append("image", image);
      }
      if (resumefile) {
        formData.append("resumefile", resumefile);
      }

      const res = await axios.post(
        "http://localhost:8080/api/info/home",
        formData
      );
      if (res.data.success === true) {
        toast.success("Data added Successfully");
        setUpdate(true);
        setProName("");
        setTech("");
        setContactLink("");
        setImage("");
        setResumefile("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <AdLayout>
        <ToastContainer />
        <div className="row">
          <div
            className="col-7 w-100 offset-3 mx-auto p-5"
            // style={{ height: "100vh" }}
          >
            {/* <h1 className="display-5 my-5">Home Page Setting</h1> */}
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title display-6">Home Page</h5>
                  <p className="card-text pt-3 d-flex justify-content-between">
                    <input
                      type="text"
                      className="form-control fs-5 me-3"
                      style={{ width: "45%" }}
                      placeholder="Your Name ..."
                      value={proName}
                      onChange={(e) => setProName(e.target.value)}
                      required
                    />
                    <input
                      type="text"
                      className="form-control fs-5"
                      style={{ width: "50%" }}
                      placeholder="Your Expertise ..."
                      value={tech}
                      onChange={(e) => setTech(e.target.value)}
                      required
                    />
                  </p>
                  <p className="card-text pt-3">
                    <input
                      type="text"
                      className="form-control fs-5"
                      placeholder="Hire Me link ..."
                      value={contactLink}
                      onChange={(e) => setContactLink(e.target.value)}
                      required
                    />
                  </p>
                  <p className="card-text pt-3">
                    <input
                      type="number"
                      className="form-control fs-5"
                      placeholder="+92**********"
                      value={phoneNo}
                      onChange={(e) => setPhoneNo(e.target.value)}
                      required
                    />
                  </p>

                  <p className="card-text pt-3">
                    <label className="form-check-label fs-5">
                      Feature Image:
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      className="form-control fs-5"
                      onChange={handleImageChange}
                    />
                  </p>

                  <p className="card-text pt-3">
                    <label className="form-check-label fs-5">
                      Resume file:
                    </label>
                    <input
                      type="file"
                      accept=".pdf"
                      className="form-control fs-5"
                      onChange={handleResumeChange}
                    />
                  </p>

                  <p className="card-text pt-3">
                    <button
                      type="submit"
                      className="form-control btn btn-secondary fs-4 btn__pink"
                    >
                      Update
                    </button>
                  </p>
                </div>
              </div>
            </form>

            {/* ======================== */}
            <div className="row">
              <div className="col-6 w-100 offset-3 mx-auto m-5 card">
                <HomeDataTable update={update} />{" "}
                {/* Render the DataTable component */}
              </div>
            </div>
            {/* ======================== */}
          </div>
        </div>
      </AdLayout>
    </>
  );
};

export default AdHome;
