import React from "react";
import styles from "./About.module.css";
import Image from "next/image";
import ResumeButton from "../ResumeButton/ResumeButton";

export default function About() {
    return (
        <section className={styles.about} name="about">
            <div className={styles.outer_container}>
                <h1 className={styles.title}>About Me</h1>
                <div className={styles.inner_container}>
                    <Image className={styles.image}
                        src="/my-photo1.png"
                        alt="A photo of Arian"
                        quality={100}
                        width={314}
                        height={314}
                    />
                    <div className={styles.paragraphs}>
                        <p>
                            Hey, glad to have you here! My name's Arian, and I'm a Computer Science student at the University of Toronto. From early on in my childhood and to this day, I've always had a passion for creating things. While I've moved on from creating lego structures, I now execise my passion by creating software and expanding my knowledge in the vast and growing domain of software development.
                        </p>
                        <p>
                            Through various projects and my studies, I've become acquainted with fundamentals such as software design, OOP, programming, algorithms and data structures, and have also gained valuable experience with application and web development.
                        </p>
                        <p>
                            Currently, I'm a Teaching Assistant at UofT, responsible for spreading the wisdom of Integral Calculus. I've also completed two summer internships, equipping me with professional experience and a variety of valuable skills.
                        </p>
                        <p>
                            I'm currently seeking internships for Summer 2023 and would be happy to explore exciting opportunities! You can view my projects, experiences, skills, resume, and contacts below!
                        </p>
                    </div>
                </div>
                <h2>Check out my Resume!</h2>
                <br/>
                <ResumeButton/>
            </div>
        </section>
    )
}