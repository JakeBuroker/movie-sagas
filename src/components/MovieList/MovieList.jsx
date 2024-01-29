import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
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
  <Grid container spacing={2} className="movies">
    {movies.map(movie => (
      <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
        <Card
          data-testid='movieItem'
          onClick={() => onClick(movie)}
          sx={{
            height: '100%',
            cursor: 'pointer',
          }}
        >
          <CardMedia
            component="img"
            image={movie.poster}
            alt={movie.title}
            data-testid="toDetails"
            sx={{
              height: 300, 
              objectFit: 'contain',
            }}
          />
          <CardContent>
            <Typography 
              gutterBottom 
              variant="body1" 
              noWrap
              sx={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              <b>{movie.title}</b>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
</main>
)}

export default MovieList;
