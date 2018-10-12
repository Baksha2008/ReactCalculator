import React, { Component } from 'react'
import './input.css'

export class Input extends Component {
    render() {
        return (
            <input type='text' className='input' value={this.props.input}></input>
        )
    }
}
