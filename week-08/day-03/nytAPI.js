function getUrl() {
  const urlParameters = {
    'url': 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=moon+landing+apollo+11&fq=apollo&page=37&sort=oldest&api-key=8b4c94cbe93d4cfab8e984c3ed6d18e9',
    'api_key': "8ea4de81b37142a5aa3107b26bc31261",
    'begin_date': "19690716",
    'end_date': "19690721"
  }
  return urlParameters.url + '?' + 'api-key=' + urlParameters.api_key
         + '&begin_date=' + urlParameters.begin_date + '&end_date='
         + urlParameters.end_date;
}

function ajax (method, url, data, callback) {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      var responseData = JSON.parse(xhr.response);
      callback(responseData);
    }
  });
  xhr.open(method, url, true);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(data);
}

function filterMoonLanding(result) {
  let articles = result.response.docs.filter(item =>
    item.snippet.toLowerCase().includes('moon') ||
    item.snippet.toLowerCase().includes('lunar') ||
    item.snippet.toLowerCase().includes('apollo') ||
    item.snippet.toLowerCase().includes('apollo'));
  console.log(articles);
  
  let divContainer = document.querySelector('div.container');
  articles.forEach(function(element, index) {
    const markup = `<h1>Article ${index + 1}</h1>
                    <ul>
                      <li>Headline: ${element.headline.main}</li>
                      <li>Snippet: ${element.snippet}</li>
                      <li>Publication date: ${element.pub_date}</li>
                      <li><a href='${element.web_url}'>${element.web_url}</a></li>
                    </ul>`
    divContainer.innerHTML += markup;
  });
}

ajax('GET', getUrl(), null, filterMoonLanding);