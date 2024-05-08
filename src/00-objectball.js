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

const numPointsScored = (player) => {
  const game = gameObject()

  if (game.home.players[player] === player){
    return game.home.players[player].points
  } else {
    return game.away.players[player].points
  }
}

numPointsScored('Ben Gordon');

const showSize = (player) => {
  const game = gameObject()

  if (game.home.players[player] === player){
    return game.home.players[player].shoe
  } else {
    return game.away.players[player].shoe
  }
}

console.log(showSize('Ben Gordon'))

const teamColors = (team) => {
  const game = gameObject()
  if (game.home.teamName === team){
    return game.home.colors
  } else {
    return game.away.colors
  }
}

console.log(teamColors("Brooklyn Nets"))

const teamNames = () => {
  const game = gameObject()
  return [game.home.teamName, game.away.teamName]
}

console.log(teamNames())

const playerNumbers = (team) => {
  const game = gameObject()
  const jerseyNumbers = []
  if (game.home.teamName === team){
    for (const key in game.home.players){
      jerseyNumbers.push(game.home.players[key].number)
    }
  } else {
    for (const key in game.away.players){
      jerseyNumbers.push(game.away.players[key].number)
    }
  }
  return jerseyNumbers
}

console.log(playerNumbers("Brooklyn Nets"))

