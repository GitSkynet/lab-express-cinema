const express = require('express');
const router = express.Router();
const movies = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', async (req, res, next) => {
  try{
    let respuesta = await movies.find()
      res.render('movies', {respuesta});
  }catch(err){
      console.log('Error while getting the celebrities from the DB: ', err);
  }
});

router.get('/show/:id', async (req, res, next) =>{
  let byId = await movies.findById(req.params.id)
  console.log('AWAIT  MOVIES ID!!', byId)
  res.render('show', {byId})
})

module.exports = router;
