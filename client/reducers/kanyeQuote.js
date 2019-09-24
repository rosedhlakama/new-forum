import {FETCH_QUOTE} from '../actions'

function kanyeQuote (state = '', action){
    switch (action.type){
        case FETCH_QUOTE:
            return action.quote 

        default:
            return state
    }
}
export default kanyeQuote