const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { Configuration, OpenAIApi } = require('openai');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// OpenAI Configuration
const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })
);

// Routes
app.post('/api/generate', async (req, res) => {
  const { name, skills, projects, bio } = req.body;

  try {
    const prompt = `
      Create a professional portfolio for this user:
      Name: ${name}
      Skills: ${skills.join(', ')}
      Projects: ${projects.map(p => p.title).join(', ')}
      Bio: ${bio}
    `;

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      max_tokens: 200,
    });

    return res.status(200).json({ content: response.data.choices[0].text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error generating portfolio content" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
