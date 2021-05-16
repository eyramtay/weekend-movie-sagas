import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function AddMovie() {

const [title, setTitle] = useState('');
const [genre, setGenre] = useState('');
const [description, setDescription] = useState('');
const [imageURL, setImageURL] = useState('');

const history = useHistory();
const dispatch = useDispatch();
const genres = useSelector((store) => store.genres);


useEffect(() => {
    dispatch({ type: 'FETCH_GENRES' });

}, []);

    let newMovie = {
        title: title,
        poster: imageURL,
        description: description,
        genre_id: genre,
    }

    function saveMovie() {
        console.log(newMovie);
        dispatch({ type: 'ADD_MOVIE', payload: newMovie })
        history.push('/');
    }

    const newTitle = (event) => {
        setTitle(event.target.value);
    }

    const newPoster = (event) => {
        setImageURL(event.target.value);
    }

    const newDescription = (event) => {
        setDescription(event.target.value);
    }

    const newGenre = (event) => {
        setGenre(event.target.value);
    }

    return (
        <>
            <h1>Add a New Movie:</h1>
            <input onChange={newTitle} type="text" placeholder="Movie Title..." />
            
        </>
    )

}