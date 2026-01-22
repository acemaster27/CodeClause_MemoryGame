import React from 'react';
import { Trophy } from 'lucide-react';

const Leaderboard = ({ highScores }) => {
  if (highScores.length === 0) return null;

  return (
    <div className="bg-slate-800 p-4 rounded-xl w-full">
      <h3 className="text-lg font-bold flex items-center gap-2 mb-3 text-yellow-400">
        <Trophy className="w-5 h-5" /> Top Scores
      </h3>
      <ul className="space-y-2">
        {highScores.slice(0, 3).map((score, i) => (
          <li key={i} className="flex justify-between text-sm text-slate-300 border-b border-slate-700 pb-1 last:border-0">
            <span>Player {i + 1}</span>
            <span className="font-mono">{score.moves} Moves in {score.time}s</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;