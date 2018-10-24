import React from "react";
import Link from "../Link";
import logos from "../../assets/base64/logos.yaml";

export default (props) => (
  <Link to={ document.location.pathname === "/" ? "" : "/" }>
    <img
      src={ logos.bastion.logotype }
      alt="Bastion Logotype"
      width="150"
      css={{
        transition: "filter .4s ease",
        ":hover": {
          filter: "contrast(120%)",
        },
      }}
    />
  </Link>
);
