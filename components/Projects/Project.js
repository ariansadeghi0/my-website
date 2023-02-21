import React from "react";
import styles from "./Project.module.css";
import Image from "next/image";

export default function Project({name, url, description, imgSrc, techStack}) {

    const techElements = techStack.map(tech => {
        return (
            <div className={styles.tech_element}>
                <Image className={styles.tech_logo} 
                    src={`/logos/${tech}.png`}
                    quality={100}
                    width={50}
                    height={50}
                />
                <span className={styles.tech_name}>{tech}</span>
            </div>
        )
    });

    return (
        <div className={styles.project}>
            <div>
                <Image className={styles.image}
                    src={imgSrc}
                    alt="An image of the project"
                    quality={100}
                    width={700}
                    height={500}
                />
                <h3 className={styles.name} onClick={()=>url&&open(url)}>{name}</h3>
            </div>
            <div className={styles.description}>{description}</div>
            <div className={styles.techstack}>{techElements}</div>
        </div>
    )
}