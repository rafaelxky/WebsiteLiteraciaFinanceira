import React, { Children } from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css"

export function HeaderBtn({link, children, ...rest}) {

  return (
    <Link to={link} className="header-btn no-underline">
      <button className="header-btn no-underline" {...rest}>
        {children}
      </button>
    </Link> 
  );
}