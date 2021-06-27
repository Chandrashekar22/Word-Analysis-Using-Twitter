# Word-Analysis-Using-Twitter
This is a project where you type a word and you get analysis on that word in Twitter 
The Analysis contains 

+ Pie chart on the sentiments on tweets

+ Word Cloud on most used words in tweets

+ Top 3 frequently used #hashtags

+ Tweets with filter based on sentiments 

+ Pie chart on from which devices tweets was tweeted 

### Requirements

`Python >= 3.7.4` is required. May or may not work on older versions.

The following packages are needed:

+ flask
+ tweepy
+ numpy
+ pandas
+ stylecloud
+ textblob
+ unidecode

**Note**:
This app uses Google Charts API to create pie charts. If the pie charts are not displayed, try running the app in Incognito mode of your browser. The reason is some browsers may block the API since it uses cross-site cookies. Cookies created in Incognito mode are deleted upon closing the window, so it might work there.

### How-to-run

+ Clone this repo or download and extract the zip.
+ Run from main directory: `python -m flask run`
+ Open the link obtained in browser
+ Enjoy !!!
