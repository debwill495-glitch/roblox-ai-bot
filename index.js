const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");

const app = express();
app.use(cors());
app.use(express.json());

// OpenAI setup
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// AI route
app.post("/chat", async (req, res) => {
  try {
    const message = req.body.message;

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a friendly Roblox NPC chatbot. Keep replies short and natural." },
        { role: "user", content: message }
      ]
    });

    res.json({
      reply: response.choices[0].message.content
    });

  } catch (e) {
    console.log(e);
    res.json({ reply: "AI error." });
  }
});

// ✅ FIXED PORT (RENDER REQUIRED)
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("AI server running on port", PORT);
});
