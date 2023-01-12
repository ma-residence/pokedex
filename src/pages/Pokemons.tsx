import React, { useEffect, useState } from 'react';
import './Pokemons.css';

import { API } from '../data/API';
import { Pokemon } from '../types';

export const Pokemons = () => {
	const [pokemons, setPokemons] = useState<Pokemon[]>([]);

	const loadPokemons = async () => {
		setPokemons(await API.get());
	};

	useEffect(() => {
		loadPokemons();
	}, []);

	return (
		<div className='list'>
			{pokemons.map((pokemon) => (
				<div className='item' key={pokemon.id}>
					<img
						src={pokemon.ThumbnailImage}
						className='img'
						alt={pokemon.ThumbnailAltText}
						loading='lazy'
					/>
					<p>{pokemon.name}</p>
				</div>
			))}
		</div>
	);
};
