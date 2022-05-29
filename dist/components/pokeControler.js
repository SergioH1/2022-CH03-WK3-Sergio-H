import { HttpStoreClass } from '../services/http.store.js';
import { PokeList } from './pokeList.js';
export class PokeControler {
    pokeIndex;
    constructor() {
        const pokeApi = new HttpStoreClass('https://pokeapi.co/api/v2/pokemon/');
        const promises = [];
        this.pokeIndex = 1;
        for (let i = this.pokeIndex; i < this.pokeIndex + 9; i++) {
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
            this.pokeIndex += 9;
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'auto',
            });
        }
        else if (ev.target.className === 'button-previus' &&
            this.pokeIndex >= 10) {
            this.pokeIndex -= 9;
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'auto',
            });
        }
        this.updateComponent();
    }
    updateComponent() {
        const pokeApi = new HttpStoreClass('https://pokeapi.co/api/v2/pokemon/');
        const promises = [];
        for (let i = this.pokeIndex; i < this.pokeIndex + 9; i++) {
            promises.push(pokeApi.getPokemon(i));
        }
        Promise.all(promises).then((pokemon) => {
            new PokeList(pokemon, 'main.container-main');
        });
    }
}
