var
  axios = require('axios');

var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var param = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username)
}

function getRepos(username) {
  return axios.get('https://api.github.com/users/' + username + '/repos' + param + '&per_pages=100')
}

function getTotalStars(repos) {
  return repos.data.reduce(function(prev, current) {
    return prev + current.stargazers_count;
  }, 0);
}

function getPlayerData(player) {
  return getRepos(player.login)
    .then(getTotalStars)
    .then(function(totalStars) {
      return {
        followers: player.followers,
        totalStars: totalStars
      }
    });
}

function calculateScore(players) {
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ]
}

var GithubHelper = {
  getPlayersInfo: function(players) {
    return axios.all(players.map(function(username) {
      return getUserInfo(username);
    }))
      .then(function(info) {
        return info.map(function(user) {
          return user.data;
        });
      })
      .catch(function(err) {
        console.log(err);
        throw err;
      });
  },
  battle: function(players) {
    var
      playerOneData = getPlayerData(players[0]),
      playerTwoData = getPlayerData(players[1]);

    return axios.all([playerOneData, playerTwoData])
      .then(calculateScore)
      .catch(function(err) {
        console.error(err);
        throw err;  
      })
  }
};

module.exports = GithubHelper;