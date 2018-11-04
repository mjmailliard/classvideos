import React from 'react' 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Album from './pages/Album';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
// import ButtonAppBar from './components/ButtonAppBar'
 
const Routing = () => (

<Router>
    <Switch>
    <Route  exact path="/" component={Home} />
    <Route path="/Login" component={SignIn} />
    <Route path="/VideoLibrary" component={Album} />
    
    </Switch>
</Router>
)
export default Routing 