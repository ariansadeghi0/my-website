import React from "react";
import styles from "./Skills.module.css";
import Image from "next/image";

export default function Skills() {
    return (
        <section className={styles.section} name="skills">
            <h1 className={styles.title}>Skills</h1>
            <h3 className={styles.note}>Here are some of my skills and the technologies I have experience with</h3>
            <div className={styles.subsections}>
                <div>
                    <h2>Languages:</h2>
                    <div className={styles.skills}>
                        <Skill name={"Python"}/>
                        <Skill name={"Java"}/>
                        <Skill name={"C"}/>
                        <Skill name={"Assembly (RISC-V)"} hasImage={false}/>
                        <Skill name={"JavaScript"}/>
                        <Skill name={"HTML"}/>
                        <Skill name={"CSS"}/>
                        <Skill name={"C#"} imgSrc={"/logos/C-sharp.png"}/>
                        <Skill name={"SQL"}/>
                    </div>
                </div>
                <div>
                    <h2>Tehnologies / Frameworks:</h2>
                    <div className={styles.skills}>
                        <Skill name={"React"}/>
                        <Skill name={"NextJS"}/>
                        <Skill name={"MongoDB"}/>
                        <Skill name={"Unity"}/>
                        <Skill name={"JavaFX"}/>
                    </div>
                </div>
                <div>
                    <h2>Other:</h2>
                    <div className={styles.skills}>
                        <Skill name={"Git"}/>
                        <Skill name={"MySQL"}/>
                        <Skill name={"Figma"}/>
                        <Skill name={"MS Office (Excel, Word, etc.)"} imgSrc={"/logos/Office.png"}/>
                        <Skill name={"Google Apps (Docs, Sheets, etc.)"} hasImage={false}/>
                        
                    </div>
                </div>
                <div>
                    <h2>Behavioural:</h2>
                    <div className={styles.skills}>
                        <Skill name={"Communication"} hasImage={false}/>
                        <Skill name={"Collaboration"} hasImage={false}/>
                        <Skill name={"Problem-Solving"} hasImage={false}/>
                        <Skill name={"Organization & Prioritization"} hasImage={false}/>
                        <Skill name={"Time Management"} hasImage={false}/>
                        <Skill name={"Leadership"} hasImage={false}/>
                        <Skill name={"Creativity"} hasImage={false}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

function Skill({name, imgSrc, hasImage}) {
    let includeImage = true;
    if (hasImage === false) includeImage = false;

    return (
        <div className={styles.skill}>
            {includeImage && 
                <Image className={styles.skill_logo} 
                src={imgSrc ? imgSrc : `/logos/${name}.png`}
                alt="An image corresponding to the skill."
                quality={100}
                width={50}
                height={50}
                />
            }
            <span className={styles.skill_name}>{name}</span>
        </div>
    )
}