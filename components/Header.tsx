import { useContext } from "react";
import { ThemeContext, useTheme } from "../context/ThemeContext";
import styles from "../styles/Header.module.css";
import { ArrowLeftIcon, MoonIcon, SunIcon } from "@heroicons/react/solid";
import ToggleSwitch from "./ToggleSwtich";
import Link from "next/link";
import Image from "next/image";
import meImg from "../public/me.jpg";
import unloadedImg from "../public/unloaded-image.png";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const theme = useTheme();
  const router = useRouter();

  function toggleDarkMode() {
    themeContext?.setDarkMode(!themeContext.darkMode);
  }
  return (
    <header className={theme(styles.header, styles.dark)}>
      {themeContext !== null && (
        <div className={styles.darkmodeSwitchDiv}>
          {themeContext.darkMode ? (
            <MoonIcon className={styles.themeIcon} />
          ) : (
            <SunIcon className={styles.themeIcon} />
          )}
          <ToggleSwitch checked={!themeContext.darkMode} onChecked={() => toggleDarkMode()} />
        </div>
      )}
      {router.pathname === "/" ? (
        <Link href="/about" passHref>
          <a className={styles.aboutMeLink}>
            <div className={styles.meImgContainer}>
              <Image
                src={meImg}
                alt="my face"
                layout="fill"
                blurDataURL={unloadedImg.src}
                placeholder="blur"
              />
            </div>
            About Me
          </a>
        </Link>
      ) : (
        <Link href="/" passHref>
          <a className={styles.homeLink}>
            <ArrowLeftIcon className={styles.backIcon} />
            Home
          </a>
        </Link>
      )}
    </header>
  );
};

export default Header;
