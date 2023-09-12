import React from 'react';

const projectsData = [
  {
    title: 'Mapishi Simplified',
    description: 'This is a meal finder application that help users get meal inspiration and random meal recipes on a click of a buttton',
    link: 'https://mshekerotokiti.github.io/phase-1-project/',
    image: './mapishisimplified.png', // Replace with the actual image file path or URL
  },
  {
    title: 'Totu Event',
    description: 'This is a project aimed at helping event organizers plan events and asslo allow users get events information with ease and book for seat in the events',
    link: 'https://consolattachepchirchir.github.io/ToTu-Event/',
    image: './totuevent.png', // Replace with the actual image file path or URL
  },
  // Add more projects here
];

function Projects() {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projects-list">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
            </h2>
            
            <a href={project.link} target="_blank" rel="noopener noreferrer">
            <img src={project.image} alt={`${project.title} Image`}  className="project-image" /> 
            </a>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
