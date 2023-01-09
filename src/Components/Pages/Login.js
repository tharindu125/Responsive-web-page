import React from 'react'

export default function Login() {
  return ( 
      
        <div className='container' style={{display: 'flex'}}>
        <div className='col-6'>
          <form class="px-5 py-4 " style={{border:'1px solid black', marginTop:'5rem'}}>
            
            <h1 className='text-center' style={{color:"green", fontSize:'2rem', margin:'12px', fontFamily:'sans-serif', fontWeight:'800'}}>Login</h1>

            <div class="form-group">
              <label for="exampleDropdownFormEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"/>
            </div>

            <div class="form-group">
              <label for="exampleDropdownFormPassword1">Password</label>
              <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password"/>
            </div>

            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="dropdownCheck"/>
              <label class="form-check-label" for="dropdownCheck"> Remember me</label>
            </div>

            <br/>
            <button type="submit" class="btn btn-primary ">Login</button>

            <br/><br/>
            <div className='text-right'>

              <label>New around here?<a href=".SignUp.js"> Sign up</a></label>
              <br/>
              <a href=".">Forgot password?</a>

            </div>

          </form>
          </div>

          <div className='col-6'>
            <img src='login.png' alt=''  style={{width:'600px', height:'600px'}}/>
            
          </div>

          
            

        </div>

  )
}
