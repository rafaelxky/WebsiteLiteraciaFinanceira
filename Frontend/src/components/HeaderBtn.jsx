import React, { Children } from "react";
import "../styles/index.css"

export function HeaderBtn(props) {
  const { children, ...rest } = props;

  const processedChildren = Children.map(children, child => {
    return child;
  });

  return (
    <button className="header-btn" {...rest}>
      {processedChildren}
    </button>
  );
}