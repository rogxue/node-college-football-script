var cfb = require('./cfb.js');
var prompt = require('prompt');

var schema = {
  properties: {
    team: {
      message: 'Enter team or command'
    }
  }
}
prompt.start();
//
// Prompts user to enter team or command.
//
prompt.get(schema, function (err, result) {
  var team = result.team.toLowerCase();

  if (team.match('--active')) {
    cfb.getActiveGames(function(result) {
      console.log(result);
    });
  } else {
    cfb.getGameData(team, function(result)  {
      console.log(result + "\n");
    });
  }
});
