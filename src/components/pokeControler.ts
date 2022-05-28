import { HttpStoreClass } from '../services/http.store.js';
import { iPokemon } from './interface/interfaces.js';
import { PokeList } from './pokeList.js';

export class PokeControler {
    Pokeindex: number;
    constructor() {
        const pokeApi = new HttpStoreClass(
            'https://pokeapi.co/api/v2/pokemon/'
        );
        const promises: Array<Promise<iPokemon>> = [];
        this.Pokeindex = 1;
        for (let i = this.Pokeindex; i < this.Pokeindex + 9; i++) {
            promises.push(pokeApi.getPokemon(i));
        }
        Promise.all(promises).then(
            (pokemon) => new PokeList(pokemon, 'main.container-main')
        );
    }
}
