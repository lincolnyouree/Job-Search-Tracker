var Job = require('../models/job');
var User = require('../models/user');

module.exports = {
  index,
  create, 
  show,
  update,
  delete: deleteOne 
};

async function index(req, res) {
  try{
      const jobs = await Job.find({});
      res.status(200).json(jobs);
  }
  catch(err){
      res.status(500).json(err);
  }
}

async function create(req, res) {
  console.log('user: ', req.user)
  try {
    let user = User.findById(req.user)
    user.jobs.push(req.body)
    user.save();
    // const job = await Job.create(req.body);
    res.status(201).json(user.jobs);
  }
  catch(err){
    res.status(500).json(err);
  } 
}

async function show(req, res) {
  console.log('user: ', req.user)
  try {
    const job = await Job.findById(req.params.id);
    res.status(200).json(job);
  }
  catch(err){
    res.status(500).json(err);
  }
}

async function update(req, res) {
  console.log('user: ', req.user)
  try {
    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedJob);
  }
  catch(err){
    res.status(500).json(err);
  }
}

async function deleteOne(req, res) {
  console.log('user: ', req.user)
  try {
    const deletedJob = await Job.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedJob);
  }
  catch(err){
    res.status(500).json(err);
  }
}