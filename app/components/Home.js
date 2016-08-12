var
  React = require('react'),
  Link = require('react-router').Link;

var
  Jumbotron = require('./Jumbotron');

var Home = React.createClass({
  render: function() {
    return(
      <Jumbotron>
        <h1>Github Battle</h1>
        <p className='lead'> Some fancy motto</p>
        <Link to='/playerOne'>
          <button type='button' className='btn btn-lg btn-success'>Get Started</button>
        </Link>
      </Jumbotron>
    );
  }
});

module.exports = Home;
