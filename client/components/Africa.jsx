import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'


import {fetchPosts} from '../actions'
import SubredditList from './SubredditList';

class Africa extends Component {
    constructor(props){
        super(props)
        this.state = {
            subreddit: 'africa'
        }
    }
    componentDidMount() {
        this.props.dispatch(fetchPosts(this.state.subreddit))
       
    }

    render(){
        return(
            <Fragment>
                <h1>News from Africa</h1>
                <SubredditList />
            </Fragment>
        )
    }
}

export default connect()(Africa)