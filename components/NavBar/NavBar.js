import React from "react";
import styles from "./NavBar.module.css";

export default function NavBar() {
    return (
        <nav className={styles.nav_bar}>
          <h1 className={styles.nav_title}>Arian Sadeghi</h1>
          <div className={styles.nav_links}>
            <button className={styles.nav_link}>About</button>
            <button className={styles.nav_link}>Projects</button>
            <button className={styles.nav_link}>Experience</button>
            <button className={styles.nav_link}>Skills</button>
          </div>
        </nav>
    )
}