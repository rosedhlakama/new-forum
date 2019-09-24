import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import WaitIndicator from './WaitIndicator'
// import ErrorMessage from './ErrorMessage'

import LoadSubreddit from './LoadSubreddit'
import SubredditList from './SubredditList'
import Home from './Home'
import Africa from './Africa'
import KanyeQuote from './KanyeQuote'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='app'>
          
          <Route path='/' component={Home} />
          {/* <Route path='/' component={SubredditList} /> */}
          <Route path='/africa' component={Africa} />
          <Route path='/' component={LoadSubreddit} />
          <Route path='/' component={KanyeQuote} />
        </div>
      </Router>
    )
  }
}


export default App
