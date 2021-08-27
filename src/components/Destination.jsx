import React from "react";
import { useState } from "react";
import DestCard from "../widget/DestCard";

function Destination() {
  const [cardInfo, setCardInfo] = useState([
    {
      picUrl:  "assets/img/rome.png",
      title: "Rome",
      subTitle: "10 Days Trip",
      amount: "5.24k",
    },
    {
      picUrl:  "assets/img/london.png",
      title: "London",
      subTitle: "5 Days Trip",
      amount: "2.24k",
    },
    {
      picUrl:  "assets/img/euro.png",
      title: "Europe",
      subTitle: "15 Days Trip",
      amount: "15.24k",
    },
  ]);
  
  return (
    <section id="dest">
      <div class="container">
        <div class="row">
          <div class="text-center col-12">
            <h4 class="text-uppercase" id="dest-title">
              <strong>Top Selling</strong>
            </h4>
            <h2 id="dest-subtitle">Top Destinations</h2>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="flex-row row d-flex">
          {cardInfo.map((e) => {
            return (
              <DestCard
                picUrl={e.picUrl}
                subTitle={e.subTitle}
                title={e.title}
                amount={e.amount}
              />
            );
          })}
        
        </div>
      </div>
    </section>
  );
}

export default Destination;
