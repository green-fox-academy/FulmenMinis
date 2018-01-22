'use strict';
var TennisGame3 = function(player1Name, player2Name) {
	this.Player2point = 0;
	this.Player1point = 0;
	
	this.player1Name = player1Name;
	this.player2Name = player2Name;
}

TennisGame3.prototype.getScore = function() {
	let score;
	if ((this.Player1point < 4 && this.Player2point < 4) && (this.Player1point + this.Player2point < 6)) {
		let p = ['Love', 'Fifteen', 'Thirty', 'Forty'];
		score = p[this.Player1point];
		return (this.Player1point === this.Player2point) ? score + '-All' : score + '-' + p[this.Player2point];
	} else {
		if (this.Player1point === this.Player2point) {
			return 'Deuce';	
		}
		score = this.Player1point > this.Player2point ? this.player1Name : this.player2Name;
		return ((this.Player1point - this.Player2point) * (this.Player1point - this.Player2point) === 1) ? 'Advantage ' + score : 'Win for ' + score;
	}
}

TennisGame3.prototype.wonPoint = function(playerName) {
	playerName === 'player1' ? this.Player1point ++ : this.Player2point ++;
}

if (typeof window === 'undefined') {
	module.exports = TennisGame3;
}