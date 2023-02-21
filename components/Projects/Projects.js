import React from "react";
import styles from "./Projects.module.css";
import Project from "./Project";

export default function Projects() {
    return (
        <section className={styles.section} name="projects">
            <h1 className={styles.title}>Projects</h1>
            <h3 className={styles.note}>Click on the names to see more!</h3>
            <div className={styles.projects}>
              <Project
                name="Personal Website"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                imgSrc="/project-photos/personal-website.jpg"
                techStack={["HTML", "CSS", "JavaScript", "React", "NextJS", "Figma"]}
              />
              <Project
                name="Purposive"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                imgSrc="/project-photos/purposive.jpg"
                techStack={["HTML", "CSS", "JavaScript", "React", "NextJS", "MongoDB", "Figma"]}
              />
              <Project
                name="Company Management System"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                imgSrc="/project-photos/company-management-system.jpg"
                techStack={["Java", "JavaFX"]}
              />
              <Project
                name="Rocket Project"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                imgSrc="/project-photos/rocket-project.jpg"
                techStack={["C-sharp", "Unity"]}
              />
              <Project
                name="One Dash"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                imgSrc="/project-photos/one-dash.jpg"
                techStack={["C-sharp", "Unity"]}
              />
              <Project
                name="Huffman Compression"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                imgSrc="/project-photos/huffman-compression.png"
                techStack={["Python"]}
              />
            </div>
          </section>
    )
}