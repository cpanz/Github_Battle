var
  React = require('react'),
  PropTypes = require('react').PropTypes;

var Loading = React.createClass({
  propTypes: {
    text: PropTypes.string,
    speed: PropTypes.number
  },
  getDefaultProps: function() {
    return {
      text: 'Loading',
      speed: 500
    }
  },
  getInitialState: function() {
    this.originalText = this.props.text;
    return {
      text: this.originalText
    }
  },
  componentDidMount: function() {
    var stopper = this.originalText + '...';
    this.interval = setInterval(function() {
      if (this.state.text === stopper) {
        this.setState({
          text: this.originalText
        });
      } else {
        this.setState({
          text: this.state.text + '.'
        });
      }
    }.bind(this), this.props.speed);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
      <div className='loading'>
        <p className='content'>{this.state.text}</p>
      </div>
    );
  }
});

module.exports = Loading;
