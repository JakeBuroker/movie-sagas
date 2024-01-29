import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './MovieList.css';

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, [dispatch]);

  function onClick(movie) {
    dispatch({ type: "SET_DETAILS", payload: movie });
    dispatch({ type: "SET_GENRES", payload: movie });
    history.push("/DetailsView");
  }

  return (
    <main>
      <h1>MovieList</h1>
      <section className="movies">
      {movies.map(movie => (
  <Card 
    key={movie.id} 
    data-testid='movieItem' 
    onClick={() => onClick(movie)} 
    sx={{ 
      cursor: 'pointer', 
      margin: 4, 
      maxWidth: 500,
    }}
  >
    <CardMedia
      component="img"
      image={movie.poster}
      alt={movie.title}
      data-testid="toDetails"
      sx={{
        objectFit: 'contain',
      }}
    />
    <CardContent>
      <Typography gutterBottom variant="h8" component="div">
        {movie.title}
      </Typography>
    </CardContent>
  </Card>

))}
      </section>
    </main>
)}

export default MovieList;
