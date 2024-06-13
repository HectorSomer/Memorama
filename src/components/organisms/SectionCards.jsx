import React, { useState, useEffect } from 'react';
import './SectionCards.css';
import Card from '../molecules/Card';
import images from "../../data/images.js";
import Title from '../atoms/Title.jsx';
import Button from '../atoms/Button.jsx';
import Label from '../atoms/Label.jsx';
import Swal from "sweetalert2";
const initialImages = images.persons;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function SectionCards() {
  const [cards, setCards] = useState([]);
  const [flippedCardIds, setFlippedCardIds] = useState([]);
  const [matchedCardIds, setMatchedCardIds] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const shuffledCards = shuffleArray([...initialImages]);
    setCards(shuffledCards);
  }, []);
  const handleClickRestart = ()=>{
    const shuffledCards = shuffleArray([...initialImages]);
    setCards(shuffledCards);
    setFlippedCardIds([]);
    setMatchedCardIds([]);
    setCount(0);
  }
  const handleCardClick = (id) => {
    if (flippedCardIds.length < 2 && !flippedCardIds.includes(id) && !matchedCardIds.includes(id)) {
      setFlippedCardIds([...flippedCardIds, id]);
      if (flippedCardIds.length === 1) {
        setCount(count + 1);
      }
      if (flippedCardIds.length === 1) {
        const firstId = flippedCardIds[0];
        const firstCard = cards.find(card => card.id === firstId);
        const secondCard = cards.find(card => card.id === id);
        if (firstCard && secondCard && firstCard.id !== secondCard.id && firstCard.back === secondCard.back) {
          setMatchedCardIds([...matchedCardIds, firstId, id]);
        }
        setTimeout(() => {
          setFlippedCardIds([]);
        }, 1000);
      }
    }
  };
  useEffect(() => {
    if (matchedCardIds.length === initialImages.length) {
      setTimeout(() => {
        const shuffledCards = shuffleArray([...initialImages]);
        setCards(shuffledCards);
        setFlippedCardIds([]);
        setMatchedCardIds([]);
        setCount(0);
        Swal.fire({
            title: "¡Felicidades!",
            text: "Haz completado el memorama, ganaste",
            width: 600,
            padding: "3em",
            color: "#e3f59b",
            background: "#fff url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbG667_kcTJgDcJjbnAjihxR4T7Fb4S8Cdqg&s)",
            backdrop: `
              rgba(0,0,123,0.4)
    url("https://sweetalert2.github.io/images/nyan-cat.gif")
    center top
    no-repeat
  `
          });
      }, 1500); 
    }
  }, [matchedCardIds]);

  return (
    <div className="app-container">
    <div> <Title title="Memorama"></Title>
    <Button onClick={handleClickRestart}></Button>
    <Label text={"Movimientos: "+count}></Label></div>
      <div className="card-grid">
        {cards.map(card => (
          <Card
            key={card.id}
            id={card.id}
            frontImage={card.front}
            backImage={card.back}
            flippedCard={flippedCardIds.includes(card.id) || matchedCardIds.includes(card.id)}
            matchedCard={matchedCardIds.includes(card.id)}
            onClick={() => handleCardClick(card.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default SectionCards;