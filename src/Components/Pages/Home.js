import React from 'react';
import '../Style/Style.css';
import '../Images/vollyball.jpg'

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
                <div className='slide'>
                    <img src='../Images/vollyball.jpg' alt=''/>
                    <div className='desc'>
                        <h2>Volly Ball</h2>
                        <p>
                            sample test
                        </p>
                        <a href="#">Veiw More</a>
                    </div>          
                </div>

            </div>
            
        </div>
    </div>
  )
}
