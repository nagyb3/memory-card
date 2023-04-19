import React from "react"
import Card from "./components/Card"
import fox from "./images/fox.png"
import elephant from "./images/elephant.png"
import horse from "./images/horse.png"
import koala from "./images/koala.png"
import mosquito from "./images/mosquito.png"
import rhino from "./images/rhino.png"
import snake from "./images/snake.png"
import zebra from "./images/zebra.png"
import "./App.css"
import {compareArraysAsSet} from "@testing-library/jest-dom/dist/utils";

function App() {
    const [currentScore, setCurrentScore] = React.useState(0);

    const [highscore, setHighscore] = React.useState(0);

    const [cardTouch, setCardTouch] = React.useState([false, false, false, false,
        false, false, false, false, false])

    const images = [{index: 0, image: fox},
        {index: 1, image: elephant},
        {index: 2, image: koala},
        {index: 3, image: mosquito},
        {index: 4, image: rhino},
        {index: 5, image: snake},
        {index: 6, image: zebra},
        {index: 7, image: horse}]

    function shuffle(array) {
        let newarr = [];
        let n = array.length;
        let i;

        while(n) {
            i = Math.floor(Math.random() * array.length)

            if (i in array) {
                newarr.push(array[i]);
                delete array[i];
                n--;
            }
        }
        return newarr
    }

    function handleClick(index) {
        console.log(index)
        if (cardTouch[index] === false) {  //user clicked on good card
            let newarr = [];
            for (let i = 0; i < cardTouch.length; i++) {
                if (i !== index) {
                    newarr.push(cardTouch[i])
                } else {
                    newarr.push(true)
                }
            }
            setCardTouch(newarr) //update state
            setCurrentScore(prevState => (prevState + 1)) //set current score
        } else { //user clicked on bad card
            setCurrentScore(0)              //reset score
            setCardTouch([false, false, false, false, false, false, false, false, false]) //set state
        }
    }

    if (currentScore > highscore) {
        setHighscore(currentScore)
    }
    // console.log(currentScore, highscore)

    function renderCards() {
        let shuffledImages = shuffle(images)
        return shuffledImages.map((arrayElement, i) => <Card handleClick={handleClick} key={i} index={arrayElement.index} name={arrayElement.image} handleClass="card" image={arrayElement.image}/>)
    }

    return (
        <div>
            <header>
                <p>current score: {currentScore}</p>
                <p>highscore: {highscore}</p>
                <hr/>
            </header>
            <main>
                <div className="container">
                    {renderCards()}
                </div>
            </main>
        </div>
    );
}

export default App;
