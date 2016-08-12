var
  React = require('react'),
  render = require('react-dom').render;

var
  routes = require('./routes');
  
require('./styles/custom.css');

render(
  routes,
  document.getElementById('app')
);