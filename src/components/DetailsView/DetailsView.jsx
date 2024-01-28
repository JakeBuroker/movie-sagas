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
 const details = useSelector(store => store.details);


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