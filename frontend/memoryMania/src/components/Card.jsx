import React from "react";
import { Brain } from "lucide-react";

const Card = ({ card, isFlipped, onClick }) => {
	return (
		<div
			onClick={() => onClick(card.id)}
			className={`relative h-24 cursor-pointer transition-all duration-500 transform-style-3d ${
				isFlipped ? "rotate-y-180" : ""
			}`}
			style={{ perspective: "1000px" }}
		>
			<div className="absolute w-full h-full bg-slate-700 rounded-lg flex items-center justify-center border-2 border-slate-600 shadow-md backface-hidden">
				<Brain className="w-8 h-8 text-slate-500 opacity-50" />
			</div>

			<div className="absolute w-full h-full bg-linear-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-4xl shadow-lg backface-hidden rotate-y-180">
				{card.icon}
			</div>
		</div>
	);
};

export default Card;
