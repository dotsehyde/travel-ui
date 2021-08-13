import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  innerCtn: {
    height: "314px",
    width: "267px",
    margin: "0px 10px",
    marginTop:"50px",
    "&:hover": {
      boxShadow:
        "0px 100px 80px rgba(0, 0, 0, 0.02), 0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852), 0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481), 0px 20px 13px rgba(0, 0, 0, 0.01), 0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185), 0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481)",
      borderRadius: "36px",
    },
  },
  subTitle: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "50px",
    lineHeight: "64px",
    textAlign: "center",
    color: "#14183E",

    textTransform: "capitalize",
  },
  title: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "27px",
    textAlign: "center",
    color: "#5E6282",
    marginBottom: "5px",
    marginTop:"100px",
  },
  cardBody: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    textAlign: "center",
    lineHeight: "26px",
  },
  cardTitle: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "20px",
    textAlign: "center",
    lineHeight: "27px",
  },

  img: {
    width: "92px",
    paddingTop: "10%",
    height: "78px",
  },
}));
function Services() {
  const css = useStyles();
  return (
    <Container maxWidth="xl">
      <div align="center">
        <Grid container>
          <Grid item xs={12}>
            <div className={css.title}>CATEGORY</div>
          </Grid>
          <Grid item xs={12}>
            <div className={css.subTitle}>We Offer Best Services</div>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="space-around"
          alignContent="center"
          spacing={1}
        >
          <Grid item lg={3} md={6} xs={12}>
            <div className={css.innerCtn} align="center">
              <img
                src={process.env.PUBLIC_URL + "assets/service1.png"}
                alt="service1"
                className={css.img}
              />
              <p className={css.cardTitle}>Calculated Weather</p>
              <p className={css.cardBody}>
                Built Wicket longer admire do barton vanity itself do in it.
              </p>
            </div>
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <div className={css.innerCtn} align="center">
              <img
                src={process.env.PUBLIC_URL + "assets/service2.png"}
                alt="service2"
                className={css.img}
              />
              <p className={css.cardTitle}>Best Flights</p>
              <p className={css.cardBody}>
                Engrossed listening. Park gate sell they west hard for the.
              </p>
            </div>
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <div className={css.innerCtn} align="center">
              <img
                src={process.env.PUBLIC_URL + "assets/service3.png"}
                alt="service3"
                className={css.img}
              />
              <p className={css.cardTitle}>Local Events</p>
              <p className={css.cardBody}>
                Barton vanity itself do in it. Preferd to men it engrossed
                listening.
              </p>
            </div>
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <div className={css.innerCtn} align="center">
              <img
                src={process.env.PUBLIC_URL + "assets/service4.png"}
                alt="service4"
                className={css.img}
              />
              <p className={css.cardTitle}>Customization</p>
              <p className={css.cardBody}>
                We deliver outsourced aviation services for military customers
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default Services;
