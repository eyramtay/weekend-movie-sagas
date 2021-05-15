import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <Link to ='/add-movie'>
                <button>Add Movie</button>
            </Link><br />
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <Link to = {`/details/${movie.id}`} params={movie.id} key={movie.id}>
                        <div>
                        {/* <div key={movie.id} > */}
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}/>
                        </div>
                        </Link>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;