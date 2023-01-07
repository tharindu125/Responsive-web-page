import React from 'react'

export default function main() {
  return (
    <div className='container'>

        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="cricket.jpg" alt="First slide" style = {{width:'700px', height:'500px', margin: '10px'}}/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>cricket</h5>
                        <p>sample test</p>
                        <a href='.#' >View more</a>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="vollyball.jpg" alt="Second slide" style = {{width:'700px', height:'500px', margin: '10px'}}/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Volly Ball</h5>
                        <p>sample test</p>
                        <a href='.#' >View more</a>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="football.jpg" alt="Third slide" style = {{width:'700px', height:'500px', margin: '10px'}}/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Foot Ball</h5>
                        <p>sample test</p>
                        <a href='.#' >View more</a>
                    </div>
                </div>
            </div>

            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
  )
}
