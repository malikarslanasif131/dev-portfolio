import React, { useEffect, useState } from "react";
import AdLayout from "./AdLayout";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdSetting = () => {
  const [selectedColor1, setSelectedColor1] = useState("#000000");
  const [selectedColor2, setSelectedColor2] = useState("#000000");
  const [selectedColor3, setSelectedColor3] = useState("#000000");
  const [selectedColor4, setSelectedColor4] = useState("#000000");
  const [contentFlag, setContentFlag] = useState(false);
  const [data, setData] = useState([]);

  const handleColorChange1 = (e) => {
    const hexColor1 = e.target.value;
    setSelectedColor1(hexColor1);
  };
  const handleColorChange2 = (e) => {
    const hexColor2 = e.target.value;
    setSelectedColor2(hexColor2);
  };
  const handleColorChange3 = (e) => {
    const hexColor3 = e.target.value;
    setSelectedColor3(hexColor3);
  };
  const handleColorChange4 = (e) => {
    const hexColor4 = e.target.value;
    setSelectedColor4(hexColor4);
  };

  const handleHexInputChange1 = (e) => {
    const hexColor1 = e.target.value;
    setSelectedColor1(hexColor1);
  };
  const handleHexInputChange2 = (e) => {
    const hexColor2 = e.target.value;
    setSelectedColor2(hexColor2);
  };
  const handleHexInputChange3 = (e) => {
    const hexColor3 = e.target.value;
    setSelectedColor3(hexColor3);
  };
  const handleHexInputChange4 = (e) => {
    const hexColor4 = e.target.value;
    setSelectedColor4(hexColor4);
  };

  useEffect(() => {
    axios.get("http://localhost:8080/api/setting/").then((response) => {
      setData(response.data.data);
    });
  }, [contentFlag]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/setting", {
        primaryColor: selectedColor1,
        secondaryColor: selectedColor2,
        tertiaryColor: selectedColor3,
        quaternaryColor: selectedColor4,
      });
      if (response.data.success) {
        // Handle success, e.g., show a success toast message
        toast.success("Theme settings updated successfully");
        setContentFlag(!contentFlag);
        setSelectedColor1("#000000");
        setSelectedColor2("#000000");
        setSelectedColor3("#000000");
        setSelectedColor4("#000000");
      } else {
        // Handle failure, e.g., show an error toast message
        toast.error("Failed to update theme settings");
      }
    } catch (error) {
      // Handle any network or server errors here
      console.error("Error updating theme settings:", error);
      toast.error("An error occurred while updating theme settings");
    }
  };

  const handleDelete = async (itemId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/setting/${itemId}`
      );

      if (response.data.success === true) {
        // Remove the deleted item from the data state
        setData((prevData) => prevData.filter((item) => item._id !== itemId));
        toast.success("Item deleted successfully");
      } else {
        toast.error("Failed to delete item");
      }
    } catch (error) {
      console.error("An error occurred while deleting item:", error);
      toast.error("An error occurred while deleting item");
    }
  };

  return (
    <>
      {" "}
      <AdLayout>
        <ToastContainer />
        <div className="row">
          <div
            className="col-7 w-100 offset-3 mx-auto p-5"
            // style={{ height: "100vh" }}
          >
            {/* <h1 className="display-5 my-5">Theme Setting</h1> */}
            <div className="card">
              <div className="card-body">
                <h5 className="card-title display-6">Setting Page</h5>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                  <p className="card-text pt-3 d-flex align-content-center">
                    <label className="form-check-label fs-5 me-5">
                      Primary Color :
                    </label>
                    <input
                      type="text"
                      style={{ width: "10%" }}
                      className="form-control me-2"
                      value={selectedColor1}
                      onChange={handleHexInputChange1}
                    />
                    <input
                      type="color"
                      className=" me-2 my-auto"
                      value={selectedColor1}
                      onChange={handleColorChange1}
                    />
                  </p>

                  <div>
                    <p className="card-text pt-3 d-flex align-content-center">
                      <label className="form-check-label fs-5 me-5">
                        Secondary Color:
                      </label>
                      <input
                        type="text"
                        style={{ width: "10%" }}
                        className="form-control me-2"
                        value={selectedColor2}
                        onChange={handleHexInputChange2}
                      />
                      <input
                        type="color"
                        className=" me-2 my-auto"
                        value={selectedColor2}
                        onChange={handleColorChange2}
                      />
                    </p>
                  </div>
                  <div>
                    <p className="card-text pt-3 d-flex align-content-center">
                      <label className="form-check-label fs-5 me-5">
                        Tertiary Color:
                      </label>
                      <input
                        type="text"
                        style={{ width: "10%" }}
                        className="form-control me-2"
                        value={selectedColor3}
                        onChange={handleHexInputChange3}
                      />
                      <input
                        type="color"
                        className=" me-2 my-auto"
                        value={selectedColor3}
                        onChange={handleColorChange3}
                      />
                    </p>
                  </div>
                  <div>
                    <p className="card-text pt-3 d-flex align-content-center">
                      <label className="form-check-label fs-5 me-5">
                        Quaternary Color:
                      </label>
                      <input
                        type="text"
                        style={{ width: "10%" }}
                        className="form-control me-2"
                        value={selectedColor4}
                        onChange={handleHexInputChange4}
                      />
                      <input
                        type="color"
                        className=" me-2 my-auto"
                        value={selectedColor4}
                        onChange={handleColorChange4}
                      />
                    </p>
                  </div>

                  <p className="card-text pt-3 ">
                    <button
                      // onClick={handleSubmit}
                      type="submit"
                      className=" form-control btn btn-secondary fs-4 btn__pink"
                    >
                      Update
                    </button>
                  </p>
                </form>
              </div>
            </div>

            {/* =================== */}

            <div className="row mt-5">
              <div className="col-6 w-100 offset-3 mx-auto card">
                <h2>Skill Table</h2>
                <table className="table">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>P_color</th>
                      <th>S_color</th>
                      <th>T_color</th>
                      <th>Q_color</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data && data.length > 0 ? (
                      data.map((item, index) => (
                        <tr key={item._id}>
                          <td>{index + 1}</td>
                          <td>
                            {" "}
                            <div
                              style={{
                                width: "35px",
                                height: "35px",
                                backgroundColor: item.primaryColor,
                              }}
                            ></div>
                          </td>
                          <td>
                            {" "}
                            <div
                              style={{
                                width: "35px",
                                height: "35px",
                                backgroundColor: item.secondaryColor,
                              }}
                            ></div>
                          </td>
                          <td>
                            {" "}
                            <div
                              style={{
                                width: "35px",
                                height: "35px",
                                backgroundColor: item.tertiaryColor,
                              }}
                            ></div>
                          </td>
                          <td>
                            {" "}
                            <div
                              style={{
                                width: "35px",
                                height: "35px",
                                backgroundColor: item.quaternaryColor,
                              }}
                            ></div>
                          </td>
                          <td>
                            <button
                              onClick={() => handleDelete(item._id)}
                              className="btn btn-danger"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="3">No data available</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            {/* =================== */}
          </div>
        </div>
      </AdLayout>
    </>
  );
};

export default AdSetting;
