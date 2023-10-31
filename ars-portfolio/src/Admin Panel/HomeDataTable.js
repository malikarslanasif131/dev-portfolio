import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomeDataTable = ({ update }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your API here
    axios.get("/api/info/home").then((response) => {
      setData(response.data.data); // Assuming your API returns data as an array
    });
  }, [update]);

  // Function to handle delete button click
  const handleDelete = async (itemId) => {
    try {
      // Make a DELETE request to your API to delete the item by its ID
      await axios.delete(`/api/info/home/${itemId}`);
      toast.success("Skill deleted successfully");
      // Update the state to reflect the deleted item
      setData((prevData) => prevData.filter((item) => item._id !== itemId));
    } catch (error) {
      console.error("Error deleting item:", error);
      toast.error("An error occurred while deleting the skill");
    }
  };

  return (
    <div>
      <ToastContainer />
      <h2>Data Table</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Pro Name</th>
            <th>Tech</th>
            <th>Contact Link</th>
            <th>Image</th>
            <th>Resume File</th>
            <th>Action</th> {/* Add a new column for delete button */}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item._id}>
              <td>{item.proName}</td>
              <td>{item.tech}</td>
              <td>{item.contactLink}</td>
              <td>
                {item.image ? (
                  <img
                    src={`/uploads/${item.image}`}
                    alt="ImageFile"
                    width="100"
                  />
                ) : (
                  "No Image"
                )}
              </td>
              <td>
                {item.resumefile ? (
                  <a
                    href={`/uploads/${item.resumefile}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Resume
                  </a>
                ) : (
                  "No File"
                )}
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomeDataTable;
