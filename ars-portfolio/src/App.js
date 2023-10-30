import "./App.css";
import Layout from "./pages/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import AdLayout from "./Admin Panel/AdLayout";
import AdHome from "./Admin Panel/AdHome";
import AdAbout from "./Admin Panel/AdAbout";
import AdSkills from "./Admin Panel/AdSkills";
import AdEducation from "./Admin Panel/AdEducation";
import AdProject from "./Admin Panel/AdProject";
import AdSetting from "./Admin Panel/AdSetting";
import AdExperience from "./Admin Panel/AdExperience";
import Login from "./Admin Panel/Auth/Login";
import ForgotPassword from "./Admin Panel/Auth/ForgotPassword";
import Register from "./Admin Panel/Auth/Register";

function App() {
  return (
    <>
      <Routes>
        {/* // Public Route */}
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />

        {/* admin routes */}
        <Route path="/admin" element={<Login />} />
        <Route path="/admin/adHome" element={<AdHome />} />
        <Route path="/admin/adAbout" element={<AdAbout />} />
        <Route path="/admin/adSkills" element={<AdSkills />} />
        <Route path="/admin/adEducation" element={<AdEducation />} />
        <Route path="/admin/adProject" element={<AdProject />} />
        <Route path="/admin/adExperience" element={<AdExperience />} />
        <Route path="/admin/adSetting" element={<AdSetting />} />
      </Routes>
      {/* <div className="main_section" >
      <Layout/>

     </div> */}
    </>
  );
}

export default App;
