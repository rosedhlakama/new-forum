import React, { Component, Fragment } from 'react'

import Post from './Post'
import {fetchPosts} from '../actions'

class Africa extends Component {
    constructor(props){
        super(props)
        this.state = {
            subreddit: 'africa'
        }
    }
    componentDidMount(){
        this.props.dispatch(fetchPosts(this.state.subreddit))
        console.log(posts)
    }

    render(){
        return(
            <Fragment>
                <h1>News from Africa</h1>

            </Fragment>
        )
    }
}

export default Africa