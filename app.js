const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("HNGx Stage one task [dyCodes]");
});

app.get("/api", (req, res) => {
	console.log(req.query);
	res.send(req.query);
});

app.listen(8000, () => {
	console.log(` listening on port 8000`);
});
