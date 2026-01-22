import { useState, useEffect } from 'react';
import { CARD_ICONS } from '../utils/constants';

export const useMemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [moves, setMoves] = useState(0);
  const [timer, setTimer] = useState(0);
  const [gameActive, setGameActive] = useState(false);
  const [highScores, setHighScores] = useState([]);

  // --- API Functions ---
  const fetchHighScores = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/scores');
      const data = await response.json();
      setHighScores(data);
    } catch (error) {
      console.error("Backend offline, using local state.");
    }
  };

  const saveScore = async (finalMoves, finalTime) => {
    try {
      await fetch('http://localhost:5000/api/scores', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ moves: finalMoves, time: finalTime }),
      });
      fetchHighScores();
    } catch (error) {
      console.error("Could not save score.");
    }
  };

  const initializeGame = () => {
    const shuffledCards = [...CARD_ICONS, ...CARD_ICONS]
      .sort(() => Math.random() - 0.5)
      .map((icon, index) => ({ id: index, icon }));

    setCards(shuffledCards);
    setFlippedCards([]);
    setMatchedPairs([]);
    setMoves(0);
    setTimer(0);
    setGameActive(true);
    fetchHighScores();
  };

  const handleCardClick = (id) => {
    if (
      !gameActive || 
      matchedPairs.includes(cards.find(c => c.id === id).icon) || 
      flippedCards.length === 2 || 
      flippedCards.some(card => card.id === id)
    ) {
      return;
    }

    const clickedCard = cards.find(c => c.id === id);
    const newFlipped = [...flippedCards, clickedCard];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(prev => prev + 1);
      const [first, second] = newFlipped;

      if (first.icon === second.icon) {
        setMatchedPairs(prev => [...prev, first.icon]);
        setFlippedCards([]);
      } else {
        setTimeout(() => setFlippedCards([]), 1000);
      }
    }
  };

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    let interval = null;
    if (gameActive && matchedPairs.length < CARD_ICONS.length) {
      interval = setInterval(() => setTimer(prev => prev + 1), 1000);
    } else if (matchedPairs.length === CARD_ICONS.length && gameActive) {
      clearInterval(interval);
      setGameActive(false);
      saveScore(moves, timer);
    }
    return () => clearInterval(interval);
  }, [gameActive, matchedPairs]);

  return {
    cards,
    flippedCards,
    matchedPairs,
    moves,
    timer,
    highScores,
    initializeGame,
    handleCardClick
  };
};

export default useMemoryGame;