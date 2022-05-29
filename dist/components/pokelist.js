/* eslint-disable no-unused-vars */
import { Component } from './components.js';
import { PokeCard } from './pokeCard.js';
export class PokeList extends Component {
    pokeArray;
    template;
    constructor(pokeArray, selector) {
        super();
        this.pokeArray = pokeArray;
        this.template = this.createList();
        this.render(selector);
        pokeArray.forEach((pokemon) => new PokeCard(pokemon, 'ul.container-list'));
    }
    createList() {
        let html = ` 
      <ul class="container-list"></ul>`;
        html += `
     `;
        return html;
    }
}
