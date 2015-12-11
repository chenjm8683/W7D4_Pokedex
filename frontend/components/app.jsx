var React = require('react');
var PokemonsIndex = require('./pokemons/pokemonsIndex.jsx');
var PokemonForm = require('./pokemonForm.jsx');

var App = React.createClass({

  render: function() {
    return (
      <div id="pokedex">
        <div className="pokemon-index-pane">
          <PokemonForm />
          <PokemonsIndex />
        </div>
        {this.props.children}
      </div>
    );
  }

});

module.exports = App;
