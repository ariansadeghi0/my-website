import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-scroll";

export default function NavBar() {
    return (
        <nav className={styles.nav_bar}>
          <Link className={styles.nav_title} to="hero" smooth={true} duration={500}>
            Arian Sadeghi
          </Link>
          <div className={styles.nav_links}>
            <Link className={styles.nav_link} to="about" offset={-50} smooth={true} duration={500}>
              <div>About</div>
            </Link>

            <Link className={styles.nav_link} to="projects" offset={-50} smooth={true} duration={500}>
              Projects
            </Link>

            <Link className={styles.nav_link} to="experiences" offset={-175} smooth={true} duration={500}>
              Experiences
            </Link>

            <Link className={styles.nav_link} to="skills" offset={-50} smooth={true} duration={500}>
              Skills
            </Link>
          </div>
        </nav>
    )
}