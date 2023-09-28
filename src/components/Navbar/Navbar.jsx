import React from "react";
import { NavbarContainer, NavbarSection } from "./components";

export const Navbar = () => {
  return (
    <NavbarSection>
      <NavbarContainer>
        <a href="">Home</a>
        <a href="">Economie</a>
        <a href="">Politica</a>
        <a href="">Educatie</a>
        <a href="">Sanatate</a>
        <a href="">Opinie</a>
        <a href="">Infrastructura</a>
        <a href="">Administratie</a>
      </NavbarContainer>
    </NavbarSection>
  );
};
