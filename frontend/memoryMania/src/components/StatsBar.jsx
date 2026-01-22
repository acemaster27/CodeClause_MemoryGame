import React from 'react';
import { RefreshCw, Clock } from 'lucide-react';

const StatsBar = ({ moves, timer }) => {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="flex gap-8 mb-8 bg-slate-800 p-4 rounded-xl shadow-lg w-full max-w-md justify-between">
      <div className="flex items-center gap-2">
        <RefreshCw className="w-5 h-5 text-cyan-400" />
        <span className="font-mono text-xl text-white">{moves} Moves</span>
      </div>
      <div className="flex items-center gap-2">
        <Clock className="w-5 h-5 text-cyan-400" />
        <span className="font-mono text-xl text-white">{formatTime(timer)}</span>
      </div>
    </div>
  );
};

export default StatsBar;