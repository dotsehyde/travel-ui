import React from 'react'

function GuideCard({color, title, subTitle, icon}) {
    return (
        <div class="row trip-list-row">
        <div class="col-lg-2 d-flex align-self-start justify-content-sm-center justify-content-md-center flex-lg-column justify-content-lg-start flex-xl-column justify-content-xl-start">
                <div class="d-flex justify-content-center align-items-center" id="trip-icon-ctn" style={{ background: `${color}` }}><i class={icon} id="trip-icon"></i></div>
        </div>
        <div class="col-lg-10">
                <h5 class="text-sm-center text-md-center text-lg-left text-xl-left" id="trip-list-title">{ title}</h5>
                <p class="text-sm-center text-md-center text-lg-left text-xl-left" id="trip-list-p">{subTitle}</p>
        </div>
    </div>
    )
}

export default GuideCard
