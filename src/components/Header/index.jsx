import React from "react";
import HeaderLogo from "./Logo";
import HeaderLinks from "./Links";

export default (props) => (
  <header css={{
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    maxWidth: "1600px",
    height: "72px",
    margin: "0 auto",
    fontSize: ".9em",
    zIndex: 10,
  }}>
    <HeaderLogo />
    <HeaderLinks />
  </header>
);
