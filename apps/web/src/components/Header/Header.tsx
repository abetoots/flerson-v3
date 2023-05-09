//Components
import Logo from "~/components/Logo/Logo";
import Button from "~/components/Button/Button";
import Link from "next/link";

//Misc
import styles from "./Header.module.scss";

//Components

const Header = ({ isEmployer }: { isEmployer?: boolean }) => {
  return (
    <header className={styles.Header}>
      <div className="mr-auto">
        <Link href="/">
          <Logo classes={{ image: styles.Header__logo || "" }} />
        </Link>
      </div>
      {isEmployer && (
        <Link href="/post-job">
          <Button classes={{ root: styles.Header__postJobButton }}>
            Post A Job
          </Button>
        </Link>
      )}
    </header>
  );
};

export default Header;
