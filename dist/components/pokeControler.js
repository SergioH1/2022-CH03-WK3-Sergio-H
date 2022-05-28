import { HttpStoreClass } from '../services/http.store.js';
import { PokeList } from './pokeList.js';
export class PokeControler {
    Pokeindex;
    constructor() {
        const pokeApi = new HttpStoreClass('https://pokeapi.co/api/v2/pokemon/');
        const promises = [];
        this.Pokeindex = 1;
        for (let i = this.Pokeindex; i < this.Pokeindex + 9; i++) {
            promises.push(pokeApi.getPokemon(i));
        }
        Promise.all(promises).then((pokemon) => new PokeList(pokemon, 'main.container-main'));
    }
}
