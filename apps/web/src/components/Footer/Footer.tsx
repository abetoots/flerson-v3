import styles from "./Footer.module.css";

const Footer = () => (
  <footer className={styles.Footer}>
    <div className={styles.Footer__attribution}>
      Icons made by{" "}
      <a
        href="https://www.flaticon.com/authors/monkik"
        title="author - monkik"
        rel="noopener noreferrer nofollow"
        target="_blank"
      >
        monkik
      </a>{" "}
      and{" "}
      <a
        href="https://www.flaticon.com/authors/ultimatearm"
        rel="noopener noreferrer nofollow"
        target="_blank"
        title="author - ultimatearm"
      >
        ultimatearm
      </a>{" "}
      from{" "}
      <a
        href="https://www.flaticon.com/"
        title="Flaticon"
        rel="noopener noreferrer nofollow"
        target="_blank"
      >
        www.flaticon.com
      </a>
    </div>{" "}
  </footer>
);

export default Footer;
