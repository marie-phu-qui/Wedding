import React from 'react'
import {HashRouter as Router, Route, Link, Redirect} from 'react-router-dom'

import Home from './Home'
import Information from './Information'
import Rsvp from './Rsvp'




function Thanks () {
    
    return (
        <div id="thanks">           
            <h1 class="centered3">
                Thank you for your RSVP.  Check your inbox for a confirmation email.  Please check our information page as we will update it with more details as they become available.
                <br /><br /><a className ="nav-link"href='/'>Home</a>  <br/>    <a className ="nav-link" href='/#/Information'>Information</a>
            </h1>
            {/* <a className="nav-item nav-link" href='#' onClick={()=>{return(Router.refresh())}}>Home</a>
            <a className="nav-item nav-link" href='#information' onClick={()=>{return(Router.refresh())}}>Information</a> */}
            
        </div>
     )
}
export default Thanks