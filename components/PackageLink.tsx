import Image from "next/image";
import { useTheme } from "../context/ThemeContext";
import styles from "../styles/PackageLink.module.css";

type Props = {
  packageName: string;
  logoSrc: any;
  logoAltText: string;
  logoClassName: string;
  href: string;
};

const PackageLink: React.FC<Props> = ({
  packageName,
  logoSrc,
  logoAltText,
  logoClassName,
  href,
}) => {
  const theme = useTheme();
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={theme(styles.package, styles.dark)}
    >
      <div className={theme(`${styles.packageLogo} ${logoClassName}`, styles.dark)}>
        <Image src={logoSrc} width={256} height={256} alt={logoAltText} />
      </div>
      {packageName}
    </a>
  );
};

export default PackageLink;
