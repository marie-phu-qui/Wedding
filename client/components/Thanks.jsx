import React from 'react'
import {HashRouter as Router, Route, Link, Redirect} from 'react-router-dom'

import Home from './Home'

function Thanks () {
    
    return (
        <div>           
            <h1 class="centered3">Thank you for RSVP'ING. Please find more information on the information page.</h1>  
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <a className="nav-item nav-link" href='#' onClick={()=>{console.log('clicliclci'); return(Router.refresh()) }}>HOME</a>
            <a className="nav-item nav-link" href="#Information">Information</a>
            <a className="nav-item nav-link" href="#Gifts">Gifts</a>
        </div>
            
        </div>
     )
}
export default Thanks