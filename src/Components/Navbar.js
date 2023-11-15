import React from "react";
import styles from "./Navbar.module.css";
import youtubelogo from "../assets/youtube.png";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logoside}>
        <div className={styles.btnLeft}>
          <button className="">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
        <img className={styles.logo} src={youtubelogo} alt="" />
        <div>
          <h1>You tube</h1>
        </div>
      </div>
      <div className={styles.searchbar}>
        <span className="material-symbols-outlined">search</span>
        <input
          className={styles.search}
          type="search"
          placeholder="Search"
          id="search"
        />
      </div>
      <div className={styles.btn}>
        <a className={styles.btnright} href="">
          Sign Up
        </a>
        <a className={styles.btnright} href="">
          Log in
        </a>
      </div>
    </div>
  );
}
