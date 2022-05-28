import { PokeControler } from '../components/pokeControler.js';
function app() {
    new PokeControler();
    console.log('algo');
}
(() => {
    document.addEventListener('DOMContentLoaded', app);
})();
