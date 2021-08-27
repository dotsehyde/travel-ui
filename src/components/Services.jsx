import React from "react";


function Services() {
  return (
    <section id="services">
        <div class="container">
            <div class="row">
                <div class="text-center col-12">
                    <h4 class="text-uppercase" id="service-title">Category</h4>
                    <h2 id="service-subtitle">We Offer Best Services</h2>
                </div>
            </div>
        </div>
        <div class="container" id="service-card-ctn">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 row-cols-xl-4">
                <div class="col d-flex flex-column align-items-center service-card"><img src="assets/img/service1.png" alt="service1"/>
                    <h4><strong>Calculated Weather&nbsp;</strong></h4>
                    <p>Built Wicket longer admire do barton vanity itself do in it.</p>
                </div>
          <div class="col d-flex flex-column align-items-center service-card"><img class="flight-card" src="assets/img/service2.png" alt="service2" style={{transform: "scale(1)", margin:"-35px"}}/>
                    <h4><strong>Best Flights</strong></h4>
                    <p>Engrossed listening. Park gate sell they west hard for the.</p>
                </div>
                <div class="col d-flex flex-column align-items-center service-card"><img src="assets/img/service3.png" alt="service3"/>
                    <h4><strong>Local Events</strong></h4>
                    <p>Barton vanity itself do in it. Preferd to men it engrossed listening. </p>
                </div>
                <div class="col d-flex flex-column align-items-center service-card"><img src="assets/img/service4.png" alt="service4"/>
                    <h4><strong>Customization</strong></h4>
                    <p>We deliver outsourced<br/>aviation services for<br/>military customers</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Services;
