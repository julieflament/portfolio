const projects = [
    {
      title: "Data Analysis Project",
      description: "Used Python, alongside Seaborn, to analyze a dataset containing information about literacy rates worldwide. Developed statistical models to identify correlations between education levels and economic development. Used Jupiter Notebook to perform the analysis.",
      link: "https://github.com/ubco-W2022T2-data301/project-group-group18"
    },
    {
        title: "Capstone Project",
        description: "Built a full-stack survey platform with admin/user dashboards for collecting and analyzing image appeal data. Developed a Processing-based generator for customizable geometric images with controlled randomness (shapes, variation, mirroring, etc.). Implemented computer vision via OpenCV to classify shapes (triangle, quadrilateral, ellipse) using contour detection.",
        link: " https://github.com/COSC-499-W2024/capstone-project-team-5-003/tree/master"
    },
    {
      title: "SQL + Excel Analysis",
      description: "Used SQL and Microsoft Excel to analyze data containing information about products in several factories. Won top analysis project and earned the 'Data Analysis with Databases' badge from UBC Okanagan's COSC 304 course for exceptional project work.",
      link: "#"
    },
    {
      title: "Hurriscan",
      description: "ML + Flask web app predicting hurricanes with interactive heat maps.",
      link: "https://github.com/trevorwinser/Infinite-Loopers"
    },
    {
      title: "Game of Amazons AI",
      description: "Java AI that plays Amazons. Ranked 7th in tournament.",
      link: "https://github.com/danglakshay/cosc322_project"
    },
    {
      title: "Emergency Shelter App",
      description: "Java Android app for locating emergency shelters with real-time disaster updates.",
      link: "https://github.com/AngryMagnets/COSC341-ProjectStep4"
    },
    {
        title: "Human Computer Interaction",
        description: "Designed an intelligent cursor system that snaps to keys on a virtual keyboard for improved efficiency on smart TVs. Implemented a touchpad-controlled cursor movement system similar to Apple TV’s remote.",
        link: " https://github.com/namekeptanonymous/cosc441-group-10"
    }
  ];
  
  const container = document.querySelector('.light-container');
  console.log(container); // should NOT be null
  let currentIndex = 0;
  
  function renderProjects() {
    container.innerHTML = '';
    for (let i = currentIndex; i < currentIndex + 3; i++) {
      const index = i % projects.length;
      const project = projects[index];
      const projectSquare = `
        <div class="light-square">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <a href="${project.link}" class="project-link">View Project</a>
        </div>
      `;
      container.insertAdjacentHTML('beforeend', projectSquare);
    }
  }
  
  function scrollProjects(direction) {
    currentIndex = (currentIndex + direction + projects.length) % projects.length;
    renderProjects();
  }
  
  window.addEventListener('DOMContentLoaded', renderProjects);
  