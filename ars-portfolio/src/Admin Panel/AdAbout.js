import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import AdLayout from "./AdLayout";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdAbout = () => {
  const editor = useRef(null);

  const [content, setContent] = useState("");
  const [contentFlag, setContentFlag] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch all data for the table
    axios.get("/api/about").then((response) => {
      setData(response.data.data);
    });
  }, [contentFlag]);

  const handleUpdate = async () => {
    try {
      const response = await axios.post("/api/about/update", {
        content,
      });

      if (response.data.success === true) {
        toast.success("About content updated successfully");
        setContent("");
        setContentFlag(!contentFlag);
      } else {
        // Check for a specific error message from the server
        if (response.data.message) {
          toast.error(response.data.message);
        } else {
          toast.error("Failed to update about content");
        }
      }
    } catch (error) {
      console.error("An error occurred while updating about content:", error);
      toast.error("An error occurred while updating about content");
    }
  };

  const handleDelete = async (itemId) => {
    try {
      const response = await axios.delete(`/api/about/${itemId}`);

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
      <AdLayout>
        <ToastContainer />
        <div className="row">
          <div
            className="col-7 w-100 offset-3 mx-auto p-5"
            // style={{ height: "100vh" }}
          >
            {/* <h1 className="display-5 my-5">About Page Setting</h1> */}
            <div className="card custom__bg">
              <div className="card-body">
                <h5 className="card-title display-6">About Page</h5>
                <p className="card-text pt-3">
                  <ReactQuill
                    ref={editor}
                    theme="snow"
                    value={content}
                    onChange={setContent}
                    placeholder="Type here about your summary..."
                    style={{
                      height: "360px",
                      paddingBottom: "20px",
                      margin: "10px",
                    }}
                  />
                </p>

                <p className="card-text pt-3 ">
                  <button
                    onClick={handleUpdate}
                    className=" form-control btn btn-secondary fs-4 btn__pink"
                  >
                    Update
                  </button>
                </p>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-6 w-100 offset-3 mx-auto card">
                <h2>Data Table</h2>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Index</th>
                      <th>Content</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data && data.length > 0 ? (
                      data.map((item, index) => (
                        <tr key={item._id}>
                          <td>{index + 1}</td>
                          <td>{item.content}</td>
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
          </div>
        </div>
      </AdLayout>
    </>
  );
};

export default AdAbout;
