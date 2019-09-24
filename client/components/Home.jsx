import React, { Component, Fragment } from 'react'

import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <Fragment>
                <h1>The People's News</h1>
                <h5> News by the people for the people</h5>
                <div>
                    <Link to='/'>Home</Link>
                </div>
                <div>
                    <Link to='/newzealand'>New Zealand</Link>
                </div>
                <div>
                    <Link to='/australia'>Australia</Link>
                </div>
                <div>
                    <Link to='/africa'>Africa</Link>
                </div>
            </Fragment>
        )
    }
}

export default Home