const express = require('express');

const Hubs = require('../data/helpers/projectModel');

const router = express.Router();

router.get('/', (req, res) => {
  Hubs.get()
    .then(hubs => {
      res.status(200).json(hubs);
    })
    .catch(err => {
      res.status(500).json({message: 'Invalid credentianls'});
    });
});

router.get('/:id', (req, res) => {
  const {id} = req.params;

  Hubs.get(id)
    .then(hubs => {
      res.status(200).json(hubs);
    })
    .catch(err => {
      res.status(500).json({message: 'Invalid id'});
    });
});

module.exports = router;
