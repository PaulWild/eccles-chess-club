import styles from "./header.module.scss";
import Link from "next/link";
import useToggle from "../hooks/useToggle";
import logo from "../public/images/logo.png";
import Image from "next/image";

const Header = () => {
  const [isExpanded, toggleExpanded] = useToggle(false);

  return (
    <div className={styles.header}>
      <nav className={styles.navigation}>
        <Link href="/" className={styles["brand-group"]}>
          <Image src={logo} alt="" width={130} height={130}></Image>
        </Link>
        <button
          title="navigation bar control"
          className={styles.hamburger}
          onClick={toggleExpanded}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div className={styles["navigation-menu"]}>
          <ul
            className={isExpanded ? styles.expanded : ""}
            onClick={toggleExpanded}
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Membership & Results</Link>
            </li>
            <li>
              <Link href="/">Chess Congress</Link>
            </li>
            <li>
              <Link href="/">Team</Link>
            </li>
            <li>
              <Link href="/">Member&apos;s Grading</Link>
            </li>

            <li>
              <Link href="/">Contact & Join</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
