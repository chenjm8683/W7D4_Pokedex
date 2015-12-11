var React = require('react');
var PokemonStore = require('../../stores/pokemon.js');

var ToyDetail = React.createClass({
  getInitialState: function() {
    return { toy: this.getStateFromStore() };
  },

  getStateFromStore: function() {
    var toyId = parseInt(this.props.params.toyId);
    var pokemonId = parseInt(this.props.params.pokemonId)
    return this._findToy(pokemonId, toyId);
  },

  _findToy: function(pokemonId, toyId) {
    var pokemon = PokemonStore.find(pokemonId);
    if (typeof pokemon !== 'undefined'
        && typeof toyId !== 'undefined'
        && typeof pokemon.toys !== 'undefined'){
      return pokemon.toys.find(function(toy) {
        return (toy.id === toyId);
      });
    }
  },

  _foundToy: function() {
    this.setState({
      toy: this.getStateFromStore()
    });
  },

  componentWillUnmount: function() {
    this.detailToken.remove();
  },

  componentDidMount: function() {
    this.detailToken = PokemonStore.addListener(this._foundToy);
  },

  componentWillReceiveProps: function(newProps) {
    var newToyId = parseInt(newProps.toyId);
    var newPokemonId = parseInt(newProps.pokemonId);
    this.setState({
      toy: this._findToy(newPokemonId, newToyId)
    });
  },

  render: function() {
    var img = "";
    if (typeof this.state.toy !== 'undefined') {
      img = (
        <img src={this.state.toy.image_url}/>
      );
    }
    return (
      <div>
        {img}
      </div>
    );
  }
});

module.exports = ToyDetail;
