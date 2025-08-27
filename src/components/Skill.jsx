import React from "react";

// Skill data with SVGs and images at large size
const skills = [
  {
    name: "HTML",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 48 48">
        <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
        <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
        <path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path>
        <path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
      </svg>
    ),
  },
  {
    name: "CSS",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 48 48">
        <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5z"></path>
        <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
        <path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path>
        <path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
      </svg>
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 48 48">
        <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
        <path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path>
      </svg>
    ),
  },
  {
    name: "TailwindCSS",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 48 48">
        <path fill="#00acc1" d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599
          c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6
          c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598
          c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152
          c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246
          C20.672,26.764,17.949,24,12,24L12,24z"></path>
      </svg>
    ),
  },
  {
    name: "ReactJS",
    icon: (
     <img width="96" height="96" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-react-a-javascript-library-for-building-user-interfaces-logo-shadow-tal-revivo.png" alt="external-react-a-javascript-library-for-building-user-interfaces-logo-shadow-tal-revivo"/>
    ),
  },
  {
    name: "NodeJS",
    icon: (
      <img width="96" height="96" src="https://img.icons8.com/color/96/nodejs.png" alt="nodejs"/>
    ),
  },
  {
    name: "ExpressJS",
    icon: (
      <img width="96" height="96" src="https://img.icons8.com/fluency/96/express-js.png" alt="express-js"/>
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <img width="96" height="96" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png" alt="mongodb"/>
    ),
  },
  {
    name: "MySQL",
    icon: (
      <img width="96" height="96" src="https://img.icons8.com/external-those-icons-flat-those-icons/96/external-MySQL-programming-and-development-those-icons-flat-those-icons.png" alt="mysql"/>
    ),
  },
  {
    name: "MSSQL Server",
    icon: (
      <img width="96" height="96" src="https://img.icons8.com/color/96/microsoft-sql-server.png" alt="microsoft-sql-server"/>
    ),
  },
  {
    name: "Python",
    icon: (
      <img width="96" height="96" src="https://img.icons8.com/color/96/python--v1.png" alt="python"/>
    ),
  },
  {
    name: "GitHub",
    icon: (
      <img width="96" height="96" src="https://img.icons8.com/material-outlined/96/github.png" alt="github"/>
    ),
  },
];


function Skill() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-10">
      <h2 className="text-4xl font-extrabold text-purple-500 mb-8 tracking-tight ">My Skills</h2>
      <div className="w-full max-w-5xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8">
        {skills.map(({ name, icon }) => (
          <div
            key={name}
            className="animated-border flex flex-col items-center bg-[#23223a]/80 rounded-xl shadow-md p-6
              transition hover:scale-105 hover:shadow-xl"
          >
            <div className="mb-3 flex items-center justify-center">{icon}</div>
            <span className="text-white font-medium mt-2 text-lg">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill;
