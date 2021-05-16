import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';



function Details(prop) {

    const movies = useSelector((store) => store.movies);
    const genres = useSelector((store) => store.genres);
    const details = useSelector((store) => store.detail);

    const dispatch = useDispatch();
    const history = useHistory();
    
    function returnToList() {
        history.push('/');
    }



useEffect(() => {
    dispatch({ type: 'FETCH_DETAILS', payload: prop.details.id });
}, []);


    return (
        <>
            <div key={movies.id}>
                <h1>{prop.details.title}</h1>
                <p>{prop.details.description}</p>
                {details.map(genres => {
                    return (
                        <p>{genres.name}</p>
                    )
                })}
            <button onClick={returnToList}>Back To Movie List</button>
            </div>
        </>
    )

}

export default Details;