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
            <input onChange={newPoster} type="text" placeholder="Movie Poster URL..." />
            <textarea onChange={newDescription} placeholder="Enter movie description..."
            name="description" cols="40" rows="20"></textarea>

            <select onChange={newGenre} name="" id="">
                {genres.map(genre => {
                    return (
                        <option value={genre.id} key={genre.id}>{genre.name}</option>
                    )
                })}
            </select>
            <button onClick={saveMovie}>Save</button>
            <button onClick={cancelSubmission}>Cancel</button>
        </>
    )

}

export default AddMovie;