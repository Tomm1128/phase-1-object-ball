const gameObject = () => {
  const basketballGame = {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson":{
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans":{
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez":{
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee":{
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry":{
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        }
      }
    },
    away: {
      teamName: "Carlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien":{
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo":{
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "Desagna Diop":{
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon":{
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood":{
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        }
      }
    }
  }
  return basketballGame
}

const game = gameObject()

// trying to break the object up into individual functions to better traverse the data

const findTeam = (team) => {
  if (game.home.teamName === team){
    return game.home
  } else {
    return game.away
  }
}

const playerStats = (player) => {
  if (game.home.players[player] === player){
    return game.home.players[player]
  } else {
    return game.away.players[player]
  }
}

const getAllPlayers = () => {
  return {
    ...game.home.players,
    ...game.away.players
  }
}

const bestPlayerByStat = (stat) => {
  let maxStat = 0
  let playerOfStat = "player"
  const allPlayers = getAllPlayers()

  for (const key in allPlayers ){
    if (allPlayers[key][stat] > maxStat){
      maxStat = allPlayers[key][stat]
      playerOfStat = key
    }
  }

  return playerOfStat
}

const findPlayersOnTeam = (team) => findTeam(team).players

const teamTotalPoints = (team) => {
  const players = findPlayersOnTeam(team)
  let totalPoints = 0

  for (const key in players ){
    totalPoints += players[key].points
  }
  return totalPoints
}

//using functions above to better traverse the game object

const numPointsScored = (player) => playerStats(player).points

const showSize = (player) => playerStats(player).shoe

const teamColors = (team) => findTeam(team).colors

const teamNames = () => [game.home.teamName, game.away.teamName]

const playerNumbers = (team) => {
  const jerseyNumbers = []
  const teamPlayers = findPlayersOnTeam(team)
  for (const key in teamPlayers){
    jerseyNumbers.push(teamPlayers[key].number)
  } 
  return jerseyNumbers
}

const bigShoeRebounds = () => `Player: ${bestPlayerByStat("shoe")}, Rebounds: ${getAllPlayers()[bestPlayerByStat("shoe")].rebounds}`

const mostPointsScored = () => `Player: ${bestPlayerByStat("points")}, Points: ${getAllPlayers()[bestPlayerByStat("points")].points}`

const winningTeam = () => {
  if (teamTotalPoints(game.home.teamName) > teamTotalPoints(game.away.teamName)) {
    return game.home.teamName
  } else {
    return game.home.teamName
  }
}

