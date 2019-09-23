import React, { Component, Fragment } from 'react'

import { Link } from 'react-router-dom'

class Home extends Component {
    render(){
        return(
            <Fragment>
                <h1>The People's News</h1>
                <h5> News by the poeple for the people</h5>
                <Link to='/newzealand'>New Zealand</Link>
                <Link to='/australia'>Australia</Link>
                <Link to='/africa'>Africa</Link>
            
            </Fragment>
        )
    }
}

export default Home