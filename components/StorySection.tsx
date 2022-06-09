import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import styles from "../styles/StorySection.module.css";

const StorySection: React.FC = () => {
  const theme = useTheme();
  const [timeTaught, setTimeTaught] = useState<string>("");

  useEffect(() => {
    dayjs.extend(relativeTime);
    const startDate = dayjs(1627833600000);
    const months = dayjs().diff(startDate, "months");
    const days = dayjs().diff(startDate.add(months, "months"), "days");
    setTimeTaught(`${months} months and ${days} days`);
  }, []);

  return (
    <section className={theme(styles.section, styles.dark)}>
      <div>
        <h2 className={styles.heading}>My Story</h2>
        <p>
          I&apos;ve been into technology, especially software, ever since I was a little kid. I
          remember trying to jailbreak several devices of mine back then just because I thought it
          was so cool that you could customize devices beyond what was originally intended. I also
          spent much of my time using sites like YouTube and Facebook, and I was always curious
          about how they worked behind the scenes. When it came time for me to choose a career path,
          coding seemed only natural for me, since it follows that curiosity for software I&apos;ve
          always had. Now we are here, where I can create my own software through code. I get to
          make cool web apps that can be useful tools in solving problems. If I ever need somewhere
          to write notes and save them in the cloud, I can make it. If my friends ever want a
          personalized site for us to chat together, I can make it. If you want a website, I can
          make it. 😸✌️
        </p>
      </div>
      <div>
        <h2 className={styles.heading}>Experience</h2>
        <p className={styles.mb}>
          I am a fully self-taught web developer, mainly focusing on React JS and the front-end
          development of websites, although I also have some experience with back-end server
          development.{" "}
          {timeTaught.length > 0
            ? `I have been teaching myself for ${timeTaught} (updates on page load).`
            : ""}
        </p>
        <p>Main technologies I use</p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript & TypeScript</li>
          <li>Next JS</li>
          <li>Tailwind CSS</li>
          <li>Git & GitHub</li>
          <li>Cypress (for testing)</li>
        </ul>
        <p>Other things I use sometimes</p>
        <ul>
          <li>Express JS</li>
          <li>MongoDB</li>
          <li>Google Firebase</li>
          <li>Amazon Web Services</li>
        </ul>
      </div>
    </section>
  );
};

export default StorySection;
