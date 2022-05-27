import React from "react";

const BobsBurgers = (props) => {
  console.log("Props", props);
  return <div>Bobs Burgers! 🍔</div>;
};

export default BobsBurgers;

export const getStaticProps = async () => {
  let response = await fetch(
    "https://bobsburgers-api.herokuapp.com/characters"
  );
  let data = await response.json();

  return {
    props: {
      status: 200,
      data,
    },
  };
};
