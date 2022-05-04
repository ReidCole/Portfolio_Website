import amazonSiteImg from "../public/screenshots/amazon_screenshot.png";
import evernoteSiteImg from "../public/screenshots/evernote_screenshot.png";
import reidsDrinksSiteImg from "../public/screenshots/reidsdrinks_screenshot.png";

import craLogo from "../public/logos/cra_logo.svg";
import tailwindLogo from "../public/logos/tailwindcss_logo.svg";
import tsLogo from "../public/logos/ts_logo.svg";
import nextLogo from "../public/logos/nextjs_logo.svg";
import jsLogo from "../public/logos/js_logo.svg";
import cssLogo from "../public/logos/css_logo.svg";

import ShowcaseItem from "./ShowcaseItem";
import PackageLink from "./PackageLink";
import showcaseStyles from "../styles/ShowcaseSection.module.css";
import packageStyles from "../styles/PackageLink.module.css";
import { useTheme } from "../context/ThemeContext";

const ShowcaseSection: React.FC = () => {
  const theme = useTheme();

  return (
    <section className={theme(showcaseStyles.section, showcaseStyles.dark)}>
      <h1 className={showcaseStyles.sectionHeading}>My Samples</h1>

      <div className={showcaseStyles.showcaseItemList}>
        <ShowcaseItem
          websiteName="Online Shop"
          websiteUrl="https://coruscating-moxie-ffd222.netlify.app/"
          siteImgAltText="online shop website"
          siteImgSrc={reidsDrinksSiteImg}
          packages={[
            <PackageLink
              key="0"
              packageName="Next JS"
              logoSrc={nextLogo}
              logoClassName={packageStyles.next}
              logoAltText="next js logo"
              href="https://nextjs.org/"
            />,
            <PackageLink
              key="1"
              packageName="TypeScript"
              logoSrc={tsLogo}
              logoClassName={packageStyles.ts}
              logoAltText="typescript logo"
              href="https://www.typescriptlang.org/"
            />,
            <PackageLink
              key="2"
              packageName="Tailwind CSS"
              logoSrc={tailwindLogo}
              logoClassName={packageStyles.tailwind}
              logoAltText="tailwind CSS logo"
              href="https://tailwindcss.com/"
            />,
          ]}
        />

        <ShowcaseItem
          websiteName="Amazon (temp)"
          websiteUrl="https://www.amazon.com"
          siteImgAltText="amazon website"
          siteImgSrc={amazonSiteImg}
          packages={[
            <PackageLink
              key="0"
              packageName="Create React App"
              logoSrc={craLogo}
              logoClassName={packageStyles.cra}
              logoAltText="create react app logo"
              href="https://create-react-app.dev/"
            />,
            <PackageLink
              key="1"
              packageName="TypeScript"
              logoSrc={tsLogo}
              logoClassName={packageStyles.ts}
              logoAltText="typescript logo"
              href="https://www.typescriptlang.org/"
            />,
            <PackageLink
              key="2"
              packageName="Tailwind CSS"
              logoSrc={tailwindLogo}
              logoClassName={packageStyles.tailwind}
              logoAltText="tailwind CSS logo"
              href="https://tailwindcss.com/"
            />,
          ]}
        />

        <ShowcaseItem
          websiteName="Evernote (temp)"
          websiteUrl="https://www.evernote.com"
          siteImgAltText="evernote website"
          siteImgSrc={evernoteSiteImg}
          packages={[
            <PackageLink
              key="0"
              packageName="Next JS"
              logoSrc={nextLogo}
              logoClassName={packageStyles.next}
              logoAltText="next js logo"
              href="https://nextjs.org/"
            />,
            <PackageLink
              key="1"
              packageName="JavaScript"
              logoSrc={jsLogo}
              logoClassName={packageStyles.js}
              logoAltText="javascript logo"
              href="https://www.javascript.com/"
            />,
            <PackageLink
              key="2"
              packageName="CSS"
              logoSrc={cssLogo}
              logoClassName={packageStyles.css}
              logoAltText="CSS logo"
              href="https://www.w3.org/Style/CSS/Overview.en.html"
            />,
          ]}
        />
      </div>
    </section>
  );
};

export default ShowcaseSection;
