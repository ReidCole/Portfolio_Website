import { useTheme } from "../context/ThemeContext";
import styles from "../styles/CommissionsSection.module.css";
import Button from "./Button";
import CommissionLink from "./CommissionLink";

const CommissionsSection: React.FC = () => {
  const theme = useTheme();

  return (
    <section className={styles.section}>
      <h1 className={styles.sectionHeading}>Commissions</h1>

      <div className={theme(styles.list, styles.dark)}>
        <CommissionLink projectName="Potted Plant Podcast" commissionerName="Brennen S." href="#" />
        <CommissionLink projectName="CROATOAN" commissionerName="Coleton S." href="#" />
        <CommissionLink
          projectName="Personal Trainer Portfolio"
          commissionerName="Jake T."
          href="#"
        />
        <p className={styles.continuationText}>And more to come...</p>
      </div>
      <Button onClick={() => console.log("chee")}>Request A Commission</Button>
    </section>
  );
};

export default CommissionsSection;
