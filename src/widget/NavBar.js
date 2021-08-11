import { makeStyles, Button } from "@material-ui/core";
import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";
import React from "react";

const useStyles = makeStyles({
  navBar: {
    marginTop:'10px',
    height: "5%",
    width: "100vw",
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-around',
    alignItems:'center'
  },
  logo: {},

  navLinksCtn: {
    display: "flex",
    flexDirection: "row",
    textDecoration: "none",
  },
  navLink: {
    textDecoration: "none",
    color: "#212832",
    marginRight: '15px',
    marginLeft:'15px',
  },
  signupBtn: {
    borderRadius: '5px',
    marginRight: '10px',
    marginLeft:'10px',
  },
  auth: {},
});
function NavBar() {
  const css = useStyles();
  return (
    <div className={css.navBar}>
      <div>
        <img
          className={css.logo}
          src={process.env.PUBLIC_URL + "assets/logo.png"}
          alt="logo"
        />
      </div>
      <div className={css.navLinksCtn}>
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
      </div>
      <div className={css.auth}>
        <a href="#d" className={css.navLink}>
          Login
        </a>
        <Button variant="outlined" className={css.signupBtn}>
          Signup
        </Button>
        <Button variant="text" endIcon={<KeyboardArrowDownOutlinedIcon />}>
          EN
        </Button>
      </div>
    </div>
  );
}

export default NavBar;
