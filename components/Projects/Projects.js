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
                name="Hello"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                imgSrc="/my-photo1.jpg"
                techStack={["Python", "CSS", "HTML", "JavaScript", "MongoDB"]}
              />
              <Project
                name="Rocket Project"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                imgSrc="/my-photo1.jpg"
                techStack={["Python", "CSS", "HTML", "JavaScript", "MongoDB", "CSS", "HTML", "JavaScript"]}
              />
              <Project
                name="Purposive"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                imgSrc="/my-photo1.jpg"
                techStack={["Python", "CSS", "HTML", "JavaScript", "MongoDB"]}
              />
            </div>
          </section>
    )
}