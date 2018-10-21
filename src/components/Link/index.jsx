import React from "react";
import { Link as GatsbyLink } from "gatsby";

export default (props) => {
  const internal = /^\/(?!\/)/.test(props.to);

  if (internal) {
    return (
      <GatsbyLink to={ props.to } { ...props.other }>
        { props.children }
      </GatsbyLink>
    );
  }

  return (
    <a
      href={ props.to }
      target="_blank"
      rel="noopener noreferrer"
      { ...props.other }
    >
      { props.children }
    </a>
  );
};
