import React from 'react'
import './ProjectCard.css'

const ProjectCard = ({
    projectId,
    projectTitle,
    projectTimeline,
    projectDescription,
    projectImgAddress,
    gitHubLink,
    demoLink,
    stack
}) => {
    let container = null;
    projectId % 2 === 1 ?  
        container = "project-container-odd"
        : container = "project-container-even"
    const tools = stack.map((item) => <span>{item}</span>)
    return(
        <div className={container} >
        <h1 className="project-title" data-aos="fade-up">{projectTitle}</h1>
            <div className="project-text-wrapper">
                <p> {projectTimeline} </p>
                <p> {projectDescription}
                </p>
                <div className="links">
                    {gitHubLink}, {demoLink}
                </div>           
            </div>
            <div className="project-image">
                <img src={projectImgAddress} alt="project img"/>
                <div className="tools">
                     {tools} 
                </div>
            </div>

        </div>
    )
}
export default ProjectCard