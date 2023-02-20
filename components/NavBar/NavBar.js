import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-scroll";

export default function NavBar() {
    return (
        <nav className={styles.nav_bar}>
          <h1 className={styles.nav_title}>Arian Sadeghi</h1>
          <div className={styles.nav_links}>
            <Link className={styles.nav_link} to="about" offset={-75} smooth={true} duration={500}>
              About
            </Link>

            <Link className={styles.nav_link} to="projects" offset={-75} smooth={true} duration={500}>
              Projects
            </Link>

            <Link className={styles.nav_link} to="experiences" offset={-200} smooth={true} duration={500}>
              Experiences
            </Link>

            <Link className={styles.nav_link} to="skills" offset={-75} smooth={true} duration={500}>
              Skills
            </Link>
          </div>
        </nav>
    )
}