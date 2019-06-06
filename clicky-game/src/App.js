import React from 'react';
import cards from "./cards.json"
import './App.css';
import Wrapper from './components/Wrapper/wrapper.js';
import Card from './components/cards/card'

class App extends React.Component {
  state = {

    score: 0,
    TopScore: 0,
    message: "",
    shuffleCards: false,
    clickedArray: [],
    cards: cards,
    images: []
  };


  componentDidMount() {
    console.log(cards)
  }
  //arrange picture in a randon manner
  clickCount = id => {
    console.log("item.clicked", id, this.state.score, this.state.clickedArray)


/// verify if the pic was click before (having an array with all hte pic clicked), if yes  loss and restart //   uf not then you need add clicked array and shuffle and set the state and render

    
      //if clicked on an image already, set state to this.state.score=0, empty 
      if (this.state.clickedArray.includes(id)) {
        const shuffledArray = this.shuffleArray(cards);
        console.log("lose")
        this.setState({
          

          score: 0, clickedArray: [], cards: shuffledArray, message: "you Lose!!! Click an image to start again!",
          shakeit: 'true'
        });

      }
      else {
        console.log("next one")
        const shuffledArray = this.shuffleArray(cards);
        const clickedArray = this.state.clickedArray
        clickedArray.push(id)
      //this.setstate({ cards: shuffledArray })
          
        this.setState({
          cards: shuffledArray,
          clickedArray: clickedArray,
          score: this.state.score + 1,
          message: "correct",
          shakeit: "false"
        });
      }
      if (this.state.score > this.state.TopScore) {
        this.setState({ TopScore: this.setState.score });
      }

  }

  shuffleArray = cards => {

    let newcards = cards.sort(() => Math.random() - 0.5);
    return newcards;
  }







//map over this.state.cards and render a card component for each card object
  render() {
    return (
      <Wrapper>
        <header scare={this.state.score}
        highScore={this.state.highScore}
        >
          <h1>Clicky Game</h1>
        </header>
        {this.state.cards.map(cards =>(
          <Card
            clickCount={this.clickCount}
            id={cards.id}
            key={cards.id}
            image={cards.image}
            />

        ))}
        
      </Wrapper>

    );
  }
}

export default App;
