import React from "react";
import { Container, Content } from "./components";
import { Header } from "../../components/Header/Header";
import { Navbar } from "../../components/Navbar/Navbar";
import { Landing } from "../../components/Landing/Landing";

export const PageLayout = (props) => {
  return (
    <Container>
      <Header />
      <Navbar />

      <Content>{props.children}</Content>
    </Container>
  );
};
