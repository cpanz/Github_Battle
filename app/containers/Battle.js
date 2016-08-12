var
  React = require('react');

var
  BattleUI = require('../components/BattleUI'),
  GithubHelper = require('../utils/GithubHelper');

var Battle = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      isLoading: true,
      playersInfo: []
    }
  },
  componentDidMount: function() {
    var query = this.props.location.query;
    GithubHelper.getPlayersInfo([query.playerOne, query.playerTwo])
      .then(function(players) {
        this.setState({
          isLoading: false,
          playersInfo: [players[0], players[1]]
        });
      }.bind(this));
  },
  handleInitBattle: function() {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    });
  },
  render: function() {
    return(
      <BattleUI
      isLoading={this.state.isLoading}
      onInitBattle={this.handleInitBattle}
      playersInfo={this.state.playersInfo} />
    );
  }
});

module.exports = Battle;
