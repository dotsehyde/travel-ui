import React from "react";
function NavBar() {
  return (
    <div>
      <nav class="navbar navbar-light navbar-expand-md d-flex">
        <div class="container-fluid">
          <a class="navbar-brand" id="logo" href="logo"></a>
          <button
            data-toggle="collapse"
            class="navbar-toggler"
            data-target="#navcol-1"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navcol-1">
            <ul class="mx-auto navbar-nav" id="navLinks">
              <li class="nav-item"></li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Destinations
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Hotels
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Flights
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Bookings
                </a>
              </li>
            </ul>
            <a class="login" href="#">
              Login
            </a>
            <button class="btn" id="signup-btn" type="button">
              Sign up
            </button>
            <select id="lang">
              <option value="english" selected="">
                EN
              </option>
              <option value="french">FR</option>
              <option value="spanish">SP</option>
            </select>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
