import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import Main from './Main'
import Login from './Login';

export default function Navbar() {
  return (
    <Router>
    <div>
    
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="./">
            <img src="logo.png" width="100" height="35" alt=""/>
        </a>
        <a class="navbar-brand" href="./">Sport HUB</a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">

                <li class="nav-item">
                    <a class="nav-link" href="./SignUp.js">Sign UP <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./Login.js">Log In</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href=".#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href=".#">Action</a>
                    <a class="dropdown-item" href=".#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href=".#">Something else here</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href=".#">Disabled</a>
                </li>

            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>

        </nav>

        <Routes>
        <Route path="/" element={<Main/> } />
        <Route path="/SignUp.js" element={ <SignUp/> } />
        <Route path="/Login.js" element={ <Login/> } />
        </Routes>
    
    </div>
    </Router>
  )
}
