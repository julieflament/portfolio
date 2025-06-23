<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Website</title>
    <link rel="stylesheet" href="portfolio.css">
</head>
<body>
    <main>
        <div class="topnav">
            <a class="active" href="#home">Home</a>
            <a href="#contact">Contact</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#about">About Me</a>
        </div>
        <div class="container" id = "home">
            <div class="bio-container">
                <img src="images/me.jpeg" alt="profile picture" class="img">
                <p class="bio-text">Hi! My name is Julie Flament.</p>
            </div>
            <button class = "arrow"> <a href="#about" class="arrow">
                <img src="images/icons8-arrow-down-50.png" alt="down arrow icon" class="icon">
            </a>
            
            </button>
        </div>
        <section class="orange" id = "about">
            <div class = "about">
            <h1>About Me</h1>
            <h3>Education</h3>
            <p>UNIVERSITY OF BRITISH COLUMBIA </p>
            <p>BSc in Computer Science, BSc Data Science Minor, GPA: 3.82 </p>
            <p>Graduation: 2025</p>
            <p>Relevant Coursework: Machine Architecture, Machine Learning, Data Analytics, Data
                Structures, Database Systems, Human-Computer Interaction, Artificial Intelligence,
                Software Engineering, TimeSeries and Forecasting,Applied Regression Analysis, Sampling and Design, Stochastic Modelling and Simulation, Numerical
                Optimization </p>
            <br>
            <br>
            <h3>Skills</h3>
            <p>Programming/Data Science:Python, JavaScript, Java, SQL, R, Pandas, NumPy, Seaborn, SPSS</p>
            <p>Web Development: React, Node.js, HTML/CSS</p>
            <p>Tools: Git, Docker, Jupyter Notebook, MySQL</p>
        </div>
        <div class="resume">
            <h1>Download my resume!</h1>
            <a href="/Users/julie/portfolio/my_app/docs/Julie FLAMENT - Resume.pdf" download="Julie Flament - Resume.pdf">Download Document</a>. 
        </div>
        </section>
        <section class="light" id = "projects">
            <h1>Projects</h1>
            <p>Here are some of my projects!</p>
            <br>
            <div class="carousel">
                <div class="arrow left" onclick="scrollProjects(-1)">&#10094;</div>
                <div class="light-container"></div>
                <div class="arrow right" onclick="scrollProjects(1)">&#10095;</div>
            </div>
        </section>
        <section class="light" id = "contact">
            <h1>Contact Me</h1>
            <p>Feel free to contact me!</p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/julie-flament-993772269/">Julie Flament</a></p>
            <p>GitHub: <a href="https://github.com/">julieflament</a></p>
            <p>Email: <a href="mailto:julimeflament@gmail.com">juliemeflament@gmail.com</a></p>
        </section>
    </main>
    <script src="../script.js"></script>
</body>
<script>
    const projects = [
        {
            title: "Data Analysis Project",
            description: "Used Python, alongside Seaborn, to analyze a dataset containing information about literacy rates around the world. Used Jupiter Notebook to perform the analysis.",
            link: "https://github.com/ubco-W2022T2-data301/project-group-group18"
        },
        {
            title: "Data Analysis Project",
            description: "Used SQL and Microsoft Excel to analyze data containing information about products in several factories. Won top analysis project and earned the 'Data Analysis with Databases badge from UBC Okanagan's COSC 304 course for exceptional project work.",
            link: "#"
        },
        {
            title: "Hurriscan",
            description: "Used Python, SQLite, Flask, HTML, CSS, JavaScript, Twilio, and Maching Learning to analyze a dataset containing information about hurricanes in the pacific. Full interactive website with heat maps displaying the hurricanes. Predicts future hurricanes in the Pacific Ocean based on the dataset.",
            link: "https://github.com/trevorwinser/Infinite-Loopers"
        },
        {
            title: "Game of Amazons",
            description: "Used Java to create an AI that plays the Game of Amazons. Played in tournament and got 7th place.",
            link: "https://github.com/danglakshay/cosc322_project"
        },
        {
            title: "Emergency Shelter Application",
            description: "Used Java, along with Android Studio, to develop an innovative application aimed at aiding users in locating shelters amidst natural disasters. The application provides an intuitive map interface, empowering users to identify available shelter options effortlessly, mark their residences as potential shelters, establish communication with homeowners offering shelter, connect with individuals in need of shelter, receive real-time updates on various disasters in proximity, and contribute information about new disasters they encounter.",
            link: "https://github.com/AngryMagnets/COSC341-ProjectStep4"
        },
    ];

    const container = document.querySelector('.light-container');
    let currentIndex = 0;

    function renderProjects() {
        container.innerHTML = '';
        for (let i = currentIndex; i < currentIndex + 3; i++) {
            const index = i >= projects.length ? i - projects.length : i;
            const project = projects[index];
            if (project) {
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
    }

    function scrollProjects(direction) {
        currentIndex += direction;
        if (currentIndex < 0) {
            currentIndex = projects.length - 1;
        } else if (currentIndex >= projects.length) {
            currentIndex = 0;
        }
        renderProjects();
    }

    window.addEventListener('DOMContentLoaded', renderProjects);
</script>
</html>
