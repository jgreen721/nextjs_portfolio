import React from "react";
// import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./About.module.css";

const slideVariant = {
  initial: {
    translateX: "-100%",
  },
  animate: {
    translateX: "0%",
    transition: {
      ease: "easeIn",
      duration: 1,
    },
  },
};

const About = () => {
  return (
    <motion.div
      variants={slideVariant}
      initial="initial"
      animate="animate"
      className={styles.about_page}
    >
      <div className={styles.about_header}>
        <div className={styles.about_top_flex_start}>
          <h5 className={styles.bold}>
            justin <span className={styles.description_box}>DEV</span>
          </h5>
          <div className={styles.top_meta}>
            <h5>4.18.1</h5>
            <h5 className={styles.dot}>*</h5>
            <h5 className={styles.green}>Public </h5>
            <h5 className={styles.dot}>*</h5>
            <h5 className={styles.courier_new}>Published 2 days ago</h5>
          </div>
        </div>
        <div className={styles.about_header_text_center_div}>
          <h4 className={styles.tan}>ReadMe</h4>
          <h4 className={styles.red}>Explore</h4>
          <h4 className={styles.violet}>5 Dependencies</h4>
          <h4 className={styles.purple}>Dependents</h4>
          <h4 className={styles.green_blue}> (Too) Many Versions</h4>
        </div>
        <div className={styles.about_header_middle}>
          <h1 className={styles.about_h1}>justin</h1>
          <p>
            Fast, unopinionated, minimalist web developer skilled in
            <span className={styles.red}>node</span>
          </p>
          <div className={styles.about_header_bottom_flex}>
            <div className={styles.tag_divs}>
              <span className={styles.gray_tag}>npm</span>
              <span className={styles.blue_tag}>v7.21.81</span>
            </div>
            <div className={styles.tag_divs}>
              <span className={styles.gray_tag}>install size</span>
              <span className={styles.blue_tag}>1.92 MB</span>
            </div>
            <div className={styles.tag_divs}>
              <span className={styles.gray_tag}>download</span>
              <span className={styles.blue_tag}>98.1M/month</span>
            </div>
          </div>
        </div>
        <div className={styles.about_body}>
          <div className={styles.about_body_content}>
            <div className={styles.courier_code}>
              <h5>
                <span className={styles.red}>const</span> justin =
                <span className={styles.purple}>require</span>("justin")
              </h5>
              <h5>
                <span className={styles.red}>const</span> dev = justin()
              </h5>
            </div>

            <h4 className={styles.title_h4}>Learn About Dev</h4>
            <h5 className={styles.doc_h5}> $ dev.about()</h5>

            <div className={styles.courier_code}>
              <h5>
                <span className={styles.red}>const</span> developerProfile= dev.
                <span className={styles.purple}>about()</span>
              </h5>
              <h5 className={styles.h5_comment}>
                {`/* -- Shows about-dev properties`}
              </h5>
              <h5>{`{`}</h5>
              <h5>name:Justin Green,</h5>
              <h5> age:40,</h5>
              <h5>location:Los Angeles,</h5>
              <h5>created_at:7/21/81</h5>
              <h5>{`}`}</h5>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
