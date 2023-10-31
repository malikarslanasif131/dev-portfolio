import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
// import logo from "../../images/my-profile.jpg";
import Typewriter from "typewriter-effect";
import { useWindupString } from "windups";
import { BsWhatsapp } from "react-icons/bs";
const Home = () => {
  const [data, setData] = useState("");
  const [proName, setProName] = useState("Your Name ...");
  const [tech, setTech] = useState("");
  const [contactLink, setContactLink] = useState("");
  const [image, setImage] = useState(null);
  const [resumefile, setResumefile] = useState(null);
  const [phoneNo, setPhoneNo] = useState(0);

  // const storedUser = localStorage.getItem("user");
  // const storedToken = localStorage.getItem("token");

  // let user = null;
  // let token = null;

  // try {
  //   if (storedUser) {
  //     user = JSON.parse(storedUser);
  //   }
  //   if (storedToken) {
  //     token = JSON.parse(storedToken);
  //   }
  // } catch (error) {
  //   // Handle the JSON parsing error, e.g., log the error or take appropriate action.
  //   console.error("Error parsing JSON data:", error);
  // }
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("/api/info/home");
      if (response.data.data[0]) {
        setData(response.data.data);
        setProName(response.data.data[0].proName);
        setTech(response.data.data[0].tech);
        setContactLink(response.data.data[0].contactLink);
        setImage(response.data.data[0].image);
        setResumefile(response.data.data[0].resumefile);
        setPhoneNo(response.data.data[0].phoneNo);
      }
    };
    getData();
    // axios.get("/api/info/home").then((response) => {
    //   setData(response.data.data);
    //   setProName(data.proName);
    // });
  }, []);
  // console.log(data);
  // console.log(proName);
  const [text] = useWindupString(`${proName ? proName : "Your Name ..."}`);

  function StringToArray(inputString) {
    return inputString.split("||").map((item) => item.trim());
  }
  // const tech = "Drupal 7 & 8 || Mern Stack Developer! || Full stack";
  // const contactLink = "https://www.linkedin.com";
  const techArray = StringToArray(
    tech ? tech : "Drupal 7 & 8 || Mern Stack Developer!"
  );

  return (
    <>
      <div
        id="home_main"
        className="container_fluid py-5 bg__color__white home__section"
      >
        <div className="row mx-auto d-flex justify-content-center">
          {/* // col section 1 */}
          <div className="col-md-5">
            <div className="m-auto image_round">
              <img
                className="ms-5 mt-5 image_round"
                // src={logo}
                src={image ? `/uploads/${image}` : "/uploads/ars-portfolio.jpg"}
                width={500}
                height={570}
                alt="Logo"
              />
            </div>
          </div>

          {/* // col section 2 */}
          <div className="col-md-5 m-5 p_100 ">
            <h2 className="">
              Hi i'm <p className="d-inline">{text}</p>
            </h2>

            <h3 className="mt-4 color__yellow__stack">
              <Typewriter
                options={{
                  strings: [...techArray],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h3>
            <div className="mt-4">
              <a
                href={contactLink ? `https://${contactLink}` : ""}
                // href={`https://api.whatsapp.com/send?phone=+923065088099&text=Hi%20I%20want%20to%20hire%20you`}
                target="_blank"
                rel="noopener noreferrer"
                type="button"
                className="btn btn-lg sky_blue_color px-3 me-3"
              >
                Hire Me
              </a>
              <a
                href={resumefile ? `/uploads/${resumefile}` : ""}
                target="_blank"
                rel="noopener noreferrer"
                type="button"
                className="btn btn-lg bubblegum_pink_color px-3 ms-3 "
              >
                Resume
              </a>
              <a
                // href={contactLink ? `https://${contactLink}` : ""}
                href={`https://api.whatsapp.com/send?phone=${phoneNo}&text=Hi%20I%20want%20to%20hire%20you`}
                target="_blank"
                rel="noopener noreferrer"
                type="button"
                className="btn btn-lg mx-5"
              >
                <BsWhatsapp size={32} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
