var React = require('react');
var PokemonStore = require('../../stores/pokemon.js');
var ApiUtil = require('../../util/apiUtil.js');
var ToysIndex = require('../toys/toysIndex.jsx');

var PokemonDetail = React.createClass({

  getInitialState: function() {
    return { pokemon: this.getStateFromStore() };
  },

  getStateFromStore: function() {
    return PokemonStore.find(parseInt(this.props.params.pokemonId));
  },

  _foundPokemon: function() {
    this.setState({
      pokemon: this.getStateFromStore()
    });
  },

  componentWillUnmount: function() {
    this.detailToken.remove();
  },

  componentDidMount: function() {
    this.detailToken = PokemonStore.addListener(this._foundPokemon);
  },

  componentWillReceiveProps: function(newProps) {
    // console.log(this.state.pokemon);
    // why being called twice?
    ApiUtil.fetchSinglePokemon(newProps.params.pokemonId);
  },



  render: function() {

    var pokemon = this.state.pokemon;
    var pokemonDetails = "";
    if (typeof this.state.pokemon !== 'undefined'){
      pokemonDetails = (
        <div>
          <h3>{pokemon.name}</h3>
          <p>{"id: " + pokemon.id}</p>
          <p>{"Type: "+ pokemon.poke_type}</p>
          <p><img src={pokemon.image_url}></img></p>
          <ToysIndex toys={pokemon.toys} />
        </div>
      )
    }
    return (
      <div>
        <div className="pokemon-detail-pane">
          <div className="detail">
            {pokemonDetails}
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }

});

module.exports = PokemonDetail;
