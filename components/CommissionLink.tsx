import { useTheme } from "../context/ThemeContext";
import styles from "../styles/CommissionLink.module.css";

type Props = {
  projectName: string;
  commissionerName: string;
  href: string;
};

const CommissionLink: React.FC<Props> = ({ projectName, commissionerName, href }) => {
  const theme = useTheme();

  return (
    <a
      className={theme(styles.anchor, styles.dark)}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <p className={styles.projectName}>{projectName}</p>
      <p className={styles.commissionerName}>{commissionerName}</p>
    </a>
  );
};

export default CommissionLink;
