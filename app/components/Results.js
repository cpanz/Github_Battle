var
  React = require('react'),
  PropTypes = React.PropTypes,
  Link = require('react-router').Link;

var
  UserDetails = require('./UserDetails'),
  UserDetailsWrapper = require('./UserDetailsWrapper'),
  Jumbotron = require('./Jumbotron');

function StartOver() {
  return (
    <div className='col-sm-12'>
      <Link to='/playersInfo'>
        <button type='button'className='btn btn-lg btn-danger'>Start Over</button>
      </Link>
    </div>
  );
}

function Results (props) {
  if (props.isLoading) {
    return (
      <p>Loading...</p>
    )
  }

  if (props.scores[0] === props.scores[1]) {
    return (
      <Jumbotron>
        <h1>It's a tie</h1>
        <StartOver />
      </Jumbotron>
    )
  }

  var
    Winner = props.scores[0] > props.scores[1] ? 0 : 1,
    Loser = Winner === 1 ? 0 : 1;
  return (
    <Jumbotron className='jumbotron col-sm-12 text-center'>
      <h1>Results</h1>
      <div className='col-sm-8 col-sm-offset-2'>
        <UserDetailsWrapper header='Winner'>
          <UserDetails score={props.scores[Winner]} info={props.playersInfo[Winner]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header='Loser'>
          <UserDetails score={props.scores[Loser]} info={props.playersInfo[Loser]} />
        </UserDetailsWrapper>
      </div>
      <StartOver />
    </Jumbotron>
  );
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired,
}

module.exports = Results;
