const Job = require('../models/job');
const User = require('../models/user');

module.exports = {
  index,
  create, 
  show,
  update,
  delete: deleteOne 
};

async function index(req, res) {
  try{
    await User.findById(req.user._id, function(err, user) {
      res.status(201).json(user.jobs);
  });
  }
  catch(err){
      res.status(500).json(err);
  }
}

async function create(req, res) {
  const create = await User.findById(req.user._id, function(err, user) {
      user.jobs.push(req.body);
      user.save(function(err) {
      res.status(201).json(create);
      });
  });
}

async function deleteOne(req, res) {
  const deletedJob = await User.findById(req.user._id, function(err, user) {
  user.jobs.splice(req.params.id, 1);
  user.save(function(err) {
  res.status(201).json(deletedJob);
  });
})};

async function update(req, res) {
  const updatedJob = await User.findById(req.user._id, function(err, user) {
  user.jobs.push(req.params.id, 1);
  user.save(function(err) {
  res.status(201).json(updatedJob);
  });
})};
    
  

// async function update(req, res) {
//   try {
//     const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {new: true});
//     res.status(200).json(updatedJob);
//   }
//   catch(err){
//     res.status(500).json(err);
//   }
// }

async function show(req, res) {
  try {
    const job = await Job.findById(req.params.id);
    res.status(200).json(job);
  }
  catch(err){
    res.status(500).json(err);
  }
}