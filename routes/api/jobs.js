const express = require('express');
const router = express.Router();
const jobsCtrl = require('../../controllers/jobs');

/*------------------------------ Public Routes ------------------------------*/

router.get('/', checkAuth, jobsCtrl.index);

/*----------------------------- Protected Routes ----------------------------*/

// Process the token for only the routes below
router.use(require('../../config/auth'));
router.post('/', checkAuth, jobsCtrl.create);
router.get('/:id', checkAuth, jobsCtrl.show);
router.put('/:id', checkAuth, jobsCtrl.update);
router.delete('/:id', checkAuth, jobsCtrl.delete);

/*----------------------------- Helper Functions ----------------------------*/

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;
