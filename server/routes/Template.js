const express = require('express');
const router = express.Router();

// Mock template data
const templates = [
  {
    id: 1,
    name: "Modern",
    description: "A clean, modern design with a focus on simplicity.",
    previewURL: "/assets/templates/modern-preview.png",
  },
  {
    id: 2,
    name: "Creative",
    description: "A vibrant and creative design for showcasing unique projects.",
    previewURL: "/assets/templates/creative-preview.png",
  },
  {
    id: 3,
    name: "Minimalist",
    description: "A minimalist design with a focus on typography.",
    previewURL: "/assets/templates/minimalist-preview.png",
  },
];

// API to fetch templates
router.get('/', (req, res) => {
  res.json(templates);
});

module.exports = router;
