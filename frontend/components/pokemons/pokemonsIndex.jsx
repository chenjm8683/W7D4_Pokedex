var React = require('react');
var PokemonStore = require('../../stores/pokemon.js');
var ApiUtil = require('../../util/apiUtil.js');
var PokemonIndexItem = require('./pokemonIndexItem.jsx');

var PokemonsIndex = React.createClass({
  getInitialState: function() {
    return {
      pokemons: PokemonStore.all()
    };
  },

  _updateState: function() {
    this.setState({
      pokemons: PokemonStore.all()
    });
  },

  componentWillUnmount: function() {
    this.pokemonToken.remove();
  },

  componentDidMount: function() {
    this.pokemonToken = PokemonStore.addListener(this._updateState);
    ApiUtil.fetchAllPokemons();
  },

  render: function() {
    console.log(this.state.pokemons);
    var pokemonsLi = this.state.pokemons.map(function(pokemon) {
      return (
        <li key={pokemon.id}>
          <PokemonIndexItem  pokemon={pokemon}  />
        </li>
      )
    });
    return (
      <ul>
        {pokemonsLi}
      </ul>
    );
  }

});

module.exports = PokemonsIndex;
