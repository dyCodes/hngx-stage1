const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("HNGx Stage one task [dyCodes]");
});

app.get("/api", (req, res) => {
	if (!req.query.slack_name || !req.query.track) {
		return res.status(400).json({
			error: "slack_name and track are required parameters",
		});
	}
	// Create a profile object
	const profile = {
		slack_name: req.query.slack_name,
		current_day: new Date().toLocaleDateString("en-US", { weekday: "long" }),
		utc_time: new Date().toISOString(),
		track: req.query.track,
		github_file_url: "https://github.com/dyCodes/stage1-hngx/blob/main/app.js",
		github_repo_url: "https://github.com/dyCodes/stage1-hngx",
		status_code: 200,
	};

	// Return the profile as a JSON object
	res.json(profile);
});

app.listen(8000, () => {
	console.log(` listening on port 8000`);
});
