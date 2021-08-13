import { makeStyles, Button } from "@material-ui/core";
import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";
import React from "react";
import Grid from "@material-ui/core/Grid";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles({
  ctn: {
    marginTop: "0px",
    backgroundColor: "transparent",
  },
  logo: {
    textAlign: "center",
  },
  links: {
    textAlign: "center",
    marginTop: "5px",
  },
  navLink: {
    textDecoration: "none",
    color: "#212832",
    marginRight: "15px",
    marginLeft: "15px",
  },
  auth: {
    textAlign: "center",
  },


  signupBtn: {
    borderRadius: '5px',
    marginRight: '10px',
    marginLeft:'10px',
  },
  dropDown: {
    backgroundColor: "transparent",
    border: "none",
    fontFamily:"Poppins",
    fontSize: "16px",
    "&:focus": {
      border: "none",
    }
  }

});
function NavBar() {
  const css = useStyles();
  return (
    <div>
      
   
    
   <Grid container spacing={3} className={css.ctn}>
        <Grid item xs={12} lg={4} md={4} className={css.logo}>
          <img
            className={css.logo}
            src={process.env.PUBLIC_URL + "assets/logo.png"}
            alt="logo"
          />
        </Grid>
        <Grid item xs={12} lg={4} md={4} className={css.links} wrap="wrap">
          <a href="#d" className={css.navLink}>
            Destination
          </a>
          <a href="#d" className={css.navLink}>
            Hotels
          </a>
          <a href="#d" className={css.navLink}>
            Flights
          </a>
          <a href="#d" className={css.navLink}>
            Bookings
          </a>
        </Grid>
        <Grid item xs={12} lg={4} md={4} className={css.auth}>
          <a href="#d" className={css.navLink}>
            Login
          </a>
          <Button variant="outlined" className={css.signupBtn}>
            Signup
          </Button>

          <select className={css.dropDown} name="lang" id="lang">
            <option value="english">EN</option>
            <option value="french">FR</option>
            <option value="spanish">SP</option>

          </select>
        </Grid>
      </Grid>
      </div>
  );
}

export default NavBar;
