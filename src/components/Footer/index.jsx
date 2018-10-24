import React from "react";
import Wave from "./Wave";
import FooterLinks from "./Links";
import FooterMeta from "./Meta";

export default (props) => (
  <footer css={{
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    padding: "80px 160px 48px",
    fontSize: ".9em",
  }}>
    <Wave />
    <FooterLinks />
    <FooterMeta />
  </footer>
);
