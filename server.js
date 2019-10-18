const express = require('express');

const Friends = require('./friends/friends-model');

const server = express();

server.use(express.json());


server.get('/friends', (req, res) =>{
  Friends.findFriends()
  .then(friend =>{
    res.status(200).json(friend)
  })
  .catch(err =>{
    res.status(500).json({message: "Could not find friends"})
  })
})

server.post('/friends', (req, res) =>{
  Friends.add(req.body)
  .then(friend =>{
    res.status(200).json({message: `${friend.name} has been added!`})
  })
  .catch(err =>{
    res.status(500).json({message: "Friend could not be added"})
  })
})

server.delete('/friends/:id', (req, res) =>{
  Friends.remove(req.params.id)
  .then(friend =>{
    if (friend) {
      res.json({message: "Friend has been removed"})
    } else {
      res.status(404).json({message: "Friend with the specified ID does not exist"})
    }
  })
  .catch(err =>{
    res.status(500).json({message: "Friend could not be removed"})
  })
})

module.exports = server;