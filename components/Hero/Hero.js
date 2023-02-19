import styles from './Hero.module.css';
import Image from 'next/image';
import GlitchingText from '../GlitchingText/GlitchingText';

export default function Hero() {
    return (
        <div className={styles.hero}>
          <div className={styles.text_lines}>
            <h1 className={styles.text_line}>Hey there! My name is</h1>
            <h1 className={styles.text_line}>Arian</h1>
            <GlitchingText
                staticText={"& "}
                strings={["I am a programmer💻", "I enjoy problem-solving", "I love learning!📚", "I am a leader👥", "I am a teacher", "I enjoy photography📷", "I love nature🏕️"]}
            />
          </div>
          <Image className={styles.hero_image}
            src="/my-photo.png"
            alt="A photo of Arian"
            quality={100}
            width={2373}
            height={2095}
          />
        </div>
    )
}