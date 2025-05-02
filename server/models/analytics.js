const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
  portfolioId: { type: String, required: true },
  views: { type: Number, default: 0 },
  downloads: { type: Number, default: 0 },
});

module.exports = mongoose.model('Analytics', analyticsSchema);
