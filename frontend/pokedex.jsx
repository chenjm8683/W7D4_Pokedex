var React = require('react');
var ReactDOM = require('react-dom');
var ApiUtil = require('./util/apiUtil');
var PokemonStore = require('./stores/pokemon.js');
var PokemonsIndex = require('./components/pokemons/pokemonsIndex');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var App = require('./components/app.jsx');

var routes = (
  <Route path="/" component={App}></Route>
);


document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById('root'));
});
