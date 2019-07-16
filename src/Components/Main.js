import React from 'react'
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom'
import Home from './Home'
import Bid from './Bid'
import Shop from './Shop'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
    <main>
        <Router>
        <Switch>
            <Route exact path='/' component={Home}/>
            < Route path='/bid' component={Bid}/>
            <Route path='/shop' component={Shop}/>
        </Switch>
        </Router>
    </main>
)

export default Main