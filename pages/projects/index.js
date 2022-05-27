import React from "react";
import styles from "./Projects.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

var frontEndProjects = [
  {
    id: 1,
    name: "To-do List - LocalStorage Persistence",
    image: "/frontendsnaps/todo.png",
    link: "https://jgreen721.github.io/todo_list",
  },
  {
    id: 2,
    name: "Jobs - Filter/Search",
    image: "/frontendsnaps/jobs.png",
    link: "https://jgreen721.github.io/filtered_joblist",
  },
  {
    id: 3,
    name: "Charts - Mapping Data",
    image: "/frontendsnaps/charts.png",
    link: "https://jgreen721.github.io/activity_chart_frontendchallenge",
  },
  {
    id: 4,
    name: "Business Site UI",
    image: "/frontendsnaps/business_ui.png",
    link: "https://jgreen721.github.io/activity_chart_frontendchallenge",
  },
  {
    id: 5,
    name: "CSS Layout Site",
    image: "/frontendsnaps/csslayout.png",
    link: "https://jgreen721.github.io/activity_chart_frontendchallenge",
  },
  {
    id: 6,
    name: "Charts - Mapping Data",
    image: "/frontendsnaps/customcomps.png",
    link: "https://jgreen721.github.io/activity_chart_frontendchallenge",
  },
  {
    id: 7,
    name: "Using an API - Generate Quote",
    image: "/frontendsnaps/quote.png",
    link: "https://jgreen721.github.io/activity_chart_frontendchallenge",
  },
  // { id: 2, name: "Jobs - Filter/Search", image: "/frontendsnaps/csslayout.png" },
  // { id: 3, name: "Charts - Mapping Data", image: "/frontendsnaps/customcomps.png" },
  // {
  //   id: 1,
  //   name: "To-do List - LocalStorage Persistence",
  //   image: "/frontendsnaps/todo.png",
  // },
  // { id: 2, name: "Jobs - Filter/Search", image: "/frontendsnaps/jobs.png" },
  // { id: 3, name: "Charts - Mapping Data", image: "/frontendsnaps/charts.png" },
  // {
  //   id: 1,
  //   name: "To-do List - LocalStorage Persistence",
  //   image: "/frontendsnaps/todo.png",
  // },
  // { id: 2, name: "Jobs - Filter/Search", image: "/frontendsnaps/jobs.png" },
  // { id: 3, name: "Charts - Mapping Data", image: "/frontendsnaps/charts.png" },
  // {
  //   id: 1,
  //   name: "To-do List - LocalStorage Persistence",
  //   image: "/frontendsnaps/todo.png",
  // },
  // { id: 2, name: "Jobs - Filter/Search", image: "/frontendsnaps/jobs.png" },
  // { id: 3, name: "Charts - Mapping Data", image: "/frontendsnaps/charts.png" },
];

const scaleVariants = {
  initial: {
    scale: 0,
    transformOrigin: "center",
    height: "100%",
    width: "100%",
  },
  animate: {
    scale: 1,
    transition: { duration: 1, ease: "easeIn" },
  },
};

const growVariants = {
  initial: {
    height: "0px",
    overflow: "hidden",

    transformOrigin: "center",
  },
  animate: {
    height: "100%",
    transition: { duration: 1, ease: "easeIn", delay: 2 },
  },
};

const fadeVariants = {
  initial: {
    opacity: 0,
    // transformOrigin: "center",
  },
  animate: {
    opacity: 1,
    transition: { duration: 1, ease: "easeIn", delay: 2 },
  },
};

const Projects = (props) => {
  console.log("Data", props);
  return (
    <motion.div variants={scaleVariants} initial="initial" animate="animate">
      <h1>Projects n Snippets</h1>
      <div className={styles.frontend_row}>
        <h1>Completed FrontMentor.IO Challenges</h1>
        <div className={styles.project_content_row}>
          {frontEndProjects.map((f, idx) => (
            <div className={styles.project_card} key={idx}>
              <motion.div
                variants={fadeVariants}
                initial="initial"
                animate="animate"
              >
                <h3 className={styles.project_h3}>{f.name}</h3>
                <a
                  target="_blank"
                  href="https://jgreen721.github.io/todo_list"
                  rel="noreferrer"
                >
                  <Image
                    className={styles.project_thumbnail}
                    width="150"
                    height="150"
                    src={f.image}
                    alt="img"
                  />
                </a>
              </motion.div>
            </div>
          ))}
        </div>

        <div className={styles.git_leet_row}>
          <motion.div
            variants={growVariants}
            initial="initial"
            animate="animate"
            className={styles.git_column}
          >
            <h1>GitHub Stats:</h1>
            {props?.data && (
              <>
                <p>Handle:{props.data.login}</p>
                <p>Followers:{props.data.followers}</p>
                <p>
                  Repos:{props.data.public_repos}/ {props.data.repos_url}
                </p>
              </>
            )}
          </motion.div>
          <div className={styles.leet_column}>
            <h3>Leet Stats:</h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;

export const getServerSideProps = async () => {
  let response = await fetch("https://api.github.com/users/jgreen721");
  let data = await response.json();

  return {
    props: {
      data,
    },
  };
};
