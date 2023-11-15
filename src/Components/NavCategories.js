import styles from "./Navcategories.module.css";

const NavCategories = () => {
  return (
    <div className={styles.navCategories}>
      <ul className={styles.listCategories}>
        <a href="/">Live</a>
        <a href="/">Games</a>
        <a href="/">Natur</a>
        <a href="/">Music</a>
        <a href="/">Movies</a>
        <a href="/">All</a>
        <a href="/">Turist</a>
        <a href="/">Mix</a>
        <a href="/">Food</a>
      </ul>
    </div>
  );
};

export default NavCategories;
