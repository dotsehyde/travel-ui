import React from "react";

function DestCard({ picUrl, title, subTitle,amount}) {
  return (
    <div class="col" id="dest-card">
      <div class="d-flex align-items-end" id="dest-img-ctn" style={{ background: `url(${picUrl}) top / auto no-repeat` }}>
                <div class="dest-btm-ctn">
                    <div class="d-flex justify-content-between dest-card-desc">
            <h6 class="dest-card-title">{title}</h6>
          <h6 style={{ fontSize: "18px", fontWeight: "500", color: " #5E6282" }}>${amount} </h6>
                    </div>
                    <div class="d-flex align-items-center dest-card-trip"><i class="fa fa-location-arrow dest-card-icon"></i>
                        <p class="dest-card-days">&nbsp; {subTitle}</p>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default DestCard;
