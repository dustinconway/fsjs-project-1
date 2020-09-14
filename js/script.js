/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
var quotes = [
  {
     text: '“Thousands of tired, nerve-shaken, over-civilized people are beginning to find out that going to the mountains is going home; that wildness is a necessity” ',
     source: 'John Muir'
  },
  {
    text: '“We need the tonic of wildness...At the same time that we are earnest to explore and learn all things, we require that all things be mysterious and unexplorable, that land and sea be indefinitely wild, unsurveyed and unfathomed by us because unfathomable. We can never have enough of nature.” ',
    source: 'Henry David thoreau'
  },  {
    text: '“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”',
    source: 'Ralph Waldo Emerson'
  },  {
    text: '“The proper function of man is to live, not to exist. I shall not waste my days in trying to prolong them. I shall use my time.” ',
    source: 'Jack London'
  },  {
    text: '“The proper function of man is to live, not to exist. I shall not waste my days in trying to prolong them. I shall use my time."',
    source: 'Robert Louis Stevenson'
  },
];

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  let randomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuote];
}


/***
 * `printQuote` function
***/
function printQuote() {

}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);