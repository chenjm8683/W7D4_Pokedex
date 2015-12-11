var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ApiUtil = require('../util/apiUtil.js');

var PokemonForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return {
      name: "",
      attack: 0,
      defense: 0,
      moves: "",
      poke_type: ""
    };
  },

  handleSubmit: function(e) {
    debugger;
    console.log(e);
    ApiUtil.createPokemon();
  },

  render: function() {
    var options = window.pokemonTypes.map(function(type){
      return (
        <option key={type} value={type}>{type}</option>
      );
    });

    return (
      <form className='new-pokemon' onSubmit={this.handleSubmit}>
        <input type="text" valueLink={ this.linkState("name") }  placeholder="Name"></input>
        <input type="number" valueLink={ this.linkState("attack") } placeholder="Attack"></input>
        <input type="number" valueLink={ this.linkState("defense") } placeholder="Defense"></input>
        <input type="text" valueLink={ this.linkState("moves") } placeholder="Move"></input>
        <select valueLink={ this.linkState("poke_type") }>{options}</select>
        <input type="submit"  value="Submit"></input>
      </form>

    )
  }
});

module.exports = PokemonForm;
