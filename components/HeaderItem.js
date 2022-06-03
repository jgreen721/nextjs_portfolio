import React, { useRef } from "react";
import styles from "../pages/about/About.module.css";
import styled from "@emotion/styled";

const ColorText = styled.h4`
  color: ${(props) => props.color};
  padding: 0.5em;
  &:hover {
    background: ${(props) => props.hover};
  }
`;

const HeaderItem = ({ item, handleScrollTo, idx }) => {
  const blurbRef = useRef();
  // const showBlurb = () => {
  //   console.log("ShowBlurb");
  //   blurbRef.current.style.display = "block";
  // };

  // const closeBlurb = () => {
  //   console.log("closeBlurb");
  //   blurbRef.current.style.display = "none";
  // };
  return (
    <div
      // onMouseEnter={showBlurb}
      // onMouseLeave={closeBlurb}
      onClick={() => handleScrollTo(idx + 2)}
      className={styles.header_item}
    >
      <ColorText color={item.color} hover={item.hover}>
        {item.icon}
        {item.title}
      </ColorText>
      <div ref={blurbRef} className={styles.item_info_span}>
        {item.blurb}
      </div>
    </div>
  );
};

export default HeaderItem;
