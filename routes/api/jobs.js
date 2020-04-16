const express = require('express');
const router = express.Router();
const jobsCtrl = require('../../controllers/jobs');

router.use(require('../../config/auth'));

router.get('/', checkAuth, jobsCtrl.index);
router.post('/', checkAuth, jobsCtrl.create);
router.get('/:id', checkAuth, jobsCtrl.show);
router.put('/:idx', checkAuth, jobsCtrl.update);

router.delete('/:id', jobsCtrl.delete);

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: req.user});
}

module.exports = router;