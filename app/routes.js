var
  React = require('react'),
  Router = require('react-router').Router,
  Route = require('react-router').Route,
  IndexRoute = require('react-router').IndexRoute,
  BrowserHistory = require('react-router').browserHistory;

var
  Main = require('./components/Main'),
  Home = require('./components/Home'),
  Prompt = require('./containers/Prompt'),
  Battle = require('./containers/Battle'),
  Results = require('./containers/ResultsContainer');

var routes = (
  <Router history={BrowserHistory}>
    <Route path='/' component={Main} >
      <IndexRoute component={Home} />
      <Route path='playerOne' header='Player One' component={Prompt} />
      <Route path='playerTwo/:playerOne' header='Player Two' component={Prompt} />
      <Route path='battle' component={Battle} />
      <Route path='results' component={Results} />
    </Route>
  </Router>
);

module.exports = routes;