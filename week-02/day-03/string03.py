# Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
# Also, the URL is missing a crutial component, find out what it is and insert it too!
#Solution 1
url = "https//www.reddit.com/r/nevertellmethebots"
url = url.replace ('https', 'https:')
url = url.replace ('bots', 'odds')
print(url)

#Solution 2
url = "https//www.reddit.com/r/nevertellmethebots"
url = url[:5] + ":" + url[5:38] + 'odds'
print(url)