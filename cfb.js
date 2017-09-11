const request = require("tinyreq");
const cheerio = require("cheerio");
const dateFormat = require("dateformat");

module.exports =
{
  //
  // Retrieves single game data.
  //
  getGameData: function (s, callback) {
    var team = s.toLowerCase().trim();
    //
    // Team name must match exactly how the NCAA website displays it.
    // I really don't like this. Is there any better way to do it?
    // This is the main thing that prevented me from adding FCS, D2, and D3 teams.
    //
    if (team.match('air force')) {
      team = 'Air Force';
    } else if (team.match('Akron')) {
      team = 'Akron';
    } else if (team.match('alabama') || team.match('bama')) {
      team = 'Alabama';
    } else if (team.match('app state') || team.match('appalachian state')) {
      team = 'Appalachian St.';
    } else if (team.match('arizona')) {
      team = 'Arizona';
    } else if (team.match('arizona state') || team.match('asu')) {
      team = 'Arizona St.';
    } else if (team.match('arkansas')) {
      team = 'Arkansas';
    } else if (team.match('arkansas state')) {
      team = 'Arkansas State';
    } else if (team.match('army')) {
      team = 'Army West Point';
    } else if (team.match('auburn')) {
      team = 'Auburn';
    } else if (team.match('ball state')) {
      team = 'Ball State';
    } else if (team.match('baylor')) {
      team = 'Baylor';
    } else if (team.match('boise state') || team.match('boise') || team.match('bsu')) {
      team = 'BOISE';
    } else if (team.match('boston college')) {
      team = 'Boston College';
    } else if (team.match('bowling green')) {
      team = 'Bowling Green';
    } else if (team.match('buffalo')) {
      team = 'Buffalo';
    } else if (team.match('byu')) {
      team = 'BYU';
    } else if (team.match('california') || team.match('cal')) {
      team = 'California';
    } else if (team.match('fresno state')) {
      team = 'Fresno State';
    } else if (team.match('ucla')) {
      team = 'UCLA';
    } else if (team.match('ucf')) {
      team = 'UCF';
    } else if (team.match('central michigan') || team.match('cmu')) {
      team = 'Cent. Michigan';
    } else if (team.match('charlotte')) {
      team = 'Charlotte';
    } else if (team.match('cincinatti') || team.match('cincy')) {
      team = 'Cincy';
    } else if (team.match('clemson')) {
      team = 'Clemson';
    } else if (team.match('colorado')) {
      team = 'Colorado';
    } else if (team.match('colorado state') || team.match('csu')) {
      team = 'Colorado State';
    } else if (team.match('connecticut') || team.match('uconn') || team.match('conn')) {
      team = 'Connecticut';
    } else if (team.match('duke')) {
      team = 'Duke';
    } else if (team.match('eastern michigan') || team.match('emu')) {
      team = 'Eastern Mich.';
    } else if (team.match('eastern carolina') || team.match('ecu')) {
      team = 'East Carolina';
    } else if (team.match('fiu')) {
      team = 'FIU';
    } else if (team.match('florida')) {
      team = 'Florida';
    } else if (team.match('florida atlantic') || team.match('fau')) {
      team = 'Florida Atlantic';
    } else if (team.match('florida state') || team.match('fsu')) {
      team = 'Florida State';
    } else if (team.match('georgia') || team.match('uga')) {
      team = 'Georgia';
    } else if (team.match('georgia southern') || team.match('gsu')) {
      team = 'Georgia Southern';
    } else if (team.match('georgia state')) {
      team = 'Georgia State';
    } else if (team.match('georgia tech') || team.match('gt')) {
      team = 'Georgia Tech';
    } else if (team.match('hawaii')) {
      team = 'Hawaii';
    } else if (team.match('houston')) {
      team = 'Houston';
    } else if (team.match('idaho')) {
      team = 'Idaho';
    } else if (team.match('illionis')) {
      team = 'Illinois';
    } else if (team.match('indiana')) {
      team = 'Indiana';
    } else if (team.match('iowa')) {
      team = 'IOWA';
    } else if (team.match('iowa state')) {
      team = 'IOWAST';
    } else if (team.match('kansas`')) {
      team = 'Kansas';
    } else if (team.match('kansas state')) {
      team = 'Kansas St.';
    } else if (team.match('kent state')) {
      team = 'Kent State';
    } else if (team.match('kentucky')) {
      team = 'Kentucky';
    } else if (team.match('lsu')) {
      team = 'LSU';
    } else if (team.match('louisiana tech')) {
      team = 'Louisiana Tech';
    } else if (team.match('louisiana lafayette')) {
      team = 'La.-Lafayette';
    } else if (team.match('louisiana monroe')) {
      team = 'La.-Monroe';
    } else if (team.match('louisvile')) {
      team = 'Louisville';
    } else if (team.match('marshall')) {
      team = 'Marshall';
    } else if (team.match('maryland') || team.match('umd')) {
      team = 'Maryland';
    } else if (team.match('massachusetts') || team.match('umass')) {
      team = 'Massachusetts';
    } else if (team.match('memphis')) {
      team = 'Memphis';
    } else if (team.match('miami')) {
      team = 'Miami (Fla.)';
    } else if (team.match('miami oh')) {
      team = 'Miami (Ohio)';
    } else if (team.match('michigan')) {
      team = 'Michigan';
    } else if (team.match('michigan state') || team.match('msu')) {
      team = 'Mich. St.';
    } else if (team.match('middle tennessee')) {
      team = 'Middle Tenn.';
    } else if (team.match('minnesota')) {
      team = 'Minnesota';
    } else if (team.match('ole miss')) {
      team = 'Ole Miss';
    } else if (team.match('mississippi state')) {
      team = 'Mississippi St.';
    } else if (team.match('missouri') || team.match('mizzou')) {
      team = 'Missouri';
    } else if (team.match('navy')) {
      team = 'Navy';
    } else if (team.match('nebraska')) {
      team = 'Nebraska';
    } else if (team.match('nevada')) {
      team = 'Nevada';
    } else if (team.match('unlv')) {
      team = 'UNLV';
    } else if (team.match('new mexico')) {
      team = 'New Mexico';
    } else if (team.match('new mexico state') || team.match('nmsu')) {
      team = 'New Mexico St.';
    } else if (team.match('north carolina') || team.match('unc')) {
      team = 'North Carolina';
    } else if (team.match('nc state') || team.match('ncstate')) {
      team = 'NC State';
    } else if (team.match('north texas')) {
      team = 'North Texas';
    } else if (team.match('niu') || team.match('northern illinois')) {
      team = 'Northern Ill.';
    } else if (team.match('northwestern')) {
      team = 'Northwestern';
    } else if (team.match('notre dame') || team.match('nd')) {
      team = 'Notre Dame';
    } else if (team.match('ohio')) {
      team = 'Ohio';
    } else if (team.match('ohio state') || team.match('osu') || team.match('tosu')) {
      team = 'Ohio St.';
    } else if (team.match('oklahoma') || team.match('ou')) {
      team = 'Oklahoma';
    } else if (team.match('oklahoma state')) {
      team = 'Oklahoma State';
    } else if (team.match('old dominion') || team.match('odu')) {
      team = 'Old Dominion';
    } else if (team.match('oregon')) {
      team = 'Oregon';
    } else if (team.match('oregon state')) {
      team = 'Oregon State';
    } else if (team.match('penn state') || team.match('psu')) {
      team = 'Penn St.';
    } else if (team.match('pittsburgh') || team.match('pitt')) {
      team = 'Pittsburgh';
    } else if (team.match('purdue')) {
      team = 'Purdue';
    } else if (team.match('rice')) {
      team = 'Rice';
    } else if (team.match('rutgers')) {
      team = 'Rutgers';
    } else if (team.match('san diego')) {
      team = 'San Diego State';
    } else if (team.match('san jose')) {
      team = 'San Jose State';
    } else if (team.match('south alabama')) {
      team = 'South Alabama';
    } else if (team.match('south carolina')) {
      team = 'South Carolina';
    } else if (team.match('south florida') || team.match('usf')) {
      team = 'South Florida';
    } else if (team.match('usc')) {
      team = 'USC';
    } else if (team.match('smu')) {
      team = 'SMU';
    } else if (team.match('southern miss')) {
      team = 'Southern Miss';
    } else if (team.match('stanford')) {
      team = 'Stanford';
    } else if (team.match('syracuse')) {
      team = 'Syracuse';
    } else if (team.match('tcu')) {
      team = 'TCU';
    } else if (team.match('temple')) {
      team = 'Temple';
    } else if (team.match('tennessee') || team.match('utk')) {
      team = 'Tennessee';
    } else if (team.match('texas')) {
      team = 'Texas';
    } else if (team.match('texas a&m') || team.match('a&m') || team.match('texas am')) {
      team = 'Texas A&M';
    } else if (team.match('texas state')) {
      team = 'Texas State';
    } else if (team.match('texas tech')) {
      team = 'Texas Tech';
    } else if (team.match('utep')) {
      team = 'UTEP';
    } else if (team.match('utsa')) {
      team = 'UTSA';
    } else if (team.match('toledo')) {
      team = 'Toledo';
    } else if (team.match('troy')) {
      team = 'Troy';
    } else if (team.match('tulane')) {
      team = 'Tulane';
    } else if (team.match('tulsa')) {
      team = 'Tulsa';
    } else if (team.match('uab')) {
      team = 'UAB';
    } else if (team.match('utah')) {
      team = 'Utah';
    } else if (team.match('utah state') || team.match('usu')) {
      team = 'Utah State';
    } else if (team.match('vanderbilt') || team.match('vandy')) {
      team = 'Vanderbilt';
    } else if (team.match('virginia') || team.match('uva')) {
      team = 'Virginia';
    } else if (team.match('virginia tech') || team.match('vt')) {
      team = 'Virginia Tech';
    } else if (team.match('wake forest') || team.match('wf')) {
      team = 'Wake Forest';
    } else if (team.match('washington') || team.match('uw')) {
      team = 'Washington';
    } else if (team.match('washington state') || team.match('wazzu')) {
      team = 'WASHST';
    } else if (team.match('west virginia') || team.match('wvu')) {
      team = 'West Virginia';
    } else if (team.match('western kentucky') || team.match('wku')) {
      team = 'Western Ky.';
    } else if (team.match('western michigan') || team.match('wmu')) {
      team = 'Western Mich.';
    } else if (team.match('wisconsin') || team.match('wisco')) {
      team = 'Wisconsin';
    } else if (team.match('wyoming')) {
      team = 'Wyoming';
    } else {
      team = null;
    }
    //
    // Retrieves team game data if name is valid.
    //
    if (team) {
      retrieveGame(team, function(result)  {
        callback(result);
      });
    }
    else {
      callback("Team not recognized.");
    }
  },
  //
  // Gets all active games.
  //
  getActiveGames: function(callback) {
    retrieveAllActiveGames(function(result)  {
      callback(result);
    });
  }
}
//
// Gets single game results.
//
function retrieveGame(team, callback)  {
  var teams = [];
  var apRank = [];
  var status = [];
  var scores = [];
  var dates = [];
  var found = false;
  request("http://www.ncaa.com/scoreboard/football/fbs", function (err, body) {
      // Team names and ranking
      var $ = cheerio.load(body);
      $('div.team').each(function(i, element){
        var teamName = $(this).text().replace(/[0-9]+-[0-9]+/, '');
        teams.push(teamName.trim());
        var teamRanking = $(this).prev(); // May not necessarily exist
        apRank.push(teamRanking.text());
      });
      // Current game status
      $('div.game-championship').each(function(i, element){
        var gameStatus = $(this).prev();
        status.push(gameStatus.text().replace(/\s\s+/g, ' '));
      });
      // Game date and time
      $('.gamecenter').each(function(i, element){
        var dateTime = $(this).attr('href');
        dates.push(dateFormat(Date.parse(dateTime.substr(19,10)), "dddd, mmmm dS"));
      });
      // Game scores
      $('td.status-tray').each(function(i, element){
        var score = $(this).prev();
        scores.push(score.text());
      });

      for (i = 0; i < teams.length; i++)  {
        if (teams[i].toLowerCase() === team.toLowerCase())  {
          found = true;
          var teamName = teams[i] + ((apRank[i] === '') ? '' : ' (' + apRank[i] + ')');
          var j = (i % 2 == 1) ? i - 1 : i + 1;
          var otherTeamName = teams[j] + ((apRank[j] === '') ? '' : ' (' + apRank[j] + ')');

          if (scores[i].length == 0) {  // Game hasn't happened yet
            var str = teamName + ' is playing ' + otherTeamName
            + ' at ' + status[Math.floor(i / 2)] + ' on ' + dates[Math.floor(i / 2)] + '.';
            callback(str);
          } else {  // Game is currently playing or finished and NOT tied
            var score = parseInt(scores[i]);
            var otherTeamScore = parseInt((i % 2 == 1) ? scores[i - 1] : scores[i + 1]);
            var str = (status[Math.floor(i / 2)].match('Final')) ?
            (teamName + ((score > otherTeamScore) ? ' beat ' : ' lost to ')
            + otherTeamName
            + ' ' + score + ' to ' + otherTeamScore + ' on ' + dates[Math.floor(i / 2)] + '.')
            :
            (teamName + ' is ' + ((score > otherTeamScore) ? 'leading ' : 'trailing ')
            + otherTeamName
            + ' ' + score + ' to ' + otherTeamScore + '.'
            + '\n' + status[Math.floor(i / 2)]);

            if (score == otherTeamScore)  { // Game is currently playing and tied
              str = teamName + ' is tied with '
              + otherTeamName
              + ' ' + score + ' to ' + otherTeamScore + '.'
              + '\n' + status[Math.floor(i / 2)];
            }
            callback(str);
          }
        }
      }
      if (!found) { // Team isn't listed on NCAA website
        var str = team + ' is not playing this week.';
        callback(str);
      }
  });
}
//
// Gets all active game scores.
//
function retrieveAllActiveGames(callback)  {
  var teams = [];
  var apRank = [];
  var status = [];
  var scores = [];
  var dates = [];
  var found = false;
  request("http://www.ncaa.com/scoreboard/football/fbs", function (err, body) {
      // Team names and ranking
      var $ = cheerio.load(body);
      $('div.team').each(function(i, element){
        var teamName = $(this).text().replace(/[0-9]+-[0-9]+/, '');
        teams.push(teamName.trim());
        var teamRanking = $(this).prev(); // May not necessarily exist
        apRank.push(teamRanking.text());
      });
      // Current game status
      $('div.game-championship').each(function(i, element){
        var gameStatus = $(this).prev();
        status.push(gameStatus.text().replace(/\s\s+/g, ' '));
      });
      // Game date and time
      $('.gamecenter').each(function(i, element){
        var dateTime = $(this).attr('href');
        dates.push(dateFormat(Date.parse(dateTime.substr(19,10)), "dddd, mmmm dS"));
      });
      // Game scores
      $('td.status-tray').each(function(i, element){
        var score = $(this).prev();
        scores.push(score.text());
      });

      var str = '';
      for (i = 0; i < teams.length; i++)  {
          var teamName = teams[i] + ((apRank[i] === '') ? '' : ' (' + apRank[i] + ')');
          var j = (i % 2 == 1) ? i - 1 : i + 1;
          var otherTeamName = teams[j] + ((apRank[j] === '') ? '' : ' (' + apRank[j] + ')');
          if (scores[i].length == 0 || status[Math.floor(i / 2)].match('Final')) {
            // do nothing
          } else {
            found = true;
            var score = parseInt(scores[i]);
            var otherTeamScore = parseInt((i % 2 == 1) ? scores[i - 1] : scores[i + 1]);
            str += (score == otherTeamScore) ?
            (teamName + ' is tied with ' + otherTeamName
            + ' ' + score + ' to ' + otherTeamScore + '.'
            + '\n' + status[Math.floor(i / 2)])
            :
            (teamName + ' is ' + ((score > otherTeamScore) ? 'leading ' : 'trailing ')
            + otherTeamName
            + ' ' + score + ' to ' + otherTeamScore + '.'
            + '\n' + status[Math.floor(i / 2)]);
            str += '\n\n';
          }
          i++;
      }
      if (!found) {
        callback('No active games.');
      }
      callback(str.trim());
  });
}
