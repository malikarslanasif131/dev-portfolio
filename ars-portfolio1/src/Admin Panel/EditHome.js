// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams, useHistory } from "react-router-dom";

// const EditHome = () => {
//   const { id } = useParams();
//   const history = useHistory();

//   const [proName, setProName] = useState("");
//   const [tech, setTech] = useState("");
//   const [contactLink, setContactLink] = useState("");
//   const [image, setImage] = useState(null);
//   const [resumefile, setResumefile] = useState(null);

//   useEffect(() => {
//     // Fetch the item's data to pre-fill the form
//     axios.get(`http://localhost:8080/api/info/home/${id}`).then((response) => {
//       const itemData = response.data.data;
//       setProName(itemData.proName);
//       setTech(itemData.tech);
//       setContactLink(itemData.contactLink);
//       setImage(itemData.image);
//       setResumefile(itemData.resumefile);
//     });
//   }, [id]);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file);
//     } else {
//       setImage(null);
//     }
//   };

//   const handleResumeChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setResumefile(file);
//     } else {
//       setResumefile(null);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const formData = new FormData();
//       formData.append("proName", proName);
//       formData.append("tech", tech);
//       formData.append("contactLink", contactLink);
//       if (image) {
//         formData.append("image", image);
//       }
//       if (resumefile) {
//         formData.append("resumefile", resumefile);
//       }

//       const res = await axios.put(
//         `http://localhost:8080/api/info/home/${id}`,
//         formData
//       );

//       if (res.data.success === true) {
//         alert("Item updated successfully");
//         history.push("/"); // Redirect to the home page or wherever you want
//       } else {
//         alert(res.data.message);
//       }
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Edit Item</h2>
//       <form onSubmit={handleSubmit} encType="multipart/form-data">
//         {/* ... (form fields for editing, similar to the AddHome component) */}
//       </form>
//     </div>
//   );
// };

// export default EditHome;
