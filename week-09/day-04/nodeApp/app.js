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

// const translate = function (hungarian) {
//   if( typeof hungarian != "string") {
//     return 'Invalid value';
//   }
//   if (hungarian == '') {
//     return '';
//   } else if ("aeiouéáőűöüóí".includes(hungarian[0]) || "AEIOUÉÁŐŰÖÜÓÍ".includes(hungarian[0])) {
//     if ("AEIOUÉÁŐŰÖÜÓÍ".includes(hungarian[0])) {
//       return hungarian[0] + "v" + hungarian[0].toLocaleLowerCase() + translate(hungarian.substring(1));
//     }
//     return hungarian[0] + "v" + hungarian[0] + translate(hungarian.substring(1));
//   }
//   return hungarian[0] + translate(hungarian.substring(1));
// };

// app.post('/translate', urlencoded, function (req, res) {
//   if(req.body.text != undefined && req.body.lang != undefined) {
//     let translatedText = "";
//     translatedText = translate(req.body.text);
//     res.json({ 
//       translated: translatedText,
//       lang: "teve" });
//   } else if(req.body.text == undefined && req.body.lang != undefined) {
//     res.json({ 
//       error: "There is nothing to translate!"
//        });
//   } else {
//     res.json({ 
//       error: "I can't translate that!"
//        });
//   }
// });

// app.post('/sith', urlencoded, function (req, res) {
//   if(req.body.text != undefined) {
//     let translatedText = "";
//     translatedText = sithTranslator(req.body.text);
//     res.json({ 
//       sith_text: translatedText,
//     });
//   } else if(req.body.text == undefined) {
//     res.json({ 
//       error: "Feed me some text you have to, padawan young you are. Hmmm."
//        });
//   }
// });

// function sithTranslator (text) {
//   text = text.split('.');
//   let result = "";
//   for(let x = 0; x < text.length; x++) {
//     let newtext = [];
//     let smalltext = "";
//     newtext = text[x].split(" ");
//     for (let i = 0; i < newtext.length; i += 2) {
//       if (newtext[i + 1] !== undefined) {
//         newtext[i] = [newtext[i+1], newtext[i+1] = newtext[i] ][0];
//       }
//     }
//     if(newtext[1] !== undefined && newtext[1][0] !== undefined) {
//       smalltext = newtext[1][0].toLowerCase() + newtext[1].substring(1);
//       newtext[1] = smalltext;
//       smalltext = newtext[0][0].toUpperCase() + newtext[0].substring(1);
//       newtext[0] = smalltext;
//     }
//     newtext.splice(newtext.indexOf(""), 1);
//     newtext = newtext.join(" ") + ".";
//     if (newtext !== ".") {
//       result += newtext + " ";
//     }
//   }
//   return result;
// }


app.listen(8080); //port választás
console.log('listening to port');
