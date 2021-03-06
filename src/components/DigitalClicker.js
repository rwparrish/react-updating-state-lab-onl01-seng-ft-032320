import React, { Component } from 'react'

class DigitalClicker extends Component {

    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    handleOnClick = () => {
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleOnClick}>{this.state.timesClicked}</button>
            </div>
        )
    }
}

export default DigitalClicker
