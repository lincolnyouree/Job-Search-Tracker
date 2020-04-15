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
      // user.save(function(err) {
      // console.log(user.jobs, "JOBS");
      res.status(201).json(user.jobs);

      // });
  });
  }
  catch(err){
      res.status(500).json(err);
  }
}

async function create(req, res) {
  const create = await User.findById(req.user._id, function(err, user) {
      console.log(req.body)
      user.jobs.push(req.body);
      user.save(function(err) {
      res.status(201).json(create);
      });
  });
}

async function deleteOne(req, res) {
  console.log("DELETEONE");
  const deletedJob = await User.findById(req.user._id, function(err, user) {
  console.log(req.body, "REQBODY")
  user.jobs.remove(req.body.id);
  user.save(function(err) {
  res.status(201).json(deletedJob);
  });
})};

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

// async function deleteOne(req, res) {
//   console.log('user: ', req.user)
//   try {
//     const deletedJob = await Job.findByIdAndRemove(req.params.id);
//     res.status(200).json(deletedJob);
//   }
//   catch(err){
//     res.status(500).json(err);
//   }
// }

