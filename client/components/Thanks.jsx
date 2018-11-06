import React from 'react'
import {HashRouter as Router, Route, Link, Redirect} from 'react-router-dom'

import Home from './Home'

function Thanks () {
    
    return (
        <div>           
            <h1 class="centered3">Thank you for your RSVP.  Check your inbox for a confirmation email.  Please check our information page as we will update it with more details as they become available.</h1> 
            <a className="nav-item nav-link" href='#' onClick={()=>{return(Router.refresh())}}>Home</a>
        </div>
     )
}
export default Thanks