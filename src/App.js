import { useState } from 'react';
import './App.css';

const cardImages = [
  { "src": "/img/Brachiosaurio.jpg" },
  { "src": "/img/Espinosaurio.jpg" },
  { "src": "/img/Paraserolofus.jpg" },
  { "src": "/img/TRex.jpg" },
  { "src": "/img/Triceratops.jpg" },
  { "src": "/img/Velociraptor.jpg" },
]

function App() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  // Shuffle Cards
  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffleCards)
    setTurns(0)
  }

  console.log(cards, turns)

  return (
    <div className="App">
      <h1>Magic match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <div key={card.id} className="card">
            <div>
              <img src={card.src} className="front" alt="card Front"/>
              <img src="/img/cover.jpg" className="back" alt="card Back"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
