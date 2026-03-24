//This includes the attributes that is fed into the AI by the user to generate a roadmap.

const mongoose = require('mongoose');

const RoadmapSchema = new mongoose.Schema({
    skill: { type: String, required: true },
    goal: { type: String, required: true },
    currentLevel: { type: String, required: true },
    targetLevel: { type: String, required: true },
    timePerDay: { type: String },
    totalDuration: { type: String },
    learningStyle: { type: String },

    steps: [
        {
            id: Number,
            topic: String,
            description: String,
            validation_task: String 
        }
    ],
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Roadmap', RoadmapSchema);