import {HashRouter as Router, Route} from 'react-router-dom'
import React from 'react'
import Home from './Home'
import Rsvp from './Rsvp'
import Information from './Information'

// class App extends React.Component {
//   constructor(props) {
//     super(props)

//   }

//   render() {
//     return (
//       <div>
//         <Home/>
        
//         {/* <Rsvp/> */}
//       </div>
//     )
//   }
// }

const App = () => {
  return (
    <Router>
        <div>
        <Route exact path= "/" component={Home}/> 
        <Route  path= "/rsvp" component={Rsvp}/> 
        <Route path= "/information" component={Information}/>
        </div>
        
     </Router>

      
  )
}

export default App