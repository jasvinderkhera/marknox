import React from "react";
import music from "./images/music-player.png";
import eduford from "./images/eduford.png";
import udemy from "./images/udemy.png";
import zaydn from "./images/zaydn.png";
import flatmate from "./images/flatmate.png";
import legal from "./images/legal.png";
import crud_operations from "./images/crud_operations.png";
import { Link } from "react-router-dom";

function Projects() {
  let projectDetails = [
    {
      id: 1,
      href: "https://basic-crud-frontend-eight.vercel.app/",
      src: "https://res.cloudinary.com/dq3orz6wb/image/upload/v1728570529/crud_operations_oi3zut.png",
      name: "CRUD Operations",
      details: [
        "Implemented Create, Read, Update, and Delete (CRUD) operations using Axios for API communication.",
        "Formik is used for form management and Yup for validation, ensuring user input integrity. Also integrated React Toastify for responsive user notifications, enhancing user experience. Also used backend technologies like Express, NodeJs and MongoDB.",
        "This CRUD application manages employee data with a backend powered by Express and MongoDB. Users can Create, Read, Update, and Delete employee records through a user-friendly interface built with Formik.",
        "Toast messages provide immediate feedback for actions like adding, updating, or deleting employees, enhancing user experience.",
      ],
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dq3orz6wb/image/upload/v1728570531/legal_dnpted.png",
      href: "https://legal-so.vercel.app/",
      name: "Legal.so",
      details: [
        "Developed a user-friendly web platform that connects individuals with legal professionals.",
        "A user-friendly interface enables users to book appointments with chosen lawyers easily.",
        "All data, including lawyer profiles and document options, is fetched dynamically from a centralized API, ensuring up-to-date information.",
        "The site allows users to browse lawyer profiles, read ratings and reviews, book consultations, access informative legal blogs, and order legal documents and the website is fully responsive with a user friendly UI.Technologies used are Javascript, ReactJs, Toastify and Redux Toolkit.",
      ],
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dq3orz6wb/image/upload/v1728570531/flatmate_ytsttk.png",
      href: "https://flatmatefrontend.vercel.app/",
      name: "FlatMate",
      details: [
        "Developed a responsive landing page for a rental website using React. Implemented modern UI components and optimized performance for a seamless user experience.",
        "Technologies used in this project are React, CSS, Javascript, Bootstrap and libraries like React-Router.",
        "Flats can be sorted by price from low to high, making it easier for users to find options within their budget.",
        "An intuitive layout enhances the user experience, allowing for easy navigation through listings."
      ],
    },
    {
      id:4,
      src:"https://res.cloudinary.com/dq3orz6wb/image/upload/v1728570531/udemy_brftly.png",
      href:"https://jasvinderkhera.github.io/udemy_clone/",
      name: "Udemy Clone",
      details: [
        "This Udemy frontend clone mimics the functionality and design of the popular online learning platform, providing users with a seamless experience for browsing and enrolling in courses.",
        "A comprehensive catalog of courses across various categories, complete with descriptions, ratings, and instructor information.",
        "The application is fully responsive, ensuring a consistent experience across desktops, tablets, and smartphones.",
        "Used Technologies like JQuery, SwiperJs for carousels, Boostrap components like nav, tabs etc."
      ]
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/dq3orz6wb/image/upload/v1728570533/eduford_zymfvs.png",
      href: "https://jasvinderkhera.github.io/eduford_university/",
      name: "Eduford University",
      details: [
        "This UI/UX responsive university website provides an engaging and user-friendly platform for students, faculty, and visitors. It aims to deliver essential information and resources while ensuring a seamless experience across all devices.",
        "A clear and organized menu structure allows users to easily access information about programs, admissions, events, and campus resources.",
        "Focus on accessibility and usability, ensuring that all users can easily navigate the site and find the information they need.",
        "Easy access to contact information for departments and support services, including chat options and FAQs."
      ]
    },
    {
      id: 6,
      name: "Music Player",
      src: "https://res.cloudinary.com/dq3orz6wb/image/upload/v1728570530/music-player_ifvad5.png",
      href: "https://musicplayer-ri2xbx4j6-jasvinderkheras-projects.vercel.app/",
      details: [
        "This music player application allows users to search for artists or tracks and listen to their songs online. It utilizes an external music API to fetch data and leverages the useEffect hook for managing side effects related to data fetching.",
        "Users can search for specific artists or tracks using a search input. The application fetches relevant results from the API based on the user's query.",
        "Users can listen to their chosen tracks directly within the application, providing a seamless music experience",
        "The useEffect hook is employed to manage data fetching when the search input changes or when the component mounts, ensuring efficient updates and performance.",
      ],
    },
    {
      id:7,
      name:"Zaydn clone",
      src: "https://res.cloudinary.com/dq3orz6wb/image/upload/v1728570533/zaydn_vvyjhp.png",
      href:"https://jasvinderkhera.github.io/portfolio/zaydn/index.html",
      details: [
        "This was my first Project at the time of learning HTML and CSS",
        "The project features a static layout that showcases various sections typical of a modern website, such as a header, footer, and content areas.",
        "Careful selection of fonts and color schemes mirrors the original site, enhancing the visual appeal",
        "This project helped me to learn basics of the web development"
      ]
    }
  ];
  return (
    <div>
      <div className="row project_row">
        {projectDetails.map((item) => (
          <Link
            to={"/projectdetail"}
            state={item}
            className="col-4 mb-4 project_div nav-link"
          >
            <div className="box border border-2">
              <img
                src={item.src}
                alt=""
                className="img-fluid project_img text-center"
              />
              <Link
                to={"/projectdetail"}
                state={item}
                className="nav-link bg-secondary text-white"
              >
                {item.name}
              </Link>
            </div>
          </Link>
        ))}

        {/* <a
          href="https://basic-crud-frontend-eight.vercel.app/"
          target="blank"
          className="col-4 mb-4 project_div nav-link"
        >
          <div className="box border border-2">
            <img
              src={crud_operations}
              alt=""
              className="img-fluid project_img text-center"
            />
            <a
              href="https://basic-crud-frontend-eight.vercel.app/"
              target="blank"
              className="nav-link bg-secondary text-white"
            >
              CRUD Operations
            </a>
          </div>
        </a>
        <a
          href="https://legal-so.vercel.app/"
          target="blank"
          className="col-4 mb-4 project_div nav-link"
        >
          <div className="box border border-2">
            <img
              src={legal}
              alt=""
              className="img-fluid project_img text-center"
            />
            <a
              href="https://legal-so.vercel.app/"
              target="blank"
              className="nav-link bg-secondary text-white"
            >
              Legal.So
            </a>
          </div>
        </a>
        <a
          href="https://jasvinderkhera.github.io/udemy_clone/"
          target="blank"
          className="col-4 mb-4 project_div nav-link"
        >
          <div className="box border border-2">
            <img src={udemy} alt="" className="img-fluid project_img" />
            <a
              href="https://jasvinderkhera.github.io/udemy_clone/"
              target="blank"
              className="nav-link bg-secondary text-white"
            >
              Udemy
            </a>
          </div>
        </a>
        <a
          href="https://flatmatefrontend.vercel.app/"
          target="blank"
          className="col-4 mb-4 project_div nav-link"
        >
          <div className="box border border-2">
            <img
              src={flatmate}
              alt=""
              className="img-fluid project_img text-center"
            />
            <a
              href="https://flatmatefrontend.vercel.app/"
              target="blank"
              className="nav-link bg-secondary text-white"
            >
              FlatMate
            </a>
          </div>
        </a>
        <a
          href="https://jasvinderkhera.github.io/eduford_university/"
          target="blank"
          className="col-4 mb-4 project_div nav-link"
        >
          <div className="box border border-2">
            <img src={eduford} alt="" className="img-fluid project_img" />
            <a
              href="https://jasvinderkhera.github.io/eduford_university/"
              target="blank"
              className="nav-link bg-secondary text-white"
            >
              EduFord University
            </a>
          </div>
        </a>

        <a
          href="https://musicplayer-ri2xbx4j6-jasvinderkheras-projects.vercel.app/"
          target="blank"
          className="col-4 mb-4 project_div nav-link"
        >
          <div className="box border border-2">
            <img src={music} alt="" className="img-fluid project_img" />
            <a
              href="https://musicplayer-ri2xbx4j6-jasvinderkheras-projects.vercel.app/"
              target="blank"
              className="nav-link bg-secondary text-white"
            >
              Music Player
            </a>
          </div>
        </a>

        <a
          href="https://jasvinderkhera.github.io/portfolio/zaydn/index.html"
          target="blank"
          className="col-4 mb-4 project_div nav-link"
        >
          <div className="box border border-2">
            <img
              src={zaydn}
              alt=""
              className="img-fluid project_img text-center"
            />
            <a
              href="https://jasvinderkhera.github.io/portfolio/zaydn/index.html"
              target="blank"
              className="nav-link bg-secondary text-white"
            >
              Zaydn
            </a>
          </div>
        </a> */}
      </div>
    </div>
  );
}

export default Projects;
