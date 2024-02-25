import './App.css'
import { Component } from 'react';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0,
    }
  }

  handleClick = (operator) => {
    if(operator === "+"){
      this.setState({counter: this.state.counter + 1})
    }else {
      this.setState({counter: this.state.counter - 1})
    }
  }

  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <br />
        <p>Count: {this.state.counter}</p>
        <br />
        <button onClick={() => this.handleClick("+")} style={{width: "100px"}}>Increment</button>
        <button onClick={() => this.handleClick("-")} style={{width: "100px"}}>Decrement</button>
      </div>
    )
  }
  
}

export default App;

