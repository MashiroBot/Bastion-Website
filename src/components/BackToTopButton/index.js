import React from "react";
import arrows from "../../assets/base64/arrows.yaml";

export default (props) => (
  <button
    id="backToTop"
    onClick={ () => window.scroll({ top: 0, behavior: "smooth" }) }
    css={{
      position: "fixed",
      bottom: 0,
      right: 0,
      backgroundColor: props.theme === "light" ? "white" : "black",
      color: props.theme === "light" ? "black" : "white",
      padding: "10px 15px",
    }}
  >
    <img
      src={ props.theme === "light" ? arrows.top.dark : arrows.top.light }
      height="20"
      alt="⬆"
    />
  </button>
);
