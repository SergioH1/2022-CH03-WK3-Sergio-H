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
         <li class="card">
            <div class="card__body">
             <img
                class="card__body--img"
                src="${this.pokemon.sprites.front_default}"
                alt=""
            />
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
// <li class = "item">
//             <ul class="item__container">
//                 <li>

//                     <img class = "card"src="${
//                         this.pokemon.sprites.front_default
//                     }" alt="" />
//                 </li>

//                 <li class = "item"><h2>${this.pokemon.name.toUpperCase()}</h2></li>
//                 <li>nº${this.pokemon.id}/898</li>
//                 <li>Peso: ${this.pokemon.weight / 10}kg</li>
//                 <li>Altura ${this.pokemon.height * 10}cm</li>
//                 <li>Tipo ${this.pokemon.types[0].type.name}</li>
//             <ul>
