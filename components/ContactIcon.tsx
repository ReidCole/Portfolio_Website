import { ElementType, ReactElement, ReactNode } from "react";
import { useTheme } from "../context/ThemeContext";
import styles from "../styles/ContactIcon.module.css";

type Props = {
  name: string;
  href: string;
  Icon: ElementType;
  className?: string;
};

const ContactIcon: React.FC<Props> = ({ name, href, Icon, className = "" }) => {
  const theme = useTheme();

  return (
    <a href={href} className={styles.anchor} target="_blank" rel="noopener noreferrer">
      <Icon className={`${theme(styles.icon, styles.dark)} ${className}`} />
      <p className={styles.iconName}>{name}</p>
    </a>
  );
};

export default ContactIcon;
