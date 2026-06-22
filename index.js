const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// simple free AI fallback brain (always works)
function brain(message) {
  message = message.toLowerCase();

  if (message.includes("hello") || message.includes("hi")) {
    return "Hello 👋";
  }

  if (message.includes("your name")) {
    return "I'm a free AI Roblox NPC.";
  }

  if (message.includes("how are you")) {
    return "I'm doing great!";
  }

  if (message.includes("what are you")) {
    return "I'm an AI chatbot inside Roblox.";
  }

  if (message.includes("help")) {
    return "Ask me anything and I'll respond!";
  }

  const replies = [
    "Interesting...",
    "Tell me more.",
    "I see.",
    "Why do you think that?",
    "Hmm..."
  ];

  return replies[Math.floor(Math.random() * replies.length)];
}

app.post("/chat", (req, res) => {
  const msg = req.body.message || "";
  const reply = brain(msg);

  res.json({ reply });
});

// IMPORTANT FOR RENDER
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("FREE AI SERVER RUNNING on", PORT);
});
