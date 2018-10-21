import React from "react";
import loader from "./loader.gif";
import { css } from "glamor";

export default (props) => (
  <div
    css={{
      margin: "50px 20px 0 25px",
      height: "80px",
      width: "150px",
      "::after": {
        content: " ",
        display: "block",
        position: "relative",
        bottom: "30px",
        height: "10px",
        background: "transparent",
        borderRadius: "50px",
        boxShadow: "0 70px 50px rgba(98, 217, 251, .2)",
      }
    }}
  >
    <img
      src={ loader }
      alt="Loading..."
      height="80"
      css={{
        display: "block",
        margin: "0 auto",
        transform: "translate3d(0, 0, 0)",
        backfaceVisibility: "hidden",
        perspective: "1000px",
        ":hover": {
          animation: `${css.keyframes({
            "10%, 90%": {
              transform: "translate3d(-1px, 0, 0)",
            },
            "20%, 80%": {
              transform: "translate3d(2px, 0, 0)",
            },
            "30%, 50%, 70%": {
              transform: "translate3d(-4px, 0, 0)",
            },
            "40%, 60%": {
              transform: "translate3d(4px, 0, 0)",
            },
          })} 0.8s cubic-bezier(.36, .07, .19, .97) both`,
        },
      }}
    />
  </div>
);
