import React from 'react'

function Testimonial() {
    return (
        <section id="testi">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h5 class="text-uppercase testi-subtitle">Testimonials</h5>
                    <h2 class="testi-heading">What people say<br/>about Us.</h2>
                </div>
                <div class="col-lg-7 align-self-center">
                    <div class="carousel slide" data-ride="carousel" id="carousel-1">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div id="testi-silder-ctn">
                                    <div id="testi-card">
                                        <p class="testi-quote">“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
                                        <h5 class="testi-name"><strong>Chris Thomas</strong></h5>
                                        <h6 class="testi-pos">CEO of Red Button</h6>
                                    </div><img class="testi-pic" src="assets/img/testi-pic.png" alt="profile pic"/>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div id="testi-silder-ctn">
                                    <div id="testi-card">
                                        <p class="testi-quote">“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
                                        <h5 class="testi-name">Mike taylor</h5>
                                        <h6 class="testi-pos">Lahore, Pakistan</h6>
                                    </div><img class="testi-pic" src="assets/img/testi-pic.png" alt="profile pic"/>
                                </div>
                            </div>
                        </div>
                        <div><a class="carousel-control-prev" href="#carousel-1" role="button" data-slide="prev"><span class="carousel-control-prev-icon testi-prev"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#carousel-1" role="button" data-slide="next"><span class="carousel-control-next-icon"></span><span class="sr-only">Next</span></a></div>
                        <ol class="carousel-indicators">
                            <li data-target="#carousel-1" data-slide-to="0" class="active"></li>
                            <li data-target="#carousel-1" data-slide-to="1"></li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Testimonial
