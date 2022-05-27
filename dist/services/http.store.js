export class HttpStoreClass {
    url;
    constructor() {
        this.url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';
    }
    getPokemon() {
        // GET
        fetch(this.url)
            .then((response) => response.json())
            .then((json) => console.log(json));
    }
}
