import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
	const [movies, setMovies] = useState([
		{
			name: 'Harry Potter',
			price: '10$',
			id: 2314
		},
		{
			name: 'Star Wars 7',
			price: '15$',
			id: 9137
		},
		{
			name: 'Inception',
			price: '5$',
			id: 1293
		}
	]);
	return <MovieContext.Provider value={[movies, setMovies]}>{props.children}</MovieContext.Provider>;
};
