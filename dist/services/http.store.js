export class HttpStoreClass {
    url;
    constructor(url) {
        this.url = url;
    }
    getPokemon(pokemonID) {
        return fetch(this.url + pokemonID).then((response) => {
            return response.json();
        });
    }
}
