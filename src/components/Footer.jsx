import React from 'react'

function Footer() {
    return (
        <footer id="footer">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h3 class="footer-title">Jadoo.</h3>
                    <p class="footer-sub">Book your trip in minute, get full<br/>Control for much longer.<br/></p>
                </div>
                <div class="col">
                    <p class="footer-link-title">Company</p><a class="footer-link" href="#">About</a><a class="footer-link" href="#">Careers</a><a class="footer-link" href="#">Mobile</a>
                </div>
                <div class="col">
                    <p class="footer-link-title">Contact</p><a class="footer-link" href="#">Help/FAQ</a><a class="footer-link" href="#">Press</a><a class="footer-link" href="#">Affiliates</a>
                </div>
                <div class="col">
                    <p class="footer-link-title">More</p><a class="footer-link" href="#">Airlinefees</a><a class="footer-link" href="#">Airline</a><a class="footer-link" href="#">Low fare tips</a>
                </div>
                <div class="col">
                    <div id="social-ctn"><a class="social-link" href="#">
                            <div id="social"><i class="fa fa-facebook social-icon"></i></div>
                        </a><a class="social-link" href="#">
                            <div id="social"><i class="fa fa-instagram social-icon"></i></div>
                        </a><a class="social-link" href="#">
                            <div id="social"><i class="fa fa-twitter social-icon"></i></div>
                        </a></div>
                    <p class="text-center app-text">Discover our app</p>
                    <div class="row">
                            <div class="col-12" id="app-col" style={{ marginBottom: "5px" }}><a href="#"><img src="assets/img/Google%20Play.png"/></a></div>
                        <div class="col-12" id="app-col"><a href="#"><img src="assets/img/App%20Store.png"/></a></div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p class="text-center footer-copyright">All rights reserved@jadoo.co</p>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer
