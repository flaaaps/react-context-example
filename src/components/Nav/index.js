import React, { useContext } from 'react';
import './style.css';
import { MovieContext } from '../../context/MovieContext';
import Movie from '../MovieList/Movie';

const Nav = () => {
	const [movies, setMovies] = useContext(MovieContext);
	return (
		<nav>
			<h1>flaaaps</h1>
			<div>
				<p>There are {movies.length} movies</p>
			</div>
		</nav>
	);
};

export default Nav;
