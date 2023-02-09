import React, { useEffect, useState } from 'react';
import { Pokemon as PokemonType } from '../types';

type PokemonProps = {
	pokemon: PokemonType;
};

export const Pokemon = (props: PokemonProps) => {
	const [pokemon, setPokemon] = useState(props.pokemon);

	useEffect(() => {
		pokemon = props.pokemon;
	}, [props.pokemon]);

	return (
		<div>
			<div className='item'>
				<img
					src={pokemon.ThumbnailImage}
					className='img'
					alt={pokemon.ThumbnailAltText}
					loading='lazy'
				/>
				<p>{pokemon.name}</p>
			</div>
		</div>
	);
};

export default Pokemon;