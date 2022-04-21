import footerStyles from "../styles/Footer.module.css";
import packageStyles from "../styles/PackageLink.module.css";
import PackageLink from "./PackageLink";
import { useTheme } from "../context/ThemeContext";

import tsLogo from "../public/logos/ts_logo.svg";
import nextLogo from "../public/logos/nextjs_logo.svg";
import cssLogo from "../public/logos/css_logo.svg";
import heroiconsLogo from "../public/logos/heroicons_logo.svg";
import antDesignLogo from "../public/logos/antdesign_logo.svg";

const Footer: React.FC = () => {
  const theme = useTheme();

  return (
    <footer className={theme(footerStyles.footer, footerStyles.dark)}>
      <p className={theme(footerStyles.text, footerStyles.dark)}>
        This site was made with the following services.
      </p>
      <div className={footerStyles.creditsDiv}>
        <PackageLink
          key="0"
          packageName="Next JS"
          logoSrc={nextLogo}
          logoClassName={packageStyles.next}
          logoAltText="next js logo"
          href="https://nextjs.org/"
        />
        <PackageLink
          key="1"
          packageName="TypeScript"
          logoSrc={tsLogo}
          logoClassName={packageStyles.ts}
          logoAltText="typescript logo"
          href="https://www.typescriptlang.org/"
        />
        <PackageLink
          key="2"
          packageName="CSS"
          logoSrc={cssLogo}
          logoClassName={packageStyles.css}
          logoAltText="CSS logo"
          href="https://www.w3.org/Style/CSS/Overview.en.html"
        />
        <PackageLink
          key="3"
          packageName="Heroicons"
          logoSrc={heroiconsLogo}
          logoClassName={packageStyles.heroicons}
          logoAltText="hero icons logo"
          href="https://heroicons.com/"
        />
        <PackageLink
          key="4"
          packageName="Ant Design Icons"
          logoSrc={antDesignLogo}
          logoClassName={packageStyles.antDesign}
          logoAltText="ant design logo"
          href="https://ant.design/components/icon/"
        />
      </div>

      <div className={footerStyles.copyrightDiv}>
        <p className={footerStyles.text}>&copy; Reid Cole 2022</p>
        <p className={footerStyles.text}>
          Any 3rd-party services or products referenced on this website are not owned by me.
          <br />
          All services listed provide a link to the original source.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
