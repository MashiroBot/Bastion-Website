import React from "react";
import Layout from "../layouts/default";
import Link from "../components/Link";
import { css } from "glamor";

export default () => (
  <Layout>
    <div css={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translateY(-50%) translateX(-50%)",
      width: "100%",
      padding: "25px",
      textAlign: "center",
    }}>
      <img
        src="https://resources.bastionbot.org/logos/Bastion_Logomark_C.png"
        alt="Beep. Beep."
        width="170"
        height="170"
        css={{
          animation: `${css.keyframes({
            from: {
              transform: "translateY(0)",
              filter: "saturate(0)",
            },
            "60%": {
              transform: "translateY(-10px)",
              filter: "saturate(1)",
            },
            to: {
              transform: "translateY(0)",
              filter: "saturate(0)",
            },
          })} 2s infinite cubic-bezier(.175, .885, .32, 1.275)`,
        }}
      />
      <h1>You look lost, human!</h1>
      <p>
        You just hit a route that doesn&#39;t exist...
        <br />
        Let&#39;s head back <Link to="/">home</Link>.
      </p>
    </div>
  </Layout>
);
