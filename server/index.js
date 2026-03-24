const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const ollama = require('ollama').default || require('ollama');
require('dotenv').config();

const Roadmap = require('./models/Roadmap');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/skillsync')
    .then(() => console.log("✅ Database Connected!"))
    .catch(err => console.log("❌ DB Connection Error:", err));

/*Post - generation route
- Destructures the input from the user and validates it to ensure it has the necessary input before sending to AI
*/
app.post('/api/generate-roadmap', async (req, res) => {
    const { 
        skill, 
        goal, 
        currentLevel, 
        targetLevel, 
        timePerDay, 
        totalDuration, 
        learningStyle 
    } = req.body;

    if (!skill || !goal) {
        return res.status(400).json({ error: "Skill and Goal are required!" });
    }

    try {
        console.log(`🔎 Brainstorming ${skill} roadmap for the next ${totalDuration}...`);

        const systemPrompt = `
        You are an elite technical mentor. Create a custom learning roadmap.
        SKILL: ${skill}
        OBJECTIVE: ${goal}
        STUDENT PROFILE: Moving from ${currentLevel} to ${targetLevel}.
        STYLE: ${learningStyle} learning.
        SCHEDULE: ${timePerDay} per day for ${totalDuration}.

        STRICT RULE: Return ONLY a JSON object. 
        Format:
        {
          "steps": [
            { "id": 1, "topic": "Name", "description": "Details", "validation_task": "One specific coding task" }
          ]
        }`;

        const response = await ollama.chat({
            model: 'tinydolphin',
            messages: [{ role: 'user', content: systemPrompt }],
            format: 'json',
        });

        const roadmapData = JSON.parse(response.message.content);

        //Saving to MongoDB
        const newRoadmap = new Roadmap({
            skill,
            goal,
            currentLevel,
            targetLevel,
            timePerDay,
            totalDuration,
            learningStyle,
            steps: roadmapData.steps || []
        });

        const savedData = await newRoadmap.save();
        console.log("Success! Roadmap stored in Memory.");
        res.json(savedData);

    } catch (error) {
        console.error("Generation Error:", error.message);
        res.status(500).json({ error: "AI failed to respond. Check if Ollama is running." });
    }
});

// Retrieval of data
app.get('/api/roadmaps', async (req, res) => {
    try {
        const history = await Roadmap.find().sort({ createdAt: -1 });
        res.json(history);
    } catch (error) {
        res.status(500).json({ error: "Could not fetch history." });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`SkillSync Backend is ready at http://localhost:${PORT}`);
});