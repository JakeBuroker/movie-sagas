const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const query = `
    SELECT genres.name
    FROM genres
    JOIN movies_genres ON genres.id = movies_genres.genre_id
    WHERE movies_genres.movie_id = $1;
  `;
  pool.query(query, [id])
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    });
});

module.exports = router;