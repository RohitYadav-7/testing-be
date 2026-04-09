const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL || "*";

app.use(
  cors({
    origin: CLIENT_URL === "*" ? true : CLIENT_URL,
  })
);
app.use(express.json());

app.get("/", (_req, res) => {
  res.status(200).json({
    ok: true,
    service: "testing-be",
    message: "Service is up",
  });
});

app.get("/health", (_req, res) => {
  res.status(200).json({
    ok: true,
    service: "testing-be",
    timestamp: new Date().toISOString(),
  });
});

app.get("/api/message", (_req, res) => {
  res.status(200).json({
    message: "Backend is running successfully",
  });
});

app.listen(PORT, () => {
  console.log(`testing-be running on port ${PORT}`);
});
