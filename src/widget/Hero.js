import {
  makeStyles,
  Typography,
  Button,
  Container,
  Grid,
} from "@material-ui/core";
import React from "react";
import Colors from "../core/colors";
const colors = new Colors();
const useStyles = makeStyles((theme) => ({
  right: {
    marginTop: "20px",
    marginLeft: "-10px",
    textAlign: "center",
  },
  left: {
    marginTop: "100px",
    marginLeft: "80px",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      marginLeft: "0px",
      marginTop: "50px",
    },
  },
  img: {
    height: "40vw",
    [theme.breakpoints.down("md")]: {
      height: "50vw",
    },
  },
  tagLine: {
    // color: "#DF6951",
    color: colors.primaryColor,
    fontSize: "20px",
    fontFamily: "Poppins",
    fontWeight: "700",
    textAlign: "left",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  heading: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
      lineHeight: "39px",
    },
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
    textAlign: "left",
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
    textAlign: "left",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
    lineHeight: "30px",
    color: "#5E6282",
  },

  cta: {
    marginTop: "25px",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
    },
  },
  ctaMore: {
    "&:hover": {
      backgroundColor: "#E9A71B",
    },
    backgroundColor: "#F1A501",
    boxShadow: "0px 20px 35px rgba(241, 165, 1, 0.15)",
    fontStyle: "normal",
    color: "white",
    textTransform: "capitalize",
    
    borderRadius: "10px",
    padding: "19px 27px",
  },
  ctaPlay: {
    marginLeft: "10px",
    "&:hover": {
      backgroundColor: "transparent",
    },
    height: "20px",
  },
  playBtn: {
    marginTop: "25px",
    height: "100px",
    marginRight: "-25px",
  },
}));
function Hero() {
  const css = useStyles();
  return (
    <div>
      <Container >

      <Grid container spacing={1}>
        <Grid item xs={12} md={6} className={css.left}>
          <Typography variant="h5" className={css.tagLine}>
            Best Destinations around the world
          </Typography>
          <Typography variant="h1" className={css.heading}>
            Travel, enjoy and live a new and full life
            </Typography>
            <Container >
          <Typography variant="p" className={css.desc}>
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </Typography>
            </Container>
          <div className={css.cta}>
            <Button
              variant="contained"
              disableElevation
              className={css.ctaMore}
            >
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
        </Grid>

        <Grid item xs={12} md={4} lg={4} className={css.right}>
          <img
            className={css.img}
            src={process.env.PUBLIC_URL + "assets/heroImage.png"}
            alt=""
          />
        </Grid>
      </Grid>
      </Container>
    </div>
  );
}

export default Hero;
