import React from "react";
import styles from "./Experiences.module.css";
import Image from "next/image";

export default function Experiences() {
    return (
        <section className={styles.section}>
            <h1 className={styles.title}>Experience</h1>
            <div className={styles.experiences}>
                <Experience 
                    imgSrc={"/LongRoad.png"}
                    position={"A member of your team😄"}
                    note={"Summer 2023??!"}
                    description={"Looking for a dedicated person with a strong passion for technology to join your team?! Well... look no further, you're at the right place. Get in touch!"}
                />
                <Experience 
                    imgSrc={"/logos/UofT.png"}
                    position={"Calculus Teaching Assistant"}
                    note={"January 2023 - Present"}
                    description={"Responsible for holding weekly tutorials teaching Integral Calculus to about 70 students, hosting office hours, marking course materials, etc."}
                />
                <Experience 
                    imgSrc={"/logos/BGIS.jpg"}
                    position={"Quality Analyst"}
                    note={"May 2022 - August 2022"}
                    description={"Responsible for auditing, managing, and improving the data within various systems, the transaction of data between different systems and departments, improving the quality and speed of processes, etc."}
                />
                <Experience 
                    imgSrc={"/logos/BGIS.jpg"}
                    position={"Financial Shared Services Rep."}
                    note={"June 2021 - August 2021"}
                    description={"Responsible for working with various stakeholders and systems to review, investigate, and accurately process hundreds of transactions and invoices on a daily basis."}
                />
            </div>
        </section>
    )
}

function Experience({imgSrc, position, note, description}) {
    return (
        <div className={styles.experience} name="experiences">
            <Image className={styles.image}
                src={imgSrc}
                alt="An image for the experience."
                quality={100}
                width={300}
                height={200}
            />
            <div>
                <span className={styles.position}>{position}</span>
                <h3 className={styles.note}>{note}</h3>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    )
}