var React = require('react');
var History = require('react-router').History;

var ToyIndexItem = React.createClass({
  mixins: [History],

  showDetail: function() {
    var toy = this.props.toy;
    var toyDetailUrl = "/pokemon/" + toy.pokemon_id + "/toys/" + toy.id;
    this.history.pushState(toy, toyDetailUrl);
  },

  render: function() {
    return (
      <li className="toy-list-item" onClick={this.showDetail}>
        <p>{"name: " + this.props.toy.name}</p>
        <p>{"happiness: " + this.props.toy.happiness}</p>
        <p>{"price: " + this.props.toy.price}</p>
      </li>
    );
  }
});

module.exports = ToyIndexItem;
