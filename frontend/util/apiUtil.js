var ApiActions = require('../actions/pokemonActions.js');

var ApiUtil = {
  fetchAllPokemons: function() {
    $.get('api/pokemon', {}, function(pokemons){
      ApiActions.receiveAllPokemons(pokemons);
    });
  },

  fetchSinglePokemon: function(id) {
    $.get('api/pokemon/' + id, {}, function(pokemon){
      ApiActions.receiveSinglePokemon(pokemon);
    });
  }
};

module.exports = ApiUtil;
