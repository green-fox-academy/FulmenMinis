'use strict';
var TennisGame1 = function(player1Name, player2Name) {
  this.matchScore1 = 0;
  this.matchScore2 = 0;
  this.player1Name = player1Name;
  this.player2Name = player2Name;
}

TennisGame1.prototype.wonPoint = function(playerName) {
  playerName === 'player1' ? this.matchScore1 ++ : this.matchScore2 ++;
}

function determineScore(score) {
  return {
    0: 'Love-All',
    1: 'Fifteen-All',
    2: 'Thirty-All',
  }[score] || 'Deuce';
}

TennisGame1.prototype.getScore = function() {
  var score = '';
  var tempScore = 0;
  
  if (this.matchScore1 === this.matchScore2) {
    score = determineScore(this.matchScore1)
  } else if (this.matchScore1 >= 4 || this.matchScore2 >= 4) {
    let minusResult = this.matchScore1 - this.matchScore2;
    if (minusResult === 1) {
      score = 'Advantage player1';
    } else if (minusResult === -1) {
      score = 'Advantage player2';
    } else if (minusResult >= 2) {
      score = 'Win for player1';
    } else {score = 'Win for player2';}
  } else {
    for (let i = 1; i < 3; i++) {
      if (i === 1) {
        tempScore = this.matchScore1;
      // } else if (tempscore === 0){
      //   score += 'Love';
      // } else if (tempscore === 1){
      //   score += 'Fifteen';
      // } else if (tempscore === 2){
      //   score += 'Thirty';
      // } else if (tempscore === 3){
      //   score += 'Forty';
      } else {
        score += '-';
        tempScore = this.matchScore2;
      }
      switch (tempScore) {
        case 0:
        score += 'Love';
        break;
        case 1:
        score += 'Fifteen';
        break;
        case 2:
        score += 'Thirty';
        break;
        case 3:
        score += 'Forty';
        break;
      }
    }
  }
  return score;
}

if (typeof window === 'undefined') {
  module.exports = TennisGame1;
}