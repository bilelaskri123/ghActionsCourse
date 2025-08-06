require("dotenv").config();
const express = require("express");
const axios = require("axios");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/incident_report", async (req, res) => {
  const { GITHUB_TOKEN, GITHUB_REPO, GITHUB_OWNER } = process.env;

  if (!GITHUB_TOKEN || !GITHUB_OWNER || !GITHUB_REPO) {
    return res
      .status(500)
      .send("Missing GitHub credentials in environment variables.");
  }

  const githubApiUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/dispatches`;

  try {
    const response = await axios.post(
      githubApiUrl,
      {
        event_type: "incident_report",
        client_payload: {
          message: "Hello from Express.js!",
          data: req.body.data, // You can pass data from your request body
        },
      },
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
        },
      }
    );

    console.log("GitHub API response:", response.status);
    res.status(200).send("Workflow dispatched successfully!");
  } catch (error) {
    console.error(
      "Error dispatching workflow:",
      error.response ? error.response.data : error.message
    );
    res.status(500).send("Failed to dispatch workflow.");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
