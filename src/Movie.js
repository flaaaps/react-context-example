import React from 'react';

const Movie = ({ details }) => {
	return (
		<div>
			<h2 className="movie-name">{details.name}</h2>
			<p className="movie-price">{details.price}</p>
		</div>
	);
};

export default Movie;
