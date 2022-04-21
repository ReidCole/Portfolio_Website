import Image from "next/image";
import { ReactNode } from "react";
import { useTheme } from "../context/ThemeContext";
import styles from "../styles/ShowcaseSection.module.css";

type Props = {
  websiteName: string;
  websiteUrl: string;
  siteImgSrc: any;
  siteImgAltText: string;
  packages: ReactNode[];
};

const ShowcaseItem: React.FC<Props> = ({
  websiteName,
  websiteUrl,
  siteImgSrc,
  siteImgAltText,
  packages,
}) => {
  const theme = useTheme();

  return (
    <div className={styles.showcaseItem}>
      <a
        className={styles.showcaseItemAnchor}
        href={websiteUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={styles.showcaseItemHeading}>{websiteName}</h2>
        <div className={styles.showcaseItemImgContainer}>
          <Image
            className={theme(styles.showcaseItemImg, styles.dark)}
            src={siteImgSrc}
            width={1920}
            height={1080}
            alt={siteImgAltText}
            style={{ overflow: "visible" }}
          />
        </div>
      </a>
      <p className={theme(styles.subText, styles.dark)}>Made with</p>
      <div className={styles.packageList}>{packages.map((pkg) => pkg)}</div>
    </div>
  );
};

export default ShowcaseItem;