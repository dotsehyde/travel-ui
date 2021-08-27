import React from "react";

function Subscribe() {
  return (
    <section id="subs">
      <div class="container" id="sub-ctn">
        <div id="sub-card">
          <h4 class="sub-text">
            Subscribe to get information, latest news and other
            <br />
            interesting offers about Cobham
          </h4>
          <img class="right-cir" src="assets/img/right-cir.png" />
          <img class="left-cir" src="assets/img/left-cir.png" />
          <div class="row">
            <div
              class="col-sm-12 col-md-12 col-lg-auto col-xl-auto"
              id="text-col"
            >
              <form id="sub-form">
                <div id="sub-txtbox">
                  <i class="fa fa-envelope-o" id="email-icon"></i>
                  <input
                    class="form-control txtbox"
                    type="email"
                    placeholder="Your Email"
                  />
                </div>
              </form>
            </div>
            <div class="col btn-ctn">
              <button class="btn btn-primary sub-btn" type="button">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div id="icon-cir">
          <i class="fa fa-send" id="send-icon"></i>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
