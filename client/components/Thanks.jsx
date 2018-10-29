import React from 'react'
import {HashRouter as Router, Route, Link, Redirect} from 'react-router-dom'

import Home from './Home'

function Thanks () {
    
    return (
        <div>           
            <h1 class="centered3">Thank you for RSVP'ING. Please find more information on the information page.</h1> 
            <a className="nav-item nav-link" href='#' onClick={()=>{return(Router.refresh())}}>Home</a>
        </div>
     )
}
export default Thanks