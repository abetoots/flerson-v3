//Components
import Logo from "~/components/Logo/Logo";
import Button from "~/components/Button/Button";
import Link from "next/link";

//Misc
import styles from "./Header.module.scss";

//Components

const Header = () => {
  return (
    <header className={styles.Header}>
      <Link href="/">
        <Logo classes={{ image: styles.Header__logo || "" }} />
      </Link>
      <Link href="/post-job">
        <Button classes={{ root: styles.Header__postJobButton }}>
          Post A Job
        </Button>
      </Link>
    </header>
  );
};

export default Header;
