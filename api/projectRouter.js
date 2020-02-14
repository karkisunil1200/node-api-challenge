const express = require('express');

const Hubs = require('../data/helpers/projectModel');

const actionRouter = require('./actionRouter');

const router = express.Router();

router.use('/action', actionRouter);

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

router.post('/post', (req, res) => {
  const project = req.body;
  console.log(project);
  Hubs.insert(project)
    .then(hubs => {
      res.status(200).json(hubs);
    })
    .catch(err => {
      res.status(500).json({message: 'Something went wrong'});
    });
});

router.put('/:id', (req, res) => {
  const {id} = req.params;
  const changes = req.body;

  Hubs.update(id, changes)
    .then(hubs => {
      res.status(200).json(hubs);
    })
    .catch(err => {
      console.log(err);
      res.status(404).json({message: 'Check your ID'});
    });
});

router.delete('/:id', (req, res) => {
  const {id} = req.params;
  Hubs.remove(id)
    .then(hubs => {
      res.status(200).json(hubs);
    })
    .catch(err => {
      console.log(err);
      res.status(404).json({message: 'Check your ID'});
    });
});

module.exports = router;
