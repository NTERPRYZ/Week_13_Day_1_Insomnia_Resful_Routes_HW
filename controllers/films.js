//since we don't have a database we'll use our front end models at the moment
const films = require('../client/src/models/films')();
const Film = require('../client/src/models/film');
const Review = require('../client/src/models/review');

const express   = require('express');
const filmRouter = new express.Router();

//SHOW
filmRouter.get('/:id', function(req, res){
  res.json({data: films[req.params.id]})
})


//INDEX
filmRouter.get('/', function(req, res){
  res.json({data: films})
})


//CREATE
filmRouter.post('/', function(req, res) {
  const film = new Film({
    title: req.body.title,
    actors: req.body.actors
  });
  films.push(film);
  res.json({data: films});
});


//UPDATE
filmRouter.put('/:id', function(req, res){
  films[req.params.id] = req.body.film;
  res.json({data: films})
})

//DELETE
filmRouter.delete('/:id', function(req, res){
  films.splice(req.params.id, 1)
  res.json({data: films})
})


module.exports = filmRouter
