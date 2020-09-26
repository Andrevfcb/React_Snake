import React, {Component} from 'react';
import './App.css';
import Snake from './Snake';
import Food from './Food';



class App extends Component {

  state = {
    snakeDots: [
      [0,0],
      [2,0],
      [4,0],
    ],
    food: [6,6]
  }
  render() {
  return (
    <div className="game-area">
      <Snake snakeDot={this.state.snakeDots}/>
      <Food food={this.state.food}/>
    </div>
  );
}}

export default App;
