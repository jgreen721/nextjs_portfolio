import React from "react";
// import Image from "next/image";
import { HeaderItem } from "./components";
import { motion } from "framer-motion";
import styles from "./About.module.css";
import { FaReadme, FaCompress, FaBox, FaBoxes, FaTag } from "react-icons/fa";

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

var headerItems = [
  {
    title: "About Me",
    icon: <FaReadme />,
    blurb: `Loves programming n climbing. Lousy enough at both can allocate almost
  all memory. Enjoys Bobs Burgers n Better Call Saul while inbetween
  blocking I/O`,
    color: "tan",
    hover: "rgb(248, 212, 165)",
  },
  {
    title: "Explore",
    icon: <FaCompress />,
    blurb: "Grew up outside of Boston, currently lives in Los Angeles",
    color: "red",
    hover: "rgb(243, 107, 107);",
  },
  {
    title: "Dependencies",
    icon: <FaBox />,
    blurb:
      "Programming, climbing, pizza, a new Zelda every 4-5 yrs... Even after I'm gone.",
    color: "violet",
    hover: "rgb(173, 23, 173);",
  },
  {
    title: "Dependents",
    icon: <FaBoxes />,
    blurb: "Those that know what's best for them",
    color: "purple",
    hover: "rgb(240, 83, 240);",
  },
  {
    title: "(Too🤪) Many Versions",
    icon: <FaTag />,
    blurb: "Alll version, still in development!",
    color: "rgb(0, 128, 111);",
    hover: "rgb(74, 182, 167);",
  },
];

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
          {headerItems.map((h) => (
            <HeaderItem key={h.id} item={h} />
          ))}
          {/* <div className={styles.header_item}>
            <h4 className={styles.tan}>
              <FaReadme />
              AboutMe
            </h4>
            <span className={styles.info_span}>
              {" "}
              Loves programming n climbing. Lousy enough at both can allocate
              almost all memory. Enjoys Bobs Burgers n Better Call Saul while
              inbetween blocking I/O
            </span>
          </div>
          <h4 className={styles.red}>
            <FaCompress />
            Explore
          </h4>
          <h4 className={styles.violet}>
            <FaBox />5 Dependencies
          </h4> */}
          {/* <h4 className={styles.purple}>
            <FaBoxes />
            Dependents
          </h4>
          <h4 className={styles.green_blue}>
            {" "}
            <FaTag />
            (Too) Many Versions
          </h4> */}
        </div>
        <div className={styles.about_header_middle}>
          <h1 className={styles.about_h1}>justin</h1>
          <p>
            Fast, unopinionated, minimalist web developer skilled in
            <span className={styles.green}> node</span>
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
                <span className={styles.purple}>require</span>
                {`("justin")`}
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
              <h5>
                {`works_with:['Javascript','Node.Js','React/NEXT','Mongoose, 'MySQL/Postgres']`}
              </h5>
              <h5>interested_in:*</h5>
              <h5>{`}`}</h5>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
