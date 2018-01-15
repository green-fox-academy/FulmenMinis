// Money shuffler

// We will pick on of two objects in third one.
// Shuffler object

// Create an object called Shuffler. It should have a pick() method.
const Shuffler = {
  cash: 10000,
  pick: function(name) {
    this.cash -= 1000;
    name.cash += 1000;
    console.log(name.cash);
  }
}

// By default it should have 10000 dollars to shuffle.

//     Each time you call pick, it will pick either Panama or Cyprus to deposit some money.
//     Decrease the amount by 1000 too
//     Console.log which object got how much (eg. Panama got 1000)

// Objects

// The shuffler will pick on of these:

//     Panama object, 1% tax
//     Cyprus object, 5% tax

// each object has these properties:

//     name
//     tax
//     cash

// and one method called deposit(amount)
// Exercise

const Panama = {
    cash: 0,
    name: 'Panama',
    tax: '1%',
    deposit: function(amount) {
    }
}

const Cyprus = {
  cash: 0,
  name: 'Cyprus',
  tax: '5%',
  deposit: function(amount) {
  }
}


Shuffler.pick(Panama) // prints Panama got 1000
Shuffler.pick(Cyprus) // prints Cyprus got 1000
Shuffler.pick(Panama) // prints Panama got 1000
Shuffler.pick(Cyprus) // prints Cyprus got 1000

console.log( Panama.cash ) // 2000 
console.log( Cyprus.cash ) // 2000 