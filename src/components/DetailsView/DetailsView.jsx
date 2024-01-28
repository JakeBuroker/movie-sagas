import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react';
import axios from 'axios';
// This view should show all details **including ALL the genres** for the selected movie, 
// as well as the title, description, and poster image. 
// Use Sagas and Redux to handle these requests and data. 

function DetailsView() {
 const history = useHistory()

 const [movieDetails, setMovieDetails] = useState([]);
  const fetchDetails = () => {
    axios
      .get("/api/movies")
      .then((response) => {
        console.log(response.data);
        setMovieDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchDetails();
  }, [])

    return (
        <main>
        <h1>MovieList</h1>
        <section className="movies">
          {movieDetails.map(movie => {
            return (
              <div  key={movie.id}>
                <h3>{movie.title}</h3>
              </div>
            );
          })}
        </section>
      </main> )}
  
  export default DetailsView;