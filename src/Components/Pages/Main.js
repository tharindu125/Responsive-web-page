import React from 'react'

export default function main() {
  return (
    <div className='container'>

        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">

            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="cricket.jpg" alt="First slide"/>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="vollyball.jpg" alt="Second slide"/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>..................................</h5>
                        <p>......................................</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="football.jpg" alt="Third slide"/>
                </div>
            </div>

            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="false"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="false"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
  )
}
