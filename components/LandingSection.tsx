import { useTheme } from "../context/ThemeContext";
import styles from "../styles/LandingSection.module.css";

const LandingSection: React.FC = () => {
  const theme = useTheme();

  return (
    <section className={theme(styles.section, styles.dark)}>
      <div className={styles.textDiv}>
        <p className={styles.nameText}>Reid Cole</p>

        <h1 className={styles.mainText}>Web Developer</h1>

        <p className={styles.subText}>I make full-stack web applications using React JS.</p>
      </div>
    </section>
  );
};

export default LandingSection;
