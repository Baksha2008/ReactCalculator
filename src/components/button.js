import React, { Component } from 'react'
import './button.css'

export class Button extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <button value='7' onClick={this.props.getInputValue} className='otherbtn' >7</button>
                    <button value='8' onClick={this.props.getInputValue} className='otherbtn' >8</button>
                    <button value='9' onClick={this.props.getInputValue} className='otherbtn' >9</button>
                    <button value='/' onClick={this.props.getInputValue} className='operator' >/</button>
                </div>
                <div className="row">
                    <button value='4' onClick={this.props.getInputValue} className='otherbtn' >4</button>
                    <button value='5' onClick={this.props.getInputValue} className='otherbtn' >5</button>
                    <button value='6' onClick={this.props.getInputValue} className='otherbtn' >6</button>
                    <button value='*' onClick={this.props.getInputValue} className='operator' >*</button>
                </div>
                <div className="row">
                    <button value='1' onClick={this.props.getInputValue} className='otherbtn' >1</button>
                    <button value='2' onClick={this.props.getInputValue} className='otherbtn' >2</button>
                    <button value='3' onClick={this.props.getInputValue} className='otherbtn' >3</button>
                    <button value='-' onClick={this.props.getInputValue} className='operator' >-</button>
                </div>
                <div className="row">
                    <button value='.' onClick={this.props.getInputValue} className='otherbtn' >.</button>
                    <button value='0' onClick={this.props.getInputValue} className='otherbtn' >0</button>
                    <button value='=' onClick={this.props.eval} className='equally' >=</button>
                    <button value='+' onClick={this.props.getInputValue} className='operator' >+</button>
                </div>
            </React.Fragment>
        )
    }
}
