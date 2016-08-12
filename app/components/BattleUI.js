var
  React = require('react'),
  PropTypes = require('react').PropTypes,
  Link = require('react-router').Link;

var
  UserDetails = require('./UserDetails'),
  UserDetailsWrapper = require('./UserDetailsWrapper'),
  Jumbotron = require('./Jumbotron'),
  Loading = require('./Loading');

function BattleUI(props) {
  return props.isLoading === true
    ? <Loading speed={800} text='Waiting' />
    : <Jumbotron>
        <h1>Confirm Player</h1>
        <div className='col-md-8 col-sm-offset-2'>
          <UserDetailsWrapper header='Player One'>
            <UserDetails info={props.playersInfo[0]} />
          </UserDetailsWrapper>
          <UserDetailsWrapper header='Player Two'>
            <UserDetails info={props.playersInfo[1]} />
          </UserDetailsWrapper>
        </div>
        <div className='col-sm-8 col-sm-offset-2'>
          <div className='col-sm-12'>
            <button type='button' className='btn btn-lg btn-success' onClick={props.onInitBattle}>
              Initiate Battle!
            </button>
          </div>
          <div className='col-sm-12'>
            <Link to='/playerOne'>
              <button type='button' className='btn btn-lg btn-danger'>Reselect Players</button>
            </Link>
          </div>
        </div>
      </Jumbotron>
}

BattleUI.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired
}
module.exports = BattleUI;
