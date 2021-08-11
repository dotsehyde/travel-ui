import React from "react";
import Hero from "../widget/Hero";
import NavBar from "../widget/NavBar";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({}));
function Home() {
  const css = useStyles();
  return (
    <Container maxWidth="xl">
      <NavBar />
      <Hero />
    </Container>
  );
}

export default Home;
