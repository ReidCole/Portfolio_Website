import reidsDrinksSiteImg from "../public/screenshots/reidsdrinks_screenshot.png";
import movieListMakerSiteImg from "../public/screenshots/movielistmaker_screenshot.png";

// import craLogo from "../public/logos/cra_logo.svg";
import tailwindLogo from "../public/logos/tailwindcss_logo.svg";
import tsLogo from "../public/logos/ts_logo.svg";
import nextLogo from "../public/logos/nextjs_logo.svg";
// import jsLogo from "../public/logos/js_logo.svg";
// import cssLogo from "../public/logos/css_logo.svg";
import expressLogo from "../public/logos/express_logo.png";
import mongoLogo from "../public/logos/mongodb_logo.svg";
import jwtLogo from "../public/logos/jwt_logo.svg";

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
          websiteName="Reid's Drinks - Online Shop"
          websiteUrl="https://coruscating-moxie-ffd222.netlify.app/"
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
              packageName="Tailwind CSS"
              logoSrc={tailwindLogo}
              logoClassName={packageStyles.tailwind}
              logoAltText="tailwind CSS logo"
              href="https://tailwindcss.com/"
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
              packageName="Express"
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
              packageName="JSON Web Token"
              logoSrc={jwtLogo}
              logoClassName={packageStyles.jwt}
              logoAltText="JSON web token logo"
              href="https://jwt.io/"
            />,
          ]}
        />

        {/* <ShowcaseItem
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
        /> */}
      </div>
    </section>
  );
};

export default ShowcaseSection;
