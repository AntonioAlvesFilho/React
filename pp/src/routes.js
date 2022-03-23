import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './Container/Home'
import Users from './Container/Users'

function Routes() {

    return(
    <Router>
        <Route path='/' component={Home} />
        <Route path='/usuarios' component={Users}/>
    </Router>
    )
}
export default Routes