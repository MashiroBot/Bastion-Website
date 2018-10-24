import React from "react";

export default (props) => (
  <div css={{
    padding: "20px",
    textAlign: "center",
    color: "rgba(250, 250, 250, .1)",
    fontWeight: 200,
  }}>
    Copyright &copy; 2017-{ new Date().getFullYear() } &ndash; The Bastion Bot Project
  </div>
);
