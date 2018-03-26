'use strict'

function getGif (callback) {
  let httpRequest = new XMLHttpRequest()
  httpRequest.open('GET','https://api.giphy.com/v1/gifs/search?api_key=GEkqfxvIP2YtPHjmnto462zN0Kmd8eq7&q=south park&limit=16&offset=0&rating=R&lang=en');
  httpRequest.send(null)
  httpRequest.onreadystatechange = function() {
    if(httpRequest.readyState == 4) {
      let gifs = JSON.parse(httpRequest.responseText).data
      callback(gifs)
    }
  }
}

function displayData(data) {
  data.forEach(function(gif) {
    let img = document.createElement("img")
    let url = gif.images.downsized_still.url
    img.src = url
    small.appendChild(img)
    imageEventListener(img, gif)
  })
}

function imageEventListener(img, gif) {
  img.addEventListener('click', function() {
    img.src = gif.images.original.url        
  })
}

let small = document.querySelector(".small")
getGif(displayData)