import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const FETCH_QUOTE = 'FETCH_QUOTE'

export const requestPosts = () => {
  return {
    type: REQUEST_POSTS
  }
}

export const receivePosts = (posts) => {
  return {
    type: RECEIVE_POSTS,
    posts: posts.map(post => post.data)
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export function fetchPosts (subreddit) {
  return (dispatch) => {
    dispatch(requestPosts())
    return request
      .get(`/api/v1/reddit/subreddit/${subreddit}`)
      .then(res => {
        dispatch(receivePosts(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

export const fetchQuote = (quote) => {
  return{
    type: FETCH_QUOTE,
    quote
   }
}

export function receiveQuote () {
  return(dispatch) => {
   return request
    .get('/api/v1/reddit/kanye')
    .then(res => {
      // console.log(res.body)
      dispatch(fetchQuote(res.body))

    })
  }
}