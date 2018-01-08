
// Crate a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % % 
//  % % % %
//

// Solution 1 
for (var i = 1; i < 5; i++) {
    console.log('% % % %\n' + ' % % % %');
}

// Solution 2
var i = 0;
while (i < 4) {
    console.log('% '.repeat(4));
    console.log(' %'.repeat(4)); 
    i++;
}        
