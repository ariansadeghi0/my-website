import React from "react";
import styles from "./About.module.css";
import Image from "next/image";

export default function About() {
    return (
        <section className={styles.about} name="about">
            <div className={styles.outer_container}>
                <h1 className={styles.title}>About Me</h1>
                <div className={styles.inner_container}>
                    <Image className={styles.image}
                        src="/my-photo1.jpg"
                        alt="A photo of Arian"
                        quality={100}
                        width={314}
                        height={314}
                    />
                    <div className={styles.paragraphs}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}