import React from "react";
import Hero from "../widget/Hero";
import NavBar from "../widget/NavBar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
 
}));
function Home() {
  const css = useStyles();
  return (
    <div>
      <NavBar />
      <Hero />
      
      
    </div>
  );
}

export default Home;
