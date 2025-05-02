const express = require('express');
const Analytics = require('../models/analytics');
const router = express.Router();

// API to increment views
router.post('/:portfolioId/view', async (req, res) => {
  const { portfolioId } = req.params;

  try {
    const analytics = await Analytics.findOneAndUpdate(
      { portfolioId },
      { $inc: { views: 1 } },
      { upsert: true, new: true }
    );

    res.json(analytics);
  } catch (error) {
    res.status(500).json({ error: 'Error updating views' });
  }
});

// API to increment downloads
router.post('/:portfolioId/download', async (req, res) => {
  const { portfolioId } = req.params;

  try {
    const analytics = await Analytics.findOneAndUpdate(
      { portfolioId },
      { $inc: { downloads: 1 } },
      { upsert: true, new: true }
    );

    res.json(analytics);
  } catch (error) {
    res.status(500).json({ error: 'Error updating downloads' });
  }
});

module.exports = router;
