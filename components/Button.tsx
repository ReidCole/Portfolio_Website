import { useTheme } from "../context/ThemeContext";
import styles from "../styles/Button.module.css";

type Props = {
  children: string;
  onClick: () => void;
};

const Button: React.FC<Props> = ({ children, onClick }) => {
  const theme = useTheme();

  return (
    <button className={theme(styles.button, styles.dark)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
