import React from "react";
import { useState } from "react";
import GuideCard from "../widget/GuideCard";

function BookTrip() {
    const [guide, setGuide] = useState([
        {
          color: "#F0BB1F",
          icon: "fa fa-location-arrow",
          title: "Choose Destination",
          subTitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
        },
        {
          color: "#F15A2B",
          icon: "fa fa-money",
          title: "Make Payment",
          subTitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
        },
        {
          color: "#006380",
          icon: "fa fa-car",
          title: "Reach Airport on Selected Date",
          subTitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus",
        },
      ]);

  return (
    <section id="book-trip">
      <div class="container">
        <div class="row">
          <div class="col">
            <h3 class="trip-title">Easy and Fast</h3>
            <h3 class="text-capitalize trip-subtitle">
              Book your next trip <br />
              in 3 easy steps
            </h3>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-column flex-sm-row flex-md-row flex-lg-column flex-xl-column">
            {guide.map((e) => {
              return (
                <GuideCard
                  title={e.title}
                  subTitle={e.subTitle}
                  icon={e.icon}
                  color={e.color}
                />
              );
            })}
          </div>
          <div class="col d-flex align-items-end" id="trip-right">
            <div class="card-ctn">
              <img id="trip-card-img" src="assets/img/trip-image.jpg" alt="trip-img"/>
              <p class="trip-card-title">Trip To Greece</p>
              <p class="trip-card-sub1">14-29 June |&nbsp;by Robbin joseph</p>
              <img class="trip-options" src="assets/img/trip-options.png" alt="trip-option" />
              <div class="d-flex justify-content-between align-items-start trip-btm-ctn">
                <p class="trip-btm-p">
                  <i class="fa fa-building-o build-icon"></i>24 people going
                </p>
                <i class="fa fa-heart-o heart-icon"></i>
              </div>
            </div>
            <div id="trip-rect-card">
              <div class="row">
                <div class="col">
                  <img class="book-trip-pp" src="assets/img/book-trip-pp.png" alt="book-trip"/>
                </div>
                <div class="col-lg-7 offset-lg-0">
                  <div class="row">
                    <div class="col">
                      <p class="trip-top-text">Ongoing</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <p
                        class="trip-head-text"
                        style={{color: "#000", marginBottom: "0px", marginLeft: "-30px", marginTop: "3px"}}
                      >
                        Trip to rome
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <p class="trip-body-text">
                        <span class="trip-percent">40%&nbsp;</span>completed
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <div
                        class="border progress rounded-pill"
                        id="trip-progressBar"
                      >
                        <div
                          class="progress-bar progress-bar-animated"
                          aria-valuenow="40"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "40%" }}
                        >
                          <span class="sr-only">40%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookTrip;
