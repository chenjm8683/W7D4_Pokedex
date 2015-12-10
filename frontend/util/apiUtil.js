var ApiActions = require('../actions/pokemonActions.js');

var ApiUtil = {
  fetchAllPokemons: function() {
    $.get('api/pokemon', {}, function(pokemons){
      ApiActions.receiveAllPokemons(pokemons);
    });
  }
};

module.exports = ApiUtil;
