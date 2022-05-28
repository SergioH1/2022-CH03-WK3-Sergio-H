/* eslint-disable no-unused-vars */
import { Component } from './components.js';
export class PokeCard extends Component {
    pokemon;
    template;
    constructor(pokemon, selector) {
        super();
        this.pokemon = pokemon;
        this.template = this.createCard();
        this.addRender(selector);
    }
    createCard() {
        let html = `  
        <li>        
            <ul>
                <li>

                    <img src="${this.pokemon.sprites.front_default}" alt="" />
                </li>
                <li><h2${this.pokemon.name}</h2></li>
                <li>${this.pokemon.weight}</li>
                <li>${this.pokemon.height}</li>
                <li>`;
        html += `
                    <ul>
                        <li>${this.pokemon.types[0].type.name}</li>
                    </ul>
                </li>
                <li>
                    <ul>`;
        html += `
                     <li${this.pokemon.abilities[0]}</li>
                    </ul>
                </li>
            </ul>
        </li>
        `;
        return html;
    }
}
