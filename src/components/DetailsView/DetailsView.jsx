import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function DetailsView() {
  const dispatch = useDispatch();
  const history = useHistory();
  const details = useSelector(store => store.details);
  const id = useSelector(store => store.genres.id);

  useEffect(() => {
    if (id) {
      fetchGenre(id);
    }
  }, [id]);

  const fetchGenre = (id) => {
    axios.get(`/api/genres/${id}`)
      .then(response => {
        console.log('Genre: ', response.data);
        dispatch({ type: 'SET_GENRES', payload: response.data });
      })
      .catch(error => {
        console.error(error);
        alert('Could not fetch genres! It is broken');
      });
  };

    return (
        <main>
            <button data-testid="toList"onClick={() => history.push("./")} >Return To Movies List</button>
        <h1> Details </h1>
        <section data-testid="movieDetails">
              <div>
                <h3> {details.title}</h3>
                <img src={details.poster} alt={details.title}/>
                <h3>{details.description}</h3>
               
              </div>
        </section>
      </main> )}
  
  export default DetailsView;