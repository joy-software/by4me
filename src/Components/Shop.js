import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Search from './SearchBar'


// The Roster component matches one of two different routes
// depending on the full pathname

const Shop = (props) => {
    const shop = () => (
        <Switch>

        </Switch>

    )

    return (
        <div>
            <Search></Search>
        </div>
    )
}


export default Shop