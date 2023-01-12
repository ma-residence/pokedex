import pokemons from './pokedex.json';
import { Pokemon } from '../types';

function promessify<T>(data: any): Promise<T> {
	return new Promise((resolve) => setTimeout(() => resolve(data), 300));
}

export const API = {
	get: () => promessify<Pokemon[]>(pokemons),
	getByName: (value: string) =>
		promessify<Pokemon>(
			pokemons.find(({ name }) => name === value) ?? ({} as Pokemon)
		),
};
