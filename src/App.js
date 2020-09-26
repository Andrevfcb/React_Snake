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
    food: [6,6],
    direction: "RIGHT"
  }

  componentDidMount() {
    setInterval(this.moveSnake, 100);
    document.onkeydown = this.onKeyDown;
  }

  moveSnake = () => {
    let dots = [...this.state.snakeDots];
    let head = dots[dots.length - 1];
    switch (this.state.direction) {
       case 'RIGHT':
         head = [head[0] + 2, head[1]]
         break;
         case 'LEFT':
         head = [head[0] - 2, head[1]]
         break;
         case 'UP':
         head = [head[0], head[1] - 2]
         break;
         case 'DOWN':
         head = [head[0], head[1] + 2]
         break;
     }
     dots.push(head);
     dots.shift();
     this.setState({
       snakeDots: dots
     })
  }

  onKeyDown = (e) => {
    switch (e.keyCode) {
      case 38:
         this.setState({direction: 'UP'})
         break;
      case 40:
          this.setState({direction: 'DOWN'})
         break;
      case 37:
          this.setState({direction: 'LEFT'})
         break;
      case 39:
          this.setState({direction: 'RIGHT'})
         break;
    }
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
