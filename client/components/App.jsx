import {HashRouter as Router, Route} from 'react-router-dom'
import React from 'react'
import Home from './Home'
import Rsvp from './Rsvp'
import Information from './Information'
import Thanks from './Thanks'


const App = () => {
  return (
    <Router>
        <div>
        <Route exact path= "/" component={Home}/> 
        <Route exact path= "/rsvp" component={Rsvp}/> 
        <Route exact path= "/information" component={Information}/>
        <Route exact path= "/thanks" component={Thanks}/>
        

        </div>   
     </Router>

      
  )
}

export default App