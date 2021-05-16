import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'

function MovieList(prop) {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);


    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    function displayDetails(movie) {
        prop.setDetails({ id: movie.id, description: movie.description, 
            title: movie.title, poster: movie.poster });
        history.push('/details/' + movie.id);

    }

    // On click - routes user to the Add a movie page
    function moveToAddPage() {
        history.push('/add-movie');
    }

    return (
        <main>
            <h1>MovieList</h1>
                <button onClick={moveToAddPage}>Add A Movie</button>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div onClick={() => displayDetails(movie)} key={movie.id}>
                        {/* <div key={movie.id} > */}
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}/>
                        </div>
                        
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;