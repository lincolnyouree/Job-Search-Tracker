const express = require('express');
const router = express.Router();
const jobsCtrl = require('../../controllers/jobs');
console.log("INROUTE");
router.use(require('../../config/auth'));
console.log("AUTHHH");
router.get('/', checkAuth, jobsCtrl.index);
router.post('/', checkAuth, jobsCtrl.create);
router.get('/:id', checkAuth, jobsCtrl.show);
router.put('/:id', checkAuth, jobsCtrl.update);

router.delete('/:id', jobsCtrl.delete);

function checkAuth(req, res, next) {
  console.log("CHECKAUTH");
  if (req.user) return next();
  return res.status(401).json({msg: req.user});
}

module.exports = router;