/* eslint-disable no-unused-vars */
import { iPokemon } from '../components/interface/interfaces.js';

export class HttpStoreClass {
    constructor(public url: string) {}

    getPokemon(pokemonID: number): Promise<iPokemon> {
        return fetch(this.url + pokemonID).then((response) => {
            return response.json();
        });
    }
}
