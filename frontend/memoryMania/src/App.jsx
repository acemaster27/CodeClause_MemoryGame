import React from 'react';
import { Brain, RefreshCw } from 'lucide-react';
import { useMemoryGame } from './hooks/useMemoryGame';
import Card from './components/Card';
import StatsBar from './components/StatsBar';
import Leaderboard from './components/Leaderboard';

const App = () => {
  const {
    cards,
    flippedCards,
    matchedPairs,
    moves,
    timer,
    highScores,
    initializeGame,
    handleCardClick
  } = useMemoryGame();

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-4 font-sans">
      
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold flex items-center justify-center gap-3 text-cyan-400 mb-2">
          <Brain className="w-10 h-10" /> Memory Match
        </h1>
        <p className="text-slate-400">Match the pairs to win!</p>
      </header>

      <StatsBar moves={moves} timer={timer} />

      <div className="grid grid-cols-4 gap-4 w-full max-w-md mb-8">
        {cards.map((card) => {
          const isFlipped = flippedCards.some(c => c.id === card.id) || matchedPairs.includes(card.icon);
          return (
            <Card 
              key={card.id} 
              card={card} 
              isFlipped={isFlipped} 
              onClick={handleCardClick} 
            />
          );
        })}
      </div>

      <div className="w-full max-w-md">
        <button 
          onClick={initializeGame}
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg mb-6"
        >
          <RefreshCw className="w-5 h-5" /> Reset Game
        </button>

        <Leaderboard highScores={highScores} />
      </div>
    </div>
  );
};

export default App;
