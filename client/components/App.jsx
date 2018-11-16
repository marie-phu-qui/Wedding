import {HashRouter as Router, Route} from 'react-router-dom'
import React, { Component } from 'react';
import Home from './Home'
import Rsvp from './Rsvp'
import Information from './Information'
import Thanks from './Thanks'
import Gifts from './Gifts'



var sent=0

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  sentdata = () => {
    sent = 1
    this.forceUpdate()
  }
  render() { 
    
    return ( <Router>
      <React.Fragment>

        {sent == 1 ? <Route exact path= "/rsvp" component={Thanks}/> : <Route path="/rsvp" render={()=><Rsvp sentdata = {this.sentdata}/>}/> }
        
      <Route exact path= "/" component={Home}/> 
      <Route exact path= "/information" component={Information}/>
      <Route exact path= "/gifts" component={Gifts}/>

      </React.Fragment>   
   </Router> );
  }
}
 
export default App;

