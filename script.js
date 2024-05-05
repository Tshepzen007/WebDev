// script.js

// Define personal information
const name = "Tshepang";
const surname = "Ramonyadiwa";
const bio = "A BSc Computer Science graduate who majored in both Computer Science and Mathematics. In addition, I am a member of the Golden Key International Honours Society who aspires to become a Software Developer. Lastly, my passions lie in the tech industry and I seek to make my contribution through emerging technologies such as AI, Web 3.0 and Blockchain in the near future.";
const educationalBackground = "I recently graduated with a BSc in Computer Science from the Nelson Mandela University, where I majored in both Computer Science and Mathematics. During my studies, I had the opportunity to delve into various programming languages (namely Java, C#, and MATLAB), algorithms, and software development methodologies, which solidified my passion for this field.";
const workExperience = "A recent graduate with no job experience yet."
const additionalInfo = "I am a member of the Golden Key International Honours Society, which recognizes academic excellence and outstanding achievements. Additionally, I am an avid learner and keep myself updated with the latest trends and technologies in the industry, such as AI and machine learning."
const contactInfo = {
  email: "tmramonyadiwa@gmail.com",
  github: "https://github.com/Tshepzen007",
  twitter: "https://www.twitter.com/",//i am not on twitter 
  instagram: "https://www.instagram.com/tshepzen__/",
  facebook: "https://www.facebook.com/" // i am not on facebook
};

// Define projects
const projects = [
  {
    title: "Personal Portfolio Website",
    description: "A responsive and visually appealing website showcasing my skills, projects, and experience. Built using HTML, CSS, and JavaScript."
  },
  {
    title: "Passport Collection Booking System",
    description: "A web-based application that allows users to reserve a specific day for which they would like to collect their passports from the local authorizing party (ie. Home Affairs). They would then receive their booking confirmation via SMS, email, or both (depending on their selection), which consists of a QR Code that must be presented on the day of collection. The aim of this project was to enable citizens to collect their passports without having to wait in long queues for hours. This solution was built using ASP.Net, C#, Twilio API for SMS mechanism, and Outlook API for email mechanism."
  }
];

// Render data in HTML pages
function renderData() {
  // Render name and bio in index.html
  if (document.getElementById("nameHeading") && document.getElementById("bioDescription")) {
    document.getElementById("nameHeading").textContent = `${name} ${surname}`;
    document.getElementById("bioDescription").textContent = bio;
  }

  // Render personal information in about.html
  if (document.getElementById("nameHeading") && document.getElementById("bioDescription") && document.getElementById("educationalBackgroundDescription") && document.getElementById("socialIcons") && document.getElementById("projectsList")) {
    document.getElementById("nameHeading").textContent = `${name} ${surname}`;
    document.getElementById("bioDescription").textContent = bio;
    document.getElementById("educationalBackgroundDescription").textContent = educationalBackground;
    document.getElementById("workExperienceDescription").textContent = workExperience;
    document.getElementById("additionalInfoDescription").textContent = additionalInfo;


    // Render social icons
    const socialIconsContainer = document.getElementById("socialIcons");
    for (const [key, value] of Object.entries(contactInfo)) {
      if (key !== "email") {
        const icon = document.createElement("a");
        icon.href = value;
        icon.target = "_blank";
        icon.rel = "noopener noreferrer";
        const iconElement = document.createElement("i");
        iconElement.classList.add(`ri-${key}-line`);
        iconElement.style.fontSize = "24px";
        icon.appendChild(iconElement);
        socialIconsContainer.appendChild(icon);
      }
    }

    // Render projects list
    const projectsListContainer = document.getElementById("projectsList");
    projects.forEach(project => {
      const projectItem = document.createElement("li");
      const projectTitle = document.createElement("h3");
      projectTitle.textContent = project.title;
      const projectDescription = document.createElement("p");
      projectDescription.textContent = project.description;
      projectItem.appendChild(projectTitle);
      projectItem.appendChild(projectDescription);
      projectsListContainer.appendChild(projectItem);
    });
  }
}

// Call the renderData function when the page loads
window.addEventListener("DOMContentLoaded", renderData);