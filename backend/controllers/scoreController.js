const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "../data/scores.json");

const readScores = () => {
	try {
		const data = fs.readFileSync(DATA_FILE, "utf8");
		return JSON.parse(data);
	} catch (error) {
		return [];
	}
};

const writeScores = (scores) => {
	fs.writeFileSync(DATA_FILE, JSON.stringify(scores, null, 2));
};

const getScores = (req, res) => {
	const scores = readScores();
	res.json(scores);
};

const addScore = (req, res) => {
	const { moves, time } = req.body;

	if (moves && time) {
		let scores = readScores();

		scores.push({ moves, time });

		scores.sort((a, b) => {
			if (a.moves === b.moves) return a.time - b.time;
			return a.moves - b.moves;
		});

		const topThree = scores.slice(0, 3);

		writeScores(topThree);

		res.status(201).json({ message: "Score saved", scores: topThree });
	} else {
		res.status(400).json({ message: "Invalid data" });
	}
};

module.exports = { getScores, addScore };
