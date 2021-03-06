import { MailIcon } from "@heroicons/react/solid";
import {
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineMail,
  AiOutlineInstagram,
  AiOutlineGithub,
} from "react-icons/ai";
import { useTheme } from "../context/ThemeContext";
import styles from "../styles/ContactSection.module.css";
import ContactIcon from "./ContactIcon";

const ContactSection: React.FC = () => {
  const theme = useTheme();

  return (
    <section className={theme(styles.section, styles.dark)}>
      <h1 className={styles.sectionHeading}>Contact Me</h1>

      <div className={styles.contactIconList}>
        <ContactIcon
          href="mailto:reid-cole@outlook.com"
          Icon={AiOutlineMail}
          name="Email"
          className={styles.iconMail}
        />
        <ContactIcon
          href="https://www.linkedin.com/in/reid-cole/"
          Icon={AiOutlineLinkedin}
          name="LinkedIn"
        />
        <ContactIcon href="https://github.com/ReidCole" Icon={AiOutlineGithub} name="GitHub" />
      </div>
    </section>
  );
};

export default ContactSection;
