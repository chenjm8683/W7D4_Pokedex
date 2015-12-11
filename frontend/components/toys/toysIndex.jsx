var React = require('react');
var ToyIndexItem = require('./toyIndexItem.jsx');

var ToysIndex = React.createClass({
  render: function() {
    var toysLi = "";
    if (typeof this.props.toys !== 'undefined') {
      toysLi = this.props.toys.map(function(toy){
        return (
            <ToyIndexItem key={toy.id} toy={toy} />
        );
      });
    }

    return (
      <ul>
        {toysLi}
      </ul>
    );
  }
});

module.exports = ToysIndex;
