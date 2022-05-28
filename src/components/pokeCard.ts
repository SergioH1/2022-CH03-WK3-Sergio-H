/* eslint-disable no-unused-vars */
import { Component } from './components.js';
import { iPokemon } from './interface/interfaces.js';

export class PokeCard extends Component {
    template: string;
    constructor(public pokemon: iPokemon, selector: string) {
        super();
        this.template = this.createCard();
        this.addRender(selector);
    }
    createCard() {
        return `  
        <li>        
            <ul class="no-container">
                <li>

                    <img class = "card"src="${
                        this.pokemon.sprites.front_default
                    }" alt="" />
                </li>
              
                <li><h2>${this.pokemon.name.toUpperCase()}</h2></li>
                   <li>nº${this.pokemon.id}/898</li>
                <li>Peso: ${this.pokemon.weight / 10}kg</li>
                <li>Altura ${this.pokemon.height * 10}cm</li>
                <li>Tipo ${this.pokemon.types[0].type.name}</li>
             <ul>
        `;
    }

    //     html += `</ul>
    //             </li><li>
    //                     <ul>`;
    //         html += `
    //                      <li${this.pokemon.abilities[0]}</li>
    //                      `;
    //         html += `</ul>
    //                 </li>
    //             </ul>

    //         </li>
    // `;
}
