var React = require('react');

function Jumbotron(props) {
  return (
    <div className="jumbotron col-sm-12 text-center">
      {props.children}
    </div>
  );
}

module.exports = Jumbotron;
