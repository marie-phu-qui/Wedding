import React from 'react'
import {HashRouter as Router, Route, Link, Redirect} from 'react-router-dom'

import Home from './Home'

function Thanks () {
    
    return (
        <div>          
            <h1 class="centered">Thank you for RSVP'ING</h1>  
            <h1 class="centered3">We will keep you updated via e-mail when new information does come up.</h1>  
            {/* <Router>
            <Link to= "/">Home
            <Route exact path= "/" component={Home}/>
            </Link>   
            </Router> */}
            <a className="nav-item nav-link" href='#' onClick={()=>{console.log('clicliclci'); return(Router.refresh()) }}>HOME</a>
            
        </div>

    // <Router>
    //   <div>
    //     <h1 class="centered">Thank you for RSVP'ING</h1>  
    //     <h1 class="centered3">We will keep you updated via e-mail when new information does come up.</h1>  
    //     <ul>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //     </ul>
  
    //     <hr />
  
    //     <Route exact path="/" component={Home} />

    //   </div>
    // </Router>
     )
}
export default Thanks