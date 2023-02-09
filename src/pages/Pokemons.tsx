import React, { useEffect, useState } from 'react';
import Pokemon from '../components/Pokemon';
import { API } from '../data/API';
import { Pokemon as PokemonType } from '../types';
import './Pokemons.css';

export const Pokemons = () => {
	const [pokemons, setPokemons] = useState<PokemonType[]>([]);

	useEffect(async () => {
		setPokemons(await API.get());
	});

	return (
		<div className='list'>
			{!pokemons ? (
				<Empty></Empty>
			) : (
				<div>
					{pokemons.map((p, id) => (
						<Pokemon pokemon={p} key={id} />
					))}
				</div>
			)}
		</div>
	);
};
