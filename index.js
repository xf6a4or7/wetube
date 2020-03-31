import express from "express";

const app = express();

const PORT = 4000;

const handleListening = (req, res) => {
  console.log(`Listening on http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);

const handleHome = (req, res) => {
  res.send("Hello from home");
};

const handleProfile = (req, res) => {
  res.send("You are on my profile");
};

app.get("/", handleHome);

app.get("/profile", handleProfile);
