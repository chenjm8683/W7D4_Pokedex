var React = require('react');
var PokemonStore = require('../../stores/pokemon.js');
var History = require('react-router').History;

var PokemonIndexItem = React.createClass({
  mixins: [History],

  showDetail: function() {
    var pokemonDetailUrl = "pokemon/" + this.props.pokemon.id;
    this.history.pushState(this.props.pokemon, pokemonDetailUrl);
  },

  render: function() {

    return (
      <li className="poke-list-item" onClick={this.showDetail} >
        {this.props.pokemon.name + ", " + this.props.pokemon.poke_type}
      </li>
    );
  }

});

module.exports = PokemonIndexItem;
