'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyparser.json()); //!

//middlewarenek nevezett dolgok ebbe kerülnek, azelőtt lefutnk mielőtt én hozzáférek a zendpointban a kéréshez
app.use(function(request, response, next) {
  console.log('I am a middleware'); // lehet bele hibakezeléseket rakni pl: nem jsont küldött ne is csináljon semmit
  next(); // serving static files in express elolvasni! bárhány lehet felülről lefelé halad
});

// uarra a pontra lehet post és get is  nem fog összeakadni, 
app.get('/', function(request, response) {//mi legyen a root? redditben /post, rövidíthető req/res
  response.send('Hello World!'); //megjelenik a windowban, a böngészőben megjelenik, html nélkül
  // response.writeHead //header beállítása, de ez nekünk sosem kell majd :D
  response.json('Hello World'); //már idézőjelek közé téve kirendereli, ez a bodyban van a kérésből
}); 

app.post('/', (request, response)  => {
  if (request.body.number % 2 === 0) {
    response.send('paros');
  } else {
    response.send('paratlan');
  }  
})

app.listen(3000, function(){
  console.log('the app is running');
})

