var React = require('react');
var ReactDOM = require('react-dom');
var ApiUtil = require('./util/apiUtil');
var PokemonStore = require('./stores/pokemon.js');
var PokemonsIndex = require('./components/pokemons/pokemonsIndex');

// for testing
// window.PokemonStore = require('./stores/pokemon.js');
// window.ApiUtil = require('./util/apiUtil');


document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<PokemonsIndex />, document.getElementById('root'));
});
