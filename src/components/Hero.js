
import React from "react";
import Colors from "../core/colors";
const colors = new Colors();

function Hero() {

  return (
    <section id="hero">
    <nav class="navbar navbar-light navbar-expand-md d-flex">
        <div class="container-fluid"><a class="navbar-brand" id="logo" href="#"></a><button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navcol-1">
                <ul class="mx-auto navbar-nav" id="navLinks">
                    <li class="nav-item"></li>
                    <li class="nav-item"><a class="nav-link" href="#">Destinations</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Hotels</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Flights</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Bookings</a></li>
                </ul><a class="login" href="#">Login</a><button class="btn" id="signup-btn" type="button">Sign up</button><select id="lang">
                    <option value="english" selected="">EN</option>
                    <option value="french">FR</option>
                    <option value="spanish">SP</option>
                </select>
            </div>
        </div>
    </nav>
    <div class="container">
        <div class="text-left row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-column justify-content-center" id="hero-left">
                <h5 class="text-uppercase hero-tagline">Best Destinations around the world</h5>
                <h1 class="hero-heading">Travel, enjoy<br/>and live a new and full life</h1>
                <h6 class="desc">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</h6>
                <div class="row d-flex align-items-center" id="cta">
                    <div class="col-12 d-flex align-items-center" id="cta-col"><button class="btn btn-find" type="button">Find out more</button><a class="play-link" href="#">
                            <div class="d-flex align-items-center"><i class="fa fa-play-circle play-icon"></i>
                                <h6 class="play-demo">Play Demo</h6>
                            </div>
                        </a></div>
                </div>
            </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex justify-content-center align-items-center justify-content-sm-center align-items-sm-center" id="hero-right">
            <img src="assets/img/heroImage.png" alt="heroImage"/>
             
           </div>
        </div>
    </div>
</section>
  );
}

export default Hero;
