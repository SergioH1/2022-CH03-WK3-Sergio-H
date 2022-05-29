import { HttpStoreClass } from '../services/http.store.js';
import { PokeList } from './pokeList.js';
export class PokeControler {
    pokeIndex;
    constructor() {
        const pokeApi = new HttpStoreClass('https://pokeapi.co/api/v2/pokemon/');
        const promises = [];
        this.pokeIndex = 1;
        for (let i = this.pokeIndex; i < this.pokeIndex + 15; i++) {
            promises.push(pokeApi.getPokemon(i));
        }
        Promise.all(promises).then((pokemon) => {
            new PokeList(pokemon, 'main.container-main');
            this.manageComponent();
        });
    }
    manageComponent() {
        document
            .querySelectorAll('[role="button"]')
            .forEach((item) => item.addEventListener('click', this.handlerButton.bind(this)));
    }
    handlerButton(ev) {
        if (ev.target.className === 'button-next') {
            this.pokeIndex += 15;
        }
        else if (ev.target.className === 'button-previus' &&
            this.pokeIndex >= 16) {
            this.pokeIndex -= 15;
        }
        this.updateComponent();
    }
    updateComponent() {
        const pokeApi = new HttpStoreClass('https://pokeapi.co/api/v2/pokemon/');
        const promises = [];
        for (let i = this.pokeIndex; i < this.pokeIndex + 15; i++) {
            promises.push(pokeApi.getPokemon(i));
        }
        Promise.all(promises).then((pokemon) => {
            new PokeList(pokemon, 'main.container-main');
        });
    }
}
