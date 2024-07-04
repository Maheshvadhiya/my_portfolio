
const navBar = {
  show: true,
};

const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Mahesh",
  middleName: "",
  lastName: "Vadhiya",
  message: "JavaScript Developer (React.js & React Native)",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Maheshvadhiya",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/mahesh.vadhiya.79230/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/mahesh_vadhiya_47",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/mahesh-vadhiya-b6baa9235/",
    },
    {
      image: "fa-twitter",
      url: "https://x.com/VadhiyaMahesh5",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/mahesh.png"),
  imageSize: 375,
  message:
    "My name is Mahesh Vadhiya. I’m a graduate of 2023 from SSSDIIT College at Junagadh with a degree in Bechelor of Computer Application. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of front-end developer. In my free time I like working on open source projects.",
  resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
};

const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "hashirshoaeb", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/mahesh.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/mahesh.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "React js", value: 80 },
    { name: "React Native", value: 75 },
    { name: "Javascript", value: 85 },
    { name: "HTML", value: 90 },
    { name: "CSS", value: 80 },
    { name: "Github", value: 90 },
  ],
  softSkills: [
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "teamwork", value: 90 },
    { name: "Comunication", value: 80 },
    { name: "Creativity", value: 90 },
  ],
};

const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for part time front-end development. If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "maheshvadhiya47@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Drop Technolab',
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
