import React from 'react';
import '../Style/Style.css';


export default function Home() {
  return (
    <div>
        <div className='slider'>

            {/*Radio Controller*/}
            <input type = "radio" name="sld" id='sld1'/>
            <input type = "radio" name="sld" id='sld2'/>
            <input type = "radio" name="sld" id='sld3'/>
            <input type = "radio" name="sld" id='sld4'/>
            <input type = "radio" name="sld" id='sld5'/>

            {/*Slides*/}
            <div className='slides'>

                {/*slide 01*/}
                <div className='slide curr'>
                    <img src='vollyball.jpg' alt=''/>
                    <div className='desc'>
                        <h2>Volly Ball</h2>
                        <p>
                        Once you have prepared with the sample questions put your knowledge to the test with IELTS Progress Check, an official IELTS online marked practice test. The test will give you an indication of your band score and provide feedback on areas to improve. Book your official practice test today.
                        </p>
                        <a href=".#">Veiw More</a>
                    </div>          
                </div>

                {/*slide 02*/}
                <div className='slide'>
                    <img src='football.jpg' alt=''/>
                    <div className='desc'>
                        <h2>Foot Ball</h2>
                        <p>
                        Once you have prepared with the sample questions put your knowledge to the test with IELTS Progress Check, an official IELTS online marked practice test. The test will give you an indication of your band score and provide feedback on areas to improve. Book your official practice test today.
                        </p>
                        <a href=".#">Veiw More</a>
                    </div>          
                </div>

                {/*slide 03*/}
                <div className='slide'>
                    <img src='cricket.jpg' alt=''/>
                    <div className='desc'>
                        <h2>Cricket</h2>
                        <p>
                        Once you have prepared with the sample questions put your knowledge to the test with IELTS Progress Check, an official IELTS online marked practice test. The test will give you an indication of your band score and provide feedback on areas to improve. Book your official practice test today.
                        </p>
                        <a href=".#">Veiw More</a>
                    </div>          
                </div>

                {/*slide 04*/}
                <div className='slide'>
                    <img src='batminton.jpg' alt=''/>
                    <div className='desc'>
                        <h2>Batminton</h2>
                        <p>
                        Once you have prepared with the sample questions put your knowledge to the test with IELTS Progress Check, an official IELTS online marked practice test. The test will give you an indication of your band score and provide feedback on areas to improve. Book your official practice test today.
                        </p>
                        <a href=".#">Veiw More</a>
                    </div>          
                </div>

                {/*slide 05*/}
                <div className='slide'>
                    <img src='table_tenis.jpg' alt=''/>
                    <div className='desc'>
                        <h2>Table Tenis</h2>
                        <p>
                        Once you have prepared with the sample questions put your knowledge to the test with IELTS Progress Check, an official IELTS online marked practice test. The test will give you an indication of your band score and provide feedback on areas to improve. Book your official practice test today.
                        </p>
                        <a href=".#">Veiw More</a>
                    </div>          
                </div>


            </div>

            {/*Arrow navigation*/}
            <a href='.#' className='arrow left'><i class = "fas fa-arrow-circle-left"></i></a>
            <a href='.#' className='arrow right'><i class = "fas fa-arrow-circle-right"></i></a>

            {/*radio navigation*/}
            <label for ="sld1" className='rad-btn'></label>
            <label for ="sld2" className='rad-btn'></label>
            <label for ="sld3" className='rad-btn'></label>
            <label for ="sld4" className='rad-btn'></label>
            <label for ="sld5" className='rad-btn'></label>
        </div>
    </div>
  )
}
