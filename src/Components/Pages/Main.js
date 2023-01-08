import React from 'react';
import '../Style/Style.css'

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

        <hr className='hr' />

    {/*---Row header---*/}
        <div className='row'>
            <div className='col-12'>
                <h1 className='text-center'> Briefly Description About Sports</h1>
                <p className='text-center lead'>Somthing More...</p>
            </div>
        </div>
    
        <div className='row'>
        {/*----Sport One---*/}
            <div className='col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3'>
                <p className='text-center lead'>Sport One</p>
                <img src='cricket.jpg' alt='' className='mx-auto d-block img-fluid'/>
                <p className='text=center lead'>Bootstraps form controls expand on our Rebooted form styles with classes. Use these classes to opt into their customized displays for a more consistent rendering across browsers and devices.</p>
            </div>
        {/*----Sport Two---*/}
            <div className='col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3'>
                <p className='text-center lead'>Sport Two</p>
                <img src='cricket.jpg' alt='' className='mx-auto d-block img-fluid'/>
                <p className='text=center lead'>Bootstraps form controls expand on our Rebooted form styles with classes. Use these classes to opt into their customized displays for a more consistent rendering across browsers and devices.</p>
            </div>
        {/*----Sport Three---*/}
            <div className='col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3'>
                <p className='text-center lead'>Sport Three</p>
                <img src='cricket.jpg' alt='' className='mx-auto d-block img-fluid'/>
                <p className='text=center lead'>Bootstraps form controls expand on our Rebooted form styles with classes. Use these classes to opt into their customized displays for a more consistent rendering across browsers and devices.</p>
            </div>
        {/*----Sport Four---*/}
            <div className='col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3'>
                <p className='text-center lead'>Sport Four</p>
                <img src='cricket.jpg' alt='' className='mx-auto d-block img-fluid'/>
                <p className='text=center lead'>Bootstraps form controls expand on our Rebooted form styles with classes. Use these classes to opt into their customized displays for a more consistent rendering across browsers and devices.</p>
            </div>
        {/*----Sport Five---*/}
            <div className='col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3'>
                <p className='text-center lead'>Sport Five</p>
                <img src='cricket.jpg' alt='' className='mx-auto d-block img-fluid'/>
                <p className='text=center lead'>Bootstraps form controls expand on our Rebooted form styles with classes. Use these classes to opt into their customized displays for a more consistent rendering across browsers and devices.</p>
            </div>
        {/*----Sport Six---*/}
            <div className='col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3'>
                <p className='text-center lead'>Sport Six</p>
                <img src='cricket.jpg' alt='' className='mx-auto d-block img-fluid'/>
                <p className='text=center lead'>Bootstraps form controls expand on our Rebooted form styles with classes. Use these classes to opt into their customized displays for a more consistent rendering across browsers and devices.</p>
            </div>

        </div>

       
    </div>
  )
}
 