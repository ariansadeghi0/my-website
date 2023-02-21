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
                description="Created a personal website to showcase my projects, experience, and skills, and to also exercise my web development skills using CSS, JavaScript, React, NextJS, etc."
                imgSrc="/project-photos/personal-website.jpg"
                techStack={["HTML", "CSS", "JavaScript", "React", "NextJS", "Figma"]}
              />
              <Project
                name="Purposive"
                description="Decided to explore the NextJS framework, MongoDB, and Auth0 to create a React based web application for task and schedule management that facilitates user authentication, CRUD database operations, etc."
                imgSrc="/project-photos/purposive.jpg"
                techStack={["HTML", "CSS", "JavaScript", "React", "NextJS", "MongoDB", "Figma"]}
              />
              <Project
                name="Company Management System"
                description="Utilized Git, agile methodologies, and UML diagrams in a group of 4 to create a GUI-based Java application that implements multiple design patterns and adheres to SOLID object-oriented design principles."
                imgSrc="/project-photos/company-management-system.jpg"
                techStack={["Java", "JavaFX", "Git"]}
              />
              <Project
                name="Rocket Project"
                description="Explored reinforcement learning and adopted an actor-critic model to train an AI to control, fly, and land rockets in a 2D simulation program, using Unity and the ML-Agents framework."
                imgSrc="/project-photos/rocket-project.jpg"
                techStack={["C-sharp", "Unity"]}
              />
              <Project
                name="One Dash"
                description="Leveraged Unity to create a game for the DeerHacks 2022 hackathon as a sole developer, and ranked first among projects created by teams of 1 and 2 developers."
                imgSrc="/project-photos/one-dash.jpg"
                techStack={["C-sharp", "Unity"]}
              />
              <Project
                name="Huffman Compression"
                description="Implemented the Huffman Coding algorithm, enabling lossless data compression of various file formats by as much as 70%. Wrote various unit tests to ensure the correctness of the algorithm."
                imgSrc="/project-photos/huffman-compression.png"
                techStack={["Python"]}
              />
            </div>
          </section>
    )
}