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
        return `
         <li class="card">
            <div class="card__body">
             <img
                class="card__body--img"
                src="${this.pokemon.sprites.front_default}"
                alt=""
            />
            <a class = "Icon-fav" href="">⭐</a>
            <h2 class="card__body--title">
                ${this.pokemon.name.toUpperCase()} 
            </h2>
            <p class="card__body--text">nº${this.pokemon.id}/898</p>
        
                <p class="card__body--weight">
                    Peso: ${this.pokemon.weight / 10}kg
                </p>
                <p class="card-body--height">
                    Altura ${this.pokemon.height * 10}cm
                </p>
                <p class="card__body--type">
                    Tipo ${this.pokemon.types[0].type.name}
                </p>
           
            </div> 
        </li>  
        
        `;
    }
}
