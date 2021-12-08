import './SingleCard.css'

export default function SingleCard({ card, handleChoice, flipped, disabled }){
  
  const handleClick = () => {
    if (!disabled){
      handleChoice(card)
    }
  }

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img src={card.src} className="front" alt="card Front"/>
        <img src="/img/cover.jpg" className="back" alt="card Back" onClick={handleClick}/>
      </div>
    </div>
  )
}