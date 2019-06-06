import React from 'react';
import cards from "./cards.json"
import './App.css';

class App extends React.Component {
  state = {

    score: 0,
    TopScore: 0,
    message: "",
    shuffleCards: false,
    clickedArray: [],
    cards: cards,
    images: [{
      "id": 1,
      "name": "Bugs Bunny",
      "image": "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Bugs_Bunny.svg/220px-Bugs_Bunny.svg.png",
      "occupation": "Eats Carrots",
      "location": "Space Jam"
    },
    {
      "id": 2,
      "name": "Homer Simpson",
      "image": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn3.f-cdn.com%2Fcontestentries%2F1369261%2F17629740%2F5b48bf3491050_thumb900.jpg&imgrefurl=https%3A%2F%2Fwww.freelancer.com%2Fcontest%2FCreate-Cartoon-Characters-Smoking-Weed-1369261-byentry-22057609&docid=NYTfwopPDVpsUM&tbnid=FW2KyeIpQJw8EM%3A&vet=10ahUKEwiY2ID407DiAhWEl-AKHcwTBaoQMwiIASgPMA8..i&w=900&h=600&bih=871&biw=1078&q=cartoon%20characters&ved=0ahUKEwiY2ID407DiAhWEl-AKHcwTBaoQMwiIASgPMA8&iact=mrc&uact=8",
      "occupation": "make his father's life miserable",
      "location": "Springfield"
    },]
  };


  componentDidMount() {
    console.log(cards)
  }
  //arrange picture in a randon manner
  clickPicture = id => {
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








  render() {
    return (
      <div className="list-group">
        {this.state.cards.map(item => (
          <div>
          <p className="list-group-item" >

            {item.name}
          </p>

          <img src={item.image} alt="" id={item.id} onClick={() => this.clickPicture(item.id)}  />
          </div>
      ))}
      </div>

    );
  }
}

export default App;
