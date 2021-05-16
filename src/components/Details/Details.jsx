import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function Details() {

const movies = useSelector((store) => store.movies);
const genres = useSelector((store) => store.genres);

}