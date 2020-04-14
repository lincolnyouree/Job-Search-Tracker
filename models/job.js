const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new mongoose.Schema({
  position: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  contact: {
    type: String
  },
  dateApplied: {
    type: String
  },
  status: {
    type: String
  },
  notes: {
    type: String
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Job', jobSchema);