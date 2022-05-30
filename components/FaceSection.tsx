import Image from "next/image";
import { useTheme } from "../context/ThemeContext";
import meImg from "../public/me.jpg";
import unloadedImg from "../public/unloaded-image.png";
import styles from "../styles/FaceSection.module.css";

const FaceSection: React.FC = () => {
  const theme = useTheme();

  return (
    <section className={theme(styles.section, styles.dark)}>
      <div className={styles.headingContainer}>
        <div className={styles.faceImgContainer}>
          <Image
            src={meImg}
            blurDataURL={unloadedImg.src}
            placeholder="blur"
            alt="my face"
            layout="fill"
          />
        </div>
        <h1 className={styles.title}>About Me</h1>
      </div>
    </section>
  );
};

export default FaceSection;
