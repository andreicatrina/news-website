import React from "react";
import { NavbarContainer, NavbarSection } from "./components";

export const Navbar = () => {
  return (
    <NavbarSection>
      <NavbarContainer>
        <a href="">Home</a>
        <a href="">Economy</a>
        <a href="">Politics</a>
        <a href="">Education</a>
        <a href="">Health</a>
        <a href="">Infrastructure</a>
        <a href="">Administration</a>
      </NavbarContainer>
    </NavbarSection>
  );
};
