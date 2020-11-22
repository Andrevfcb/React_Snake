import React, {Component} from 'react';
import './App.css';
import Snake from './Snake';
import Food from './Food';
import Results from './Results';

const randomFood = () => {
  let max = 98;
  let x = Math.floor(Math.random()* (max/2))*2;
  let y = Math.floor(Math.random()* (max/2))*2;
  console.log(x);
  console.log(y);
  return [x,y]
}

class App extends Component {

  state = {
    snakeDots: [
      [0,0],
      [2,0],
      [4,0],
    ],
    food: randomFood(),
    direction: "RIGHT",
    start: false,
    numberOfDots: 0,
    bestResult: 0,
    numberOfGames: 0,
    onTail: false,
    kkk: false
  }

  componentDidMount() {
      document.onkeydown = this.onKeyDown
  }

  componentDidUpdate() { 
    this.checkIfEat();
    this.checkIfOutOfBorder();
    this.checkIfCollapsed();
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
    if (this.state.start === false && e.keyCode === 39) {
      setInterval(this.moveSnake, 100)
      this.state.start = true}
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

  checkIfEat = () => {
    let snake = [...this.state.snakeDots]
    let head = snake[snake.length - 1];
    let food = this.state.food;
    if(head[0] == food[0] && head[1] == food[1]) return (
      this.setState(prevState => {
        return {
        food: randomFood(),
        numberOfDots: prevState.numberOfDots + 1
      }}),
      snake.unshift([]),
      this.setState({
        snakeDots: snake
      })
      )
   }

  checkIfOutOfBorder = () => {
    let snake = [...this.state.snakeDots]
    let head = snake[snake.length - 1];
    if(head[0] == 100 || head[1] == 100 || head[0] < 0|| head[1] < 0) return this.onGameOver();
   }

  checkIfCollapsed = () => {
    let snake = [...this.state.snakeDots];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach(dot => {
      if(head[0] == dot[0] && head[1] == dot[1]) return this.onGameOver();
    })
  }

  startTitle = () => {
    if(!this.state.start)return <h3>PRESS RIGHT BUTTON TO START THE GAME</h3>
    else return null
  }

  onGameOver() {
    alert(`GAME OVER! Your score: ${this.state.numberOfDots}`)
    if (this.state.numberOfDots > this.state.bestResult){
      this.setState({bestResult: this.state.numberOfDots})
    }
      this.setState({
        snakeDots: [
          [0,0],
          [2,0],
          [4,0],
        ],
        food: randomFood(),
        direction: "RIGHT",
        numberOfDots: 0,
        numberOfGames: this.state.numberOfGames + 1
      })
  }

  render() {
  return (
    <>
      <Results numberOfGames={this.state.numberOfGames} bestResult={this.state.bestResult} startTitle={this.startTitle()} />
    <div className="game-area">
      <Snake snakeDot={this.state.snakeDots}/>
      <Food food={this.state.food}/>
    </div>
    </>
  );
}}

export default App;
