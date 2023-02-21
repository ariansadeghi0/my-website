import React from "react";
import styles from "./ResumeButton.module.css";

export default function ResumeButton() {
    return (
        <button className={styles.resume_button} onClick={()=>open("/Resume - Arian Sadeghi.pdf")}>
            View Resume
        </button>
    )
}