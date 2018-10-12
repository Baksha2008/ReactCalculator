import React, { Component } from 'react';
import './App.css';
import { Button } from './components/button';
import { Input } from './components/input';
import { ClearButton } from './components/clearButton';
import * as math from 'mathjs'

export class App extends Component {
  state = {
    input: ''
  }
  getInputValue = (e) => {
    this.setState({
      input: this.state.input += e.target.value
    })
  }
  clearInput = () => {
    this.setState({
      input: ''
    })
  }
  eval = () => {
    this.setState({
      input: math.eval(this.state.input)
    })
  }
  render() {
    const { input } = this.state
    return (
      <div className="App">
        <div className='container'>
          <Input input={this.getInputValue}
            input={input}
          />
          <div className='row'>
            <Button
              getInputValue={this.getInputValue}
              eval={this.eval}
            />
          </div>
          <ClearButton clearInput={this.clearInput} />
        </div>
      </div>
    );
  }
}


