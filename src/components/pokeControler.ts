import { HttpStoreClass } from '../services/http.store.js';
import { iPokemon } from './interface/interfaces.js';
import { PokeList } from './pokeList.js';

export class PokeControler {
    Pokeindex: number;
    pokePerPage: number;
    constructor() {
        const pokeApi = new HttpStoreClass(
            'https://pokeapi.co/api/v2/pokemon/'
        );

        const promises: Array<Promise<iPokemon>> = [];
        this.Pokeindex = 1;
        this.pokePerPage = 12;
        for (let i = this.Pokeindex; i <= this.pokePerPage; i++) {
            promises.push(pokeApi.getPokemon(i));
        }
        Promise.all(promises).then((pokemon) => {
            new PokeList(pokemon, 'main.container-main');
            this.manageComponent();
        });
        this.manageComponent();
    }
    private manageComponent() {
        document
            .querySelectorAll('[role="button"]')
            .forEach((item) =>
                item.addEventListener('click', this.manageButton.bind(this))
            );
    }
    private manageButton(event: Event) {
        // event.target.id o .class name identifica mi boton para meterle una condicidion
        const eventTarget = <HTMLElement>event.target;
        console.log(eventTarget.className);
        switch (eventTarget.className) {
            case 'button-next':
                this.Pokeindex = this.pokePerPage;
                break;
        }
    }
}
