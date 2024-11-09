const express = require('express');
const fs = require('fs');

let movies = JSON.parse(fs.readFileSync('./data/movies.json', 'utf-8'));

exports.getAllMovies = (req, res) => {
  res.status(200).json({
    status: "success",
    requestedAt: req.requestedAt,
    count: movies.length,
    data: {
      movies: movies
    }
  })
 }


exports.getMovie = (req, res) => {
  //const id = +req.params.id;
  const id = req.params.id * 1;
  const movie = movies.find(ele => ele.id === id);
  if(!movie){
   return res.status(404).json({
    status: 'fail',
    message: 'movie with id ' +id+ ' not found'
   })
  }
  res.status(200).json({
    status: 'success',
    data: {
      movie: movie
    }
  })
}


exports.createMovie = (req, res) => {
  const newId = movies[movies.length - 1].id + 1;
  const newMovie = Object.assign({id: newId}, req.body);
  movies.push(newMovie);
  fs.writeFile('./data/movies.json', JSON.stringify(movies), (err)=> {
     res.status(201).json({
       status: 'success',
       data: {
            movie: newMovie
       }
     })
  })
}


exports.updateMovie = (req, res) => {
  const id = req.params.id * 1
  let movieToUpdate = movies.find(ele => ele.id === id);
  if(!movieToUpdate){
    return res.status(404).json({
      status: 'fail',
      message: 'No Movie Object With Id ' + id + ' Not Found'

    })
  }
  let index = movies.indexOf(movieToUpdate);
  Object.assign(movieToUpdate, req.body);
  movies[index] = movieToUpdate
  fs.writeFile('./data/movies.json', JSON.stringify(movies), (err) => {
    res.status(200).json({
       status: 'success',
       data: {
          updatedMovie: movieToUpdate
       }
    })
  })
}


exports.deleteMovie =  (req, res) => {
   const id = req.params.id * 1;
  const movieToDelete = movies.find(ele => ele.id === id);
   if(!movieToDelete){
     return res.status(404).json({
        status: 'fail',
        message: 'movie with id ' +id+ ' not Found'
     })
   }
  const index = movies.indexOf(movieToDelete);
  movies.splice(index, 1);
  fs.writeFile('./data/movies.json', JSON.stringify(movies), (err) => {
    res.status(204).json({
       status: 'success',
       data: {
         movie: null
       }
    })
  })
}

