const express = require('express');

const Hubs = require('../data/helpers/actionModel');

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

router.post('/post', (req, res) => {
  const post = req.body;
  console.log(post);
  Hubs.insert(post)
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
