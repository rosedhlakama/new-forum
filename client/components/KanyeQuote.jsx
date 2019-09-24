import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';

import { receiveQuote } from '../actions'

class KanyeQuote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            kanyeQuote: 'kanye said'
        }
    }

    componentDidMount() {
        this.props.dispatch(receiveQuote())
      
    }


    render() {

        const { quote } = this.props

        return (
        quote ? (
            <Fragment>
                <h4> From the Kanye desk</h4>
                <p id="kanye-quote">
                    {this.props.quote.quote}
                </p>
                <p>Endorsement from President Barack Obama "Kanye West. What a douchebag!"</p>
            </Fragment>
        ): <p></p>
        )
    }
}



const mapStateToProps = (state) => {
    return{
        quote: state.kanyeQuote
    }
}
export default connect(mapStateToProps)(KanyeQuote)