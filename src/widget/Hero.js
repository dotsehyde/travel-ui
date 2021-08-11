import { makeStyles, Typography, Button } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  main: {
    width: "100vw",
    height: "30%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    },
    deco: {
        position: "absolute",
        top: '44%',
        left: '30%',
        zIndex: -1, 
    },
  bgBanner: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
    width: "100vw",
  },
  right: {
    marginTop: "20px",
  },
  left: {
    marginTop: "100px",
    marginLeft: "100px",
  },
  img: {
    height: "560px",
  },
  tagLine: {
    color: "#DF6951",
    fontSize: "20px",
    fontFamily: "Poppins",
    fontWeight: "700",
    textAlign: "left",
  },
  heading: {
    fontFamily: "Poppins",
    fontWeight: "bold",
    fontSize: "84px",
    lineHeight: "89px",
    color: "#181E4B",
  },
  desc: {
    fontFamily: "Poppins",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "30px",
    color: "#5E6282",
  },
  cta: {
    marginTop: "30px",
  },
  ctaMore: {
    "&:hover": {
      backgroundColor: "#E9A71B",
    },
    backgroundColor: "#F1A501",
    boxShadow: "0px 20px 35px rgba(241, 165, 1, 0.15)",
    fontStyle: "normal",
    color: "white",
    borderRadius: "10px",
    padding: "19px 27px",
  },
  ctaPlay: {
    marginLeft: "10px",
    "&:hover": {
      backgroundColor: "transparent",
      },
      height:'20px',
  },
  playBtn: {
    marginTop: "25px",
    height: "100px",
    marginRight: "-25px",
  },
});
function Hero() {
  const css = useStyles();
  return (
    <div className={css.main}>
      <div className={css.left}>
        <Typography variant="h5" className={css.tagLine}>
          Best Destinations around the world
        </Typography>
        <Typography variant="h1" className={css.heading}>
          Travel, enjoy and live a new and full life
        </Typography>
        <Typography variant="p" className={css.desc}>
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </Typography>
        <div className={css.cta}>
          <Button variant="contained" disableElevation className={css.ctaMore}>
            Find out more
          </Button>
          <Button
            variant="text"
            disableRipple
            focusRipple={false}
            startIcon={
              <img
                className={css.playBtn}
                src={process.env.PUBLIC_URL + "assets/Playbtn.png"}
                alt="playBtn"
              />
            }
            className={css.ctaPlay}
          >
            Play demo
          </Button>
        </div>
      </div>
      <div className={css.right}>
        <img
          className={css.img}
          src={process.env.PUBLIC_URL + "assets/heroImage.png"}
          alt=""
        />
      </div>
      <img
        className={css.bgBanner}
        src={process.env.PUBLIC_URL + "assets/bannerBG.png"}
        alt="banner"
      />
      <img
        className={css.deco}
        src={process.env.PUBLIC_URL + "assets/deco.png"}
        alt="deco"
      />
    </div>
  );
}

export default Hero;
