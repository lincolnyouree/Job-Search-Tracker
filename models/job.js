const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  
}, {
  timestamps: true
});

module.exports = mongoose.model('Job', jobSchema);
