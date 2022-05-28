import { HttpStoreClass } from '../services/http.store.js';
import { PokeList } from './pokeList.js';
export class PokeControler {
    Pokeindex;
    pokePerPage;
    constructor() {
        const pokeApi = new HttpStoreClass('https://pokeapi.co/api/v2/pokemon/');
        const promises = [];
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
    manageComponent() {
        document
            .querySelectorAll('[role="button"]')
            .forEach((item) => item.addEventListener('click', this.manageButton.bind(this)));
    }
    manageButton(event) {
        // event.target.id o .class name identifica mi boton para meterle una condicidion
        const eventTarget = event.target;
        console.log(eventTarget.className);
        switch (eventTarget.className) {
            case 'button-next':
                this.Pokeindex = this.pokePerPage;
                break;
        }
    }
}
