import { useContext } from "react";
import { ThemeContext, useTheme } from "../context/ThemeContext";
import styles from "../styles/Header.module.css";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import ToggleSwitch from "./ToggleSwtich";

const Header: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const theme = useTheme();

  function toggleDarkMode() {
    themeContext?.setDarkMode(!themeContext.darkMode);
  }

  return (
    <header className={theme(styles.header, styles.dark)}>
      {themeContext !== null && (
        <div className={styles.darkmodeSwitchDiv}>
          {themeContext.darkMode ? (
            <MoonIcon className={styles.icon} />
          ) : (
            <SunIcon className={styles.icon} />
          )}
          <ToggleSwitch checked={!themeContext.darkMode} onChecked={() => toggleDarkMode()} />
        </div>
      )}
    </header>
  );
};

export default Header;
