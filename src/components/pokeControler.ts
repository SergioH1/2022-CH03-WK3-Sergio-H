import { HttpStoreClass } from '../services/http.store.js';
import { iPokemon } from './interface/interfaces.js';
import { PokeList } from './pokeList.js';

export class PokeControler {
    pokeIndex: number;
    constructor() {
        const pokeApi = new HttpStoreClass(
            'https://pokeapi.co/api/v2/pokemon/'
        );
        const promises: Array<Promise<iPokemon>> = [];
        this.pokeIndex = 1;
        for (let i = this.pokeIndex; i < this.pokeIndex + 9; i++) {
            promises.push(pokeApi.getPokemon(i));
        }
        Promise.all(promises).then((pokemon) => {
            new PokeList(pokemon, 'main.container-main');
            this.manageComponent();
        });
    }

    private manageComponent() {
        document
            .querySelectorAll('[role="button"]')
            .forEach((item) =>
                item.addEventListener('click', this.handlerButton.bind(this))
            );
    }

    private handlerButton(ev: Event) {
        if ((<HTMLElement>ev.target).className === 'button-next') {
            this.pokeIndex += 9;
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'auto',
            });
        } else if (
            (<HTMLElement>ev.target).className === 'button-previus' &&
            this.pokeIndex >= 10
        ) {
            this.pokeIndex -= 9;
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'auto',
            });
        }

        this.updateComponent();
    }

    private updateComponent() {
        const pokeApi = new HttpStoreClass(
            'https://pokeapi.co/api/v2/pokemon/'
        );
        const promises: Array<Promise<iPokemon>> = [];
        for (let i = this.pokeIndex; i < this.pokeIndex + 9; i++) {
            promises.push(pokeApi.getPokemon(i));
        }
        Promise.all(promises).then((pokemon) => {
            new PokeList(pokemon, 'main.container-main');
        });
    }
}
