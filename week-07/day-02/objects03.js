'use strict';

var accounts = [
	{ 'client_name': 'Igor', 'account_number': 11234543, 'balance': 203004099.2 },
	{ 'client_name': 'Vladimir', 'account_number': 43546731, 'balance': 5204100071.23 },
	{ 'client_name': 'Sergei', 'account_number': 23456311, 'balance': 1353600.0 }
]

// Create function that returns the name and balance of cash on an account
function returnsNameBalance(accountNumber){
  let account = accounts.find(account => account['account_number'] === accountNumber);
  return [account['client_name'], account['balance']];
}

console.log(returnsNameBalance(11234543));
console.log(returnsNameBalance(43546731));
console.log(returnsNameBalance(23456311));

// Create function that transfers an amount of cash from one account to another
// it should have three parameters:
//  - from account_number
//  - to account_number
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.

function transfer(fromAccount, toAccount, amount){

	if((fromAccount || toAccount) != (11234543 || 43546731 || 23456311)) {
		console.log('404 - account not found');
	}

	for(let i = 0; i < accounts.length; i++) {
		if(fromAccount == accounts[i].account_number) {
			accounts[i].balance -= amount;
			console.log('Money has been sent from this account: ' + accounts[i].client_name + '.\nNew balance is: ' + accounts[i].balance);
		}
		if(toAccount == accounts[i].account_number) {
			accounts[i].balance += amount;
			console.log('Money has been sent to this account: ' + accounts[i].client_name + '.\nNew balance is: ' + accounts[i].balance);
		}
	}
}

transfer(11234543, 43546731, 100000000);