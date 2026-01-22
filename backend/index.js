const express = require("express");
const bodyParser = require("body-parser");
const scoreRoutes = require("./routes/scoreRoutes");

const app = express();
const { PORT } = require("./config");

const setupAndStartServer = () => {
	app.use(cors());
	app.use(bodyParser.json());

	app.use("/api/scores", scoreRoutes);

	app.listen(PORT, () => {
		console.log(`Server running on port:${PORT}`);
	});
};

setupAndStartServer();
