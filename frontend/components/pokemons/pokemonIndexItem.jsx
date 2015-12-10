var React = require('react');
var PokemonStore = require('../../stores/pokemon.js');

var PokemonIndexItem = React.createClass({

  render: function() {

    return (
      <div className="poke-list-item">
        {this.props.pokemon.name + ", " + this.props.pokemon.poke_type}
      </div>
    );
  }

});

module.exports = PokemonIndexItem;
