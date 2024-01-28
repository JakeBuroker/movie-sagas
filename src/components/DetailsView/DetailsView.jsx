import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function DetailsView() {
 const history = useHistory()

    return (
      <div>
      <button data-testid="toList" onClick= {() => history.push("/")}> Return To Movie List </button>
        <h1 data-testid="movieDetails" > Movie Details </h1>
      </div>
    );
  }
  
  export default DetailsView;