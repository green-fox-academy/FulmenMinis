'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!


// // Solution 1
var url = "https//www.reddit.com/r/nevertellmethebots";
url = url.replace ('https', 'https:')
url = url.replace ('bots', 'odds')
console.log(url);

// Solution 2
var url = "https//www.reddit.com/r/nevertellmethebots";
url = url.substr(0, 5) + ':' + url.substr(5, 37);
url = url.substr(0, 39) + 'odds';
console.log(url);
