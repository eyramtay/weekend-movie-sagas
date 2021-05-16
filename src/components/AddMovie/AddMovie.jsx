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

    

}