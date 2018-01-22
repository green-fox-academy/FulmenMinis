'use strict';
var TennisGame2 = function(player1Name, player2Name) {
  this.Player1point = 0;
  this.Player2point = 0;
  
  this.Player1Result = '';
  this.Player2Result = '';
  
  this.player1Name = player1Name;
  this.player2Name = player2Name;
}

TennisGame2.prototype.getScore = function() {
  let score = '';
  
  if (this.Player1point === this.Player2point && this.Player1point < 3) {
    if (this.Player1point === 0)
    score = 'Love';
    if (this.Player1point === 1)
    score = 'Fifteen';
    if (this.Player1point === 2)
    score = 'Thirty';
    score += '-All';
  }
  if (this.Player1point === this.Player2point && this.Player1point > 2) {
    score = 'Deuce';
  }
  
  
  if (this.Player1point > 0 && this.Player2point === 0) {
    if (this.Player1point === 1)
    this.Player1Result = 'Fifteen';
    if (this.Player1point === 2)
    this.Player1Result = 'Thirty';
    if (this.Player1point === 3)
    this.Player1Result = 'Forty';
    
    this.Player2Result = 'Love';
    score = this.Player1Result + '-' + this.Player2Result;
  }
  if (this.Player2point > 0 && this.Player1point === 0) {
    if (this.Player2point === 1)
    this.Player2Result = 'Fifteen';
    if (this.Player2point === 2)
    this.Player2Result = 'Thirty';
    if (this.Player2point === 3)
    this.Player2Result = 'Forty';
    
    this.Player1Result = 'Love';
    score = this.Player1Result + '-' + this.Player2Result;
  }
  
  if (this.Player1point > this.Player2point && this.Player1point < 4) {
    if (this.Player1point === 2)
    this.Player1Result = 'Thirty';
    if (this.Player1point === 3)
    this.Player1Result = 'Forty';
    if (this.Player2point === 1)
    this.Player2Result = 'Fifteen';
    if (this.Player2point === 2)
    this.Player2Result = 'Thirty';
    score = this.Player1Result + '-' + this.Player2Result;
  }
  if (this.Player2point > this.Player1point && this.Player2point < 4) {
    if (this.Player2point === 2)
    this.Player2Result = 'Thirty';
    if (this.Player2point === 3)
    this.Player2Result = 'Forty';
    if (this.Player1point === 1)
    this.Player1Result = 'Fifteen';
    if (this.Player1point === 2)
    this.Player1Result = 'Thirty';
    score = this.Player1Result + '-' + this.Player2Result;
  }
  
  if (this.Player1point > this.Player2point && this.Player2point >= 3) {
    score = 'Advantage player1';
  }
  
  if (this.Player2point > this.Player1point && this.Player1point >= 3) {
    score = 'Advantage player2';
  }
  
  if (this.Player1point >= 4 && this.Player2point >= 0 && (this.Player1point - this.Player2point) >= 2) {
    score = 'Win for player1';
  }
  if (this.Player2point >= 4 && this.Player1point >= 0 && (this.Player2point - this.Player1point) >= 2) {
    score = 'Win for player2';
  }
  return score;
}

TennisGame2.prototype.SetP1Score = function(number) {
  for (let i = 0; i < number; i++) {
    this.P1Score();
  }
}

TennisGame2.prototype.SetP2Score = function(number) {
  for (let i = 0; i < number; i++) {
    this.P2Score();
  }
}

TennisGame2.prototype.P1Score = function() {
  this.Player1point++;
}

TennisGame2.prototype.P2Score = function() {
  this.Player2point++;
}

TennisGame2.prototype.wonPoint = function(player) {
  player === 'player1' ? this.P1Score() : this.P2Score();
}

if (typeof window === 'undefined') {
  module.exports = TennisGame2;
}