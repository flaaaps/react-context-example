import React, { useState, useContext } from 'react';
import Movie from './Movie';
import { MovieContext } from './MovieContext';

const MovieList = () => {
	const [movies, setMovies] = useContext(MovieContext);

	return (
		<div>
			<ol>
				{movies.map(movie => (
					<Movie key={movie.id} details={movie} />
				))}
			</ol>
		</div>
	);
};

export default MovieList;
