var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var PokemonConstants = require('../constants/pokemonConstants.js');

var _pokemons = [];
var PokemonStore = new Store(AppDispatcher);

PokemonStore.all = function() {
  return _pokemons.slice();
};

PokemonStore.resetPokemons = function(pokemons) {
  _pokemons = pokemons;
  PokemonStore.__emitChange();
};

PokemonStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case PokemonConstants.POKEMONS_RECEIVED:
      this.resetPokemons(payload.pokemons);
      break;
  }
};

module.exports = PokemonStore;
