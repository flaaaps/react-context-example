import React, { useContext } from 'react';
import './Nav.css';
import { MovieContext } from './MovieContext';
import Movie from './Movie';

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
