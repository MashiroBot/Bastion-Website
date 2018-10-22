import React from "react";
import Link from "../Link";
import navigation from "../../assets/navigation.yaml";

export default (props) => (
  <div css={{
    display: "flex",
    alignItems: "center",
    marginRight: "15px",
  }}>
    <ul css={{
      listStyle: "none",
      margin: 0,
      padding: 0,
    }}>
      {
        navigation.header.right.map(item => (
          <Link to={ item.link }>
            <li css={{
              padding: "10px 15px",
              display: "inline-block",
              color: item.button ? "#070A0C" : "#ddd",
              borderRadius: "3px",
              background: item.button ? "#40C4FB" : "none",
              transition: "background .3s ease",
              ":hover": {
                color: item.button ? "#070A0C" : "#fff",
                background: item.button ? "#62D9FB" : "none",
              },
            }}>{ item.name }</li>
          </Link>
        ))
      }
    </ul>
  </div>
);
