var Job = require('../models/job');

module.exports = {
  index,
  create
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
    const job = await Job.create(req.body);
    res.status(201).json(job);
  }
  catch(err){
    res.status(500).json(err);
  }
}
