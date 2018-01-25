var express = require('express');
var cors = require('cors');
var app = express();
const bodyParser = require('body-parser');

app.use('/assets', express.static('./assets')); // ezzel a kliensnek átadom a teljes mappát tartalommal
app.use(express.json());
app.use(cors());
// server létrehozása
//endpoint -default endpoint, meghívja a html fájlt -mindíg a listen elé kell tenni az összes endpointot!
app.get('/', function(request, response){  //string, anon func
  response.sendFile(__dirname + '/assets/index.html');
});

app.get('/slash', function(request, response){  //string, anon func
  response.json({'dog': 'Slash'});
});

//GREETER exercise
app.get('/greeter', function(request, response){  
  if (request.query.name && request.query.title) { // ha localhost:8000/greeter?name=Petike&title=student
    response.json({"welcome_message": "Oh, hi there " + request.query.name + ", my dear " + request.query.title + "!"})
  } else if (request.query.name && !request.query.title) {
    response.json({
      "error": "Please provide a title!" 
    })
  } else {
    response.json({
      "error": "Please provide a name!" // hacsak simán greeter megy be 
    })
  }
});

//DOUBLING exercise
app.get('/doubling', function(request, response){  
  if (request.query.input) { 
    response.json({
      "received": request.query.input,
      "result": request.query.input * 2
    });
  } 
  else {
    response.json({
      "error": "Please provide an input!" 
    })
  }
});

//APPENDA exercise
app.get('/appenda/:input', function (request, response) {
  response.json({"appended": request.params.input + 'a'});
});

//DO UNTIL exercise
const sumIt = function (num) {
  sum = 0;
  for (let i = 0; i <= num; i++) {
      sum += i;
  }
  return sum;
}

const factorIt = function (num) {
  console.log(num)
  if (num <= 1) {
      return 1;
  }
  return num * factorIt(num - 1)
}

app.post('/dountil/:operation', function(request, response) {
  if (request.params.operation === "sum") {
      response.json({
          result: sumIt(request.body.until)
      })
  } else if (request.params.operation === "factor") {
      response.json({
          result: factorIt(request.body.until)
      })
  } else {
      response.json({
          error: "Please provide a number!"
      })
  }
});

//ARRAY HANDLER exercise
app.post('/arrays', function(request, response) {
  if (request.body.what === "sum") {
    response.json({
      result: request.body.numbers.reduce((result, number) => result += number, 0)
      })
  }
  else if (request.body.what === "multiply") {
    response.json({
      result: request.body.numbers.reduce((result, number) => result *= number, 1)
      })
  }
  else if (request.body.what === "double") {
    response.json({
      result: request.body.numbers.map((number) => number * 2)
      })
  }
  else if (!request.body.what || !request.body.numbers) {
    response.json({
      error: "Please provide what to do with the numbers!"
      })
  }
});


app.listen(8080); //port választás
console.log('listening to port');

