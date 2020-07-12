import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
    </nav>
  );
};
