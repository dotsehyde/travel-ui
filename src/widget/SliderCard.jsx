import React from 'react'

function SliderCard({ quote,name,position,picUrl}) {
    return (
        <div class="carousel-item active">
        <div id="testi-silder-ctn">
            <div id="testi-card">
                <p class="testi-quote">{quote}</p>
                <h5 class="testi-name"><strong>{name}</strong></h5>
                <h6 class="testi-pos">{position}</h6>
            </div><img class="testi-pic" src={picUrl} alt="profile pic"/>
        </div>
    </div>
    )
}

export default SliderCard
