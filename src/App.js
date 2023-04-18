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

function App() {
    const [currentScore, setCurrentScore] = React.useState(0);

    const [highscore, setHighscore] = React.useState(0);

    const [cardTouch, setCardTouch] = React.useState([false, false, false, false,
        false, false, false, false, false])

    const images = [fox, elephant, horse, koala, mosquito, rhino, snake, zebra]

    function renderCards() {
        return images.map(name => <Card image={name}/>)
    }

    return (
        <div>
            <header>
                <p>current score: {currentScore}</p>
                <p>highscore: {highscore}</p>
                <hr/>
            </header>
            <div className="container">
                {renderCards()}
            </div>
        </div>
    );
}

export default App;
