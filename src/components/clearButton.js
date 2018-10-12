import React, { Component } from 'react'
import './clearButton.css'

export class ClearButton extends Component {
    render() {
        const { clearInput } = this.props
        return (
            <button className="clear-btn" onClick={clearInput}>
                CLEAR
            </button>
        )
    }
}
