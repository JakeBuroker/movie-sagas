import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';

function DetailsView() {
  const dispatch = useDispatch();
  const history = useHistory();
  const details = useSelector(store => store.details);
  const id = useSelector(store => store.genres.id);
  const genre = useSelector(store => store.genre);

  useEffect(() => {
    if (id) {
      fetchGenre(id);
    }
  }, [id]);

  const fetchGenre = (id) => {
    axios.get(`/api/genres/${id}`)
      .then(response => {
        console.log('Genre: ', response.data);
        dispatch({ type: 'GENRES', payload: response.data });
      })
      .catch(error => {
        console.error(error);
        alert('Could not fetch genres! It is broken');
      });
  };

  return (
    <main>
      <Card sx={{ maxWidth: 600, margin: 'auto', mt: 2 }}>
        <CardMedia
          component="img"
          height="300"
          image={details.poster}
          alt={details.title}
          sx={{
            objectFit: 'contain'
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {details.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {details.description}
          </Typography>
          <Typography sx={{ mt: 2, mb: 1 }} variant="body1">
            Genres:
          </Typography>
          {genre.map(genreItem => (
            <Chip key={genreItem.name} label={genreItem.name} sx={{ mr: 1 }} />
          ))}
        </CardContent>
      </Card>
      <Button
        variant="contained"
        sx={{ mt: 2 }}
        onClick={() => history.push("./")}
      >
        Return To Movies List
      </Button>
    </main>
  );
}

export default DetailsView;
