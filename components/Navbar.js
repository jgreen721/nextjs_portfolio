import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Main.module.css";

const Navbar = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <nav>
      <div className={styles.nav_body}>
        <div className={styles.nav_header}>
          <div className={styles.nav_header_text}>
            <h5>Justin </h5>
            <h5>
              <span className={styles.dash}>-</span> Web{" "}
            </h5>
            <h5> Developer </h5>
          </div>
          <div className={styles.profile_img_wrapper}>
            <Image
              className={styles.profile_img}
              src="/assets/mypic.jpeg"
              alt="img"
              height="65px"
              width="65px"
            />
          </div>
        </div>
        <ul className={styles.nav_links}>
          <li className={styles.nav_item}>
            <Link href="/about">About</Link>
            <div className={styles.underline}></div>
          </li>
          <li className={styles.nav_item}>
            <Link href="/about">Projects</Link>
            <div className={styles.underline}></div>
          </li>
          <li className={styles.nav_item_plus}>+</li>
          <ul className={styles.nav_option_links}>
            <li className={styles.nav_item}>
              <Link href="/bobsburgers">Bobs Burgers</Link>
              <div className={styles.underline}></div>
            </li>
            <li className={styles.nav_item}>
              <Link href="/weedshop">Weed-Shop</Link>
              <div className={styles.underline}></div>
            </li>
          </ul>
        </ul>
        <div className={styles.toggle_wrapper}>
          <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
          {/* <code>{isDark ? "Dark-Mode" : "Light-Mode"}</code> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
