import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles["inner-header"]}>
        <p>KobaSisauri</p>
      </div>
      <div className={styles["inner-header"]}>
        <p className={styles.p2}>Fancy Mode</p>
      </div>
      <div className={styles["inner-header"]}>
        <p className={styles.p3}>Menu</p>
      </div>
    </header>
  );
};

export default Header;
