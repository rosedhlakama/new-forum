import React from 'react'
import {connect} from 'react-redux'

import Post from './Post'

const Subreddit = ({subreddits}) => (

  <div className="subreddit-list">
    {subreddits.map((post, i) =>
    
      <Post
        key={i}
        post = {post}
      />
    )}
  </div>
)

const mapStateToProps = (state) => {
  return {
    subreddits: state.subreddits
  }
}

export default connect(mapStateToProps)(Subreddit)
