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
                    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                />
                <Experience 
                    imgSrc={"/logos/UofT.png"}
                    position={"Calculus Teaching Assistant"}
                    note={"January 2023 - Present"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                />
                <Experience 
                    imgSrc={"/logos/BGIS.jpg"}
                    position={"Quality Analyst"}
                    note={"May 2022 - August 2022"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                />
                <Experience 
                    imgSrc={"/logos/BGIS.jpg"}
                    position={"Financial Shared Services Rep."}
                    note={"June 2021 - August 2021"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                />
            </div>
        </section>
    )
}

function Experience({imgSrc, position, note, description}) {
    return (
        <div className={styles.experience}>
            <Image className={styles.image}
                src={imgSrc}
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