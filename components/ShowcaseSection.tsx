import reidsDrinksSiteImg from "../public/screenshots/reidsdrinks_screenshot.jpg";
import movieListMakerSiteImg from "../public/screenshots/movielistmaker_screenshot.jpg";
import simpleNotesSiteImg from "../public/screenshots/simplenotes_screenshot.jpg";

// import craLogo from "../public/logos/cra_logo.svg";
import tailwindLogo from "../public/logos/tailwindcss_logo.svg";
import tsLogo from "../public/logos/ts_logo.svg";
import nextLogo from "../public/logos/nextjs_logo.svg";
// import jsLogo from "../public/logos/js_logo.svg";
import cssLogo from "../public/logos/css_logo.svg";
import expressLogo from "../public/logos/express_logo.png";
import mongoLogo from "../public/logos/mongodb_logo.svg";
// import jwtLogo from "../public/logos/jwt_logo.svg";
import reduxLogo from "../public/logos/redux_logo.svg";
import cypressLogo from "../public/logos/cypress_logo2.svg";

import ShowcaseItem from "./ShowcaseItem";
import PackageLink from "./PackageLink";
import showcaseStyles from "../styles/ShowcaseSection.module.css";
import packageStyles from "../styles/PackageLink.module.css";
import { useTheme } from "../context/ThemeContext";

const ShowcaseSection: React.FC = () => {
  const theme = useTheme();

  return (
    <section className={theme(showcaseStyles.section, showcaseStyles.dark)}>
      <h1 className={showcaseStyles.sectionHeading}>Showcase</h1>
      <p className={theme(showcaseStyles.sectionSubtext, showcaseStyles.dark)}>More to come...</p>

      <div className={showcaseStyles.showcaseItemList}>
        <ShowcaseItem
          websiteName="Reid's Drinks"
          websiteUrl="https://reidsdrinks.netlify.app/"
          siteImgAltText="reid's drinks online shop website"
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
              packageName="Cypress"
              logoSrc={cypressLogo}
              logoClassName={packageStyles.cypress}
              logoAltText="cypress logo"
              href="https://www.cypress.io/"
            />,
          ]}
        />

        <ShowcaseItem
          websiteName="Movie List Maker"
          websiteUrl="https://client.movielistmakerserver.xyz/"
          siteImgAltText="movie list maker website"
          siteImgSrc={movieListMakerSiteImg}
          packages={[
            <PackageLink
              key="0"
              packageName="Express JS"
              logoSrc={expressLogo}
              logoClassName={packageStyles.express}
              logoAltText="express JS logo"
              href="https://expressjs.com/"
            />,
            <PackageLink
              key="1"
              packageName="MongoDB"
              logoSrc={mongoLogo}
              logoClassName={packageStyles.mongoDB}
              logoAltText="mongo DB logo"
              href="https://www.mongodb.com/"
            />,
            <PackageLink
              key="2"
              packageName="CSS"
              logoSrc={cssLogo}
              logoClassName={packageStyles.css}
              logoAltText="CSS logo"
              href="https://www.w3schools.com/css/"
            />,
          ]}
        />

        <ShowcaseItem
          websiteName="Simple Notes"
          websiteUrl="https://simplenotes-rc.netlify.app/"
          siteImgAltText="simple notes website"
          siteImgSrc={simpleNotesSiteImg}
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
              packageName="Redux"
              logoSrc={reduxLogo}
              logoClassName={packageStyles.redux}
              logoAltText="redux logo"
              href="https://redux.js.org/"
            />,
            <PackageLink
              key="2"
              packageName="Tailwind CSS"
              logoSrc={tailwindLogo}
              logoClassName={packageStyles.css}
              logoAltText="tailwind css logo"
              href="https://tailwindcss.com/"
            />,
          ]}
        />
      </div>
    </section>
  );
};

export default ShowcaseSection;
