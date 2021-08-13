import React from "react";
import Hero from "../widget/Hero";
import NavBar from "../widget/NavBar";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Services from "../widget/Services";

const useStyles = makeStyles((theme) => ({
  deco: {
    position: "absolute",
    top: "45%",
    left: "30%",
    zIndex: -1,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  bgBanner: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
    width: "100%",
  },
}));
function Home() {
  const css = useStyles();
  return (
    <div>
      <NavBar />
      <Hero />
      <Services/>
      <img
        className={css.bgBanner}
        src={process.env.PUBLIC_URL + "assets/bannerBG.png"}
        alt="banner"
      />
      {/* <img
        className={css.deco}
        src={process.env.PUBLIC_URL + "assets/deco.png"}
        alt="deco"
      /> */}
    </div>
  );
}

export default Home;
