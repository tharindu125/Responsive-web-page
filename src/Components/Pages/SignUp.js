import React from 'react'

export default function SignUp() {
  return (
    <div className='container' style={{marginTop: '5rem'}}>

        <form className="px-5 py-4" style={{border:'1px solid black',}}>
            
            <h1 className='text-center' style={{color:"green", fontSize:'2rem', margin:'12px', fontFamily:'sans-serif', fontWeight:'800'}}>Register Our servise and get amazing benefits</h1>
            <div class="form-row" style={{marginTop:'40px'}}>

                <div class="form-group col-md-6">
                    <label for='inputFirstName'>First Name :</label>
                    <input type="text" class="form-control" placeholder="First name"/>
                </div>
                <div class="form-group col-md-6">
                    <label for ='inputLastName'>Last Name :</label>
                    <input type="text" class="form-control" placeholder="Last name"/>
                </div>

                <div class="form-group col-md-6">
                    <label for="inputEmail4">Email :</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
                </div>
                <div class="form-group col-md-6">
                    <label for="inputPassword4">Password :</label>
                    <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
                </div>
            </div>

            <div class="form-group">
                <label for="inputAddress">Address :</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
            </div>

            <div class="form-group">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck"/>
                    <label class="form-check-label" for="gridCheck">
                        Check me out
                    </label>
                </div>
            </div>

            <button type="submit" class="btn btn-primary">Sign in</button>
        </form>

    </div>
  )
}
