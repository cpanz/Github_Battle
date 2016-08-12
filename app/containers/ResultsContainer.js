var
  React = require('react');

var
  Results = require('../components/Results'),
  GithubHelper = require('../utils/GithubHelper');

var ResultsContainer = React.createClass({
  getInitialState: function() {
    return {
      isLoading: true,
      scores: []
    }
  },
  componentDidMount: function() {
    GithubHelper.battle(this.props.location.state.playersInfo)
      .then(function(scores) {
        this.setState({
          scores: scores,
          isLoading: false
        });
      }.bind(this));
  },
  render: function() {
    return (
      <Results
        playersInfo={this.props.location.state.playersInfo}
        isLoading={this.state.isLoading}
        scores={this.state.scores} />
    );
  }
});

module.exports = ResultsContainer;