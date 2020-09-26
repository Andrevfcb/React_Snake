import React, {Component} from 'react';
import './App.css';
import Snake from './Snake';



class App extends Component {

  state = {
    snakeDots: [
      [0,0],
      [2,0],
      [4,0],
    ]
  }
  render() {
  return (
    <div className="game-area">
      <Snake snakeDot={this.state.snakeDots}/>
    </div>
  );
}}

export default App;
