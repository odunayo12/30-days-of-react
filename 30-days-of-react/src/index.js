import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./components/App";
import userImage from "./react122.png";
import * as serviceWorker from "./serviceWorker";

const ex1Data = {
    id: "1",
    fName: "Odunayo",
    lName: "Rotimi",
    role: "Financial Systems Manager",
    country: "United Kingdom",
    date_joined: "Aug 1, 2020",
  },
  skills = [
    "HTML",
    "CSS",
    "JS",
    "React",
    "Redux",
    "Node",
    "MongoDB",
    "Python",
    "Data Analysis",
    "MSYQL",
    "D3.js",
    "Git",
  ];

// const currentYear = new Date().getFullYear();
// const genDetails = {
//   prerequisites: {
//     id: "1",
//     styling: "CSS",
//     reperesentation: "HTML",
//     tech: "JavaScript",
//   },
//   authorDetails: {
//     id: "1",
//     fName: "Odunayo",
//     lName: "Rotimi",
//   },
// };

// const header = (
//   <header>
//     <div className="header-wrapper">
//       <h1>Welcome to 30 Days Of React</h1>
//       <h2>Getting Started React</h2>
//       <h3>JavaScript Library</h3>
//       <p>
//         Instructor: {genDetails.authorDetails.fName}{" "}
//         {genDetails.authorDetails.lName}
//       </p>
//       <small>Date: Oct 1, 2020</small>
//     </div>
//   </header>
// );

// // user image
// const user = (
//   <div className="image-wrapper">
//     <img src={userImage} alt="React Logo" />
//   </div>
// );

// // JSX element, main
// const main = (
//   <main>
//     <div className="main-wrapper">
//       <p>
//         Prerequisite to get started{" "}
//         <strong>
//           <em>react.js</em>
//         </strong>
//         :
//       </p>
//       <ul>
//         <li>HTML</li>
//         <li>CSS</li>
//         <li> JavaScript</li>
//       </ul>
//       {user}
//     </div>
//   </main>
// );

// // JSX element, footer
// const footer = (
//   <footer>
//     <div className="footer-wrapper">
//       <p>Copyright {currentYear}</p>
//     </div>
//   </footer>
// );

// // JSX element, app
// const app = (
//   <div className="app">
//     {header}
//     {main}
//     {footer}
//   </div>
// );
const each_skill = skills.map((skill) => <h6>{skill}</h6>);
const ex1main = (
  <div>
    <div>
      <img src={userImage} alt="React Logo" />
    </div>
    <h3>
      {ex1Data.fName} {ex1Data.lName}
    </h3>
    <h5>
      {ex1Data.role} {", "} {ex1Data.country}{" "}
    </h5>

    <div>
      <h3>SKILLS</h3>
      <span>{each_skill}</span>
    </div>
  </div>
);

const ex1app = <div>{ex1main}</div>;
const rootElement = document.getElementById("root");

ReactDOM.render(ex1app, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
