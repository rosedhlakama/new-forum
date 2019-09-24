import {combineReducers} from 'redux'

import errorMessage from './error-message'
import subreddits from './subreddits'
import waiting from './waiting'
import kanyeQuote from './kanyeQuote'

export default combineReducers({
  errorMessage,
  subreddits,
  waiting,
  kanyeQuote
})
