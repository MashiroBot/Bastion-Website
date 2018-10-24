import React from "react";
import Link from "../Link";
import logos from "../../assets/base64/logos.yaml";

export default (props) => (
  <Link
    to={ document.location.pathname === "/" ? "" : "/" }
    css={{
      zIndex: 10,
    }}
  >
    <img
      src={ logos.bastion.logomark }
      alt="Bastion Heart"
      height="72"
      width="72"
      css={{
        padding: "15px",
        transition: "filter .4s ease",
        ":hover": {
          filter: "contrast(120%)",
        },
      }}
    />
  </Link>
);
