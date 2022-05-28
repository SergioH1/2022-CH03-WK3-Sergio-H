/* eslint-disable no-unused-vars */
import { Component } from './components.js';
import { iPokemon } from './interface/interfaces.js';
import { PokeCard } from './pokeCard.js';

export class PokeList extends Component {
    template: string;
    constructor(public pokeArray: Array<iPokemon>, selector: string) {
        super();
        this.template = this.createList();
        this.render(selector);
        pokeArray.forEach(
            (pokemon) => new PokeCard(pokemon, 'ul.container-list')
        );
    }
    createList(): string {
        let html = ` 
      <ul class="container-list"></ul>`;
        html += `
       <footer>
            <i role = "button" class="button-previus">⏪</i>
            <i role = "button" class="button-next">⏩</i> 
        </footer>;`;
        return html;
    }
}
