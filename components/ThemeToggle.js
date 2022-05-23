import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import styles from "../styles/Main.module.css";
import { GiSun, GiMoon } from "react-icons/gi";

const ThemeDiv = styled.button`
  border: 3px solid black;
  width: 60px;
  height: 30px;
  padding: 0.25em;
  border-radius: 100px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${(p) => (p.isDark ? "rgb(77, 71, 71)" : "rgb(240, 222, 222);")};
`;

const ThemeSpan = styled.span`
  width: 25px;
  transition: 1s ease;
  height: 25px;
  border-radius: 50%;
  background: ${(p) => (p.isDark ? "rgb(240, 222, 222)" : "rgb(77, 71, 71)")};
  position: absolute;
  cursor: pointer;
  transform: ${(p) => (p.isDark ? "translateX(25px)" : "translateX(-2px);")};
`;

const ThemeToggle = ({ isDark, setIsDark }) => {
  useEffect(() => {
    if (document.body.dataset.theme === "dark") {
      document.body.dataset.theme = "light";
    } else {
      document.body.dataset.theme = "dark";
    }
  }, [isDark]);
  return (
    <div className={styles.theme_wrapper}>
      <div className={styles.lrg_screen_toggle_div}>
        <ThemeDiv isDark={isDark} onClick={() => setIsDark(!isDark)}>
          <ThemeSpan isDark={isDark} />
          <GiSun style={{ color: "yellow" }} />
          <GiMoon style={{ color: "black" }} />
        </ThemeDiv>
      </div>
      <div className={styles.mobile_toggle_div}>
        {!isDark ? (
          <GiSun onClick={() => setIsDark(!isDark)} />
        ) : (
          <GiMoon onClick={() => setIsDark(!isDark)} />
        )}
      </div>
    </div>
  );
};

export default ThemeToggle;
