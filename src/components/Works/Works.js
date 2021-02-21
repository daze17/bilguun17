import React, {useState, useEffect} from 'react'
import './Works.css'
import ProjectCard from './ProjectCard'

import data from './projects.json'

function Works() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
      setProjects(data.map((project) => {
        return (
          <ProjectCard
            projectId = {project.id}
            projectTitle = {project.title}
            projectDescription= {project.description}
            projectImgAddress={project.imgAddress}
            gitHubLink={project.githubLInk}
            demoLink={project.demoLink}
            stack={project.stack}
          />
        ) 
      }))
    }, [])
    return(
        <div>
            <div id="Work" className="works">
                    <div className="works-wrapper">
                            <div className="works-text-wrapper">
                                <h1 className="about-title" data-aos="fade-up">WORKS</h1>
                                {projects}
                            </div>
                    </div>
                </div>

            
        </div>
    )
}

export default Works