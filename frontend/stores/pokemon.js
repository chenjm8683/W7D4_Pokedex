var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var PokemonConstants = require('../constants/pokemonConstants.js');

var _pokemons = [];
var PokemonStore = new Store(AppDispatcher);

PokemonStore.all = function() {
  return _pokemons.slice();
};

PokemonStore.find = function(id) {
  return _pokemons.find(function(pokemon) {
    return pokemon.id === id;
  });
};

PokemonStore.resetPokemons = function(pokemons) {
  _pokemons = pokemons;
  PokemonStore.__emitChange();
};

PokemonStore.resetSinglePokemon = function(pokemon) {
  var foundPokemon = _pokemons.indexOf(this.find(pokemon.id));
  _pokemons[foundPokemon] = pokemon;
  PokemonStore.__emitChange();
}

PokemonStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case PokemonConstants.POKEMONS_RECEIVED:
      this.resetPokemons(payload.pokemons);
      break;
    case PokemonConstants.POKEMON_RECEIVED:
      this.resetSinglePokemon(payload.pokemon);
      break;
  }
};

module.exports = PokemonStore;
