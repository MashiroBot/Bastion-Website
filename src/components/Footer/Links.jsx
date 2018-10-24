import React from "react";
import Link from "../Link";
import navigation from "../../assets/navigation.yaml";
import Logo from "./Logo";

export default (props) => (
  <div css={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingBottom: "25px",
    borderBottom: "2px dashed rgba(250, 250, 250, .05)",
  }}>
    <Logo />

    {
      navigation.footer.map(item => (
        <div css={{
          display: "flex",
          flexDirection: "column",
        }}>
          <span css={{
            marginBottom: "15px",
          }}>{ item.name }</span>
          {
            item.links.map(subItem => (
              <Link to={ subItem.link } css={{
                fontWeight: 200,
                padding: "2px 0",
              }}>
                { subItem.name }
              </Link>
            ))
          }
        </div>
      ))
    }
  </div>
);
