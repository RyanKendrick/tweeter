/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



 const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

// Fake data taken from tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

 let createTweetElement = function(data) {
  let flagIconPath = "/images/flag.png";
  let heartIconPath = "/images/heart.png";
  let shareIconPath = "/images/share.png";
  let tweet = $("<article>").addClass("tweet");
  let header = $("<header>");
  let tweetName = $("<div>").addClass("tweet-name");
  tweetName.text(data.user.name);
  let tweetHandle = $("<div>").addClass("tweet-handle");
  let tweetAvatar = $("<img>").addClass("avatar");
  tweetAvatar.attr("src", data.user.avatars.regular);
  let content = $("<div>").addClass("tweet-content");
  let flagIcon = $("<img>").addClass("flag").attr("src", flagIconPath);
  let heartIcon = $("<img>").addClass("heart").attr("src", heartIconPath);
  let shareIcon = $("<img>").addClass("share").attr("src", shareIconPath);
  let footer = $("<footer>").addClass("tweet-footer");
  let icons = $("<div>").addClass("icons");
  let tweetDate = $("<div>").addClass("days-ago");
  tweetDate.text(data.created_at);
  content.text(data.content.text);
  tweetHandle.text(data.user.handle);
  header.append(tweetAvatar);
  header.append(tweetName);
  header.append(tweetHandle);
  icons.append(flagIcon);
  icons.append(heartIcon);
  icons.append(shareIcon);
  footer.append(icons);
  footer.append(tweetDate);
  tweet.append(header);
  tweet.append(content);
  tweet.append(footer);

  return tweet;

};

let rendertweets = function(tweets) {
  for (let tweet of tweets) {

    let newTweet = createTweetElement(tweet);
    console.log(newTweet);
    $('.tweet-container').append(newTweet);
  }
};

// var $tweet = createTweetElement(tweetData);

// // Test / driver code (temporary)
// console.log($tweet); // to see what it looks like
// $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
// createTweetElement(tweetData);
$( document ).ready(function() {
    rendertweets(data);
});
