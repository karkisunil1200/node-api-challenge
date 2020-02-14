const express = require('express');
const projectRouter = require('./projectRouter');

const router = express.Router();

router.use('/project', projectRouter);
// router.use('/action', actionRouter);

module.exports = router;
