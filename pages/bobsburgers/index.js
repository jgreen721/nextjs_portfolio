import React from "react";
import { motion } from "framer-motion";
import styles from "./Bobs.module.css";
import Link from "next/link";
import Image from "next/image";

const BobsBurgers = (props) => {
  console.log("Props", props);
  return (
    <motion.div className={styles.bobs_burgers_app}>
      <div className={styles.bobs_hero}>
        <Image
          layout="fill"
          src="/assets/bobshero.jpg"
          alt="bobs_hero"
          className={styles.bobs_hero_img}
        />
        <h1 className={styles.bobs_h1}> Bobs Burgers! 🍔 </h1>
      </div>
      <div className={styles.bobs_container}>
        {props.data
          ? props.data.map((p) => (
              <div className={styles.character_row} key={p.id}>
                <Image
                  height="50"
                  width="50"
                  src={p.image}
                  alt="img"
                  className={styles.bobs_avatar}
                />
                <h4>{p.name}</h4>
                <Link href={`/bobsburgers/${p.id}`}>
                  <h5>Get Info</h5>
                </Link>
              </div>
            ))
          : "Loading..."}
      </div>
    </motion.div>
  );
};

export default BobsBurgers;

export const getStaticProps = async () => {
  let response = await fetch(
    "https://bobsburgers-api.herokuapp.com/characters?limit=9&skip=0"
  );
  let data = await response.json();

  return {
    props: {
      status: 200,
      data,
    },
  };
};
