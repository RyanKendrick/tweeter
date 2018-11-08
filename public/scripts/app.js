/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


const createTweetElement = function (data) {
  const flagIconPath = '/images/flag.png';
  const heartIconPath = '/images/heart.png';
  const shareIconPath = '/images/share.png';
  const tweet = $('<article>').addClass('tweet');
  const header = $('<header>');
  const tweetName = $('<div>').addClass('tweet-name');

  tweetName.text(data.user.name);

  const tweetHandle = $('<div>').addClass('tweet-handle');
  const tweetAvatar = $('<img>').addClass('avatar');

  tweetAvatar.attr('src', data.user.avatars.regular);

  const content = $('<div>').addClass('tweet-content');
  const flagIcon = $('<img>').addClass('flag').attr('src', flagIconPath);
  const heartIcon = $('<img>').addClass('heart').attr('src', heartIconPath);
  const shareIcon = $('<img>').addClass('share').attr('src', shareIconPath);
  const footer = $('<footer>').addClass('tweet-footer');
  const icons = $('<div>').addClass('icons');
  const tweetDate = $('<div>').addClass('days-ago');

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

const rendertweets = function (tweets) {
  for (const tweet of tweets) {
    const newTweet = createTweetElement(tweet);
    console.log(newTweet);
    $('.tweet-container').prepend(newTweet);
  }
};


// var $tweet = createTweetElement(tweetData);

// // Test / driver code (temporary)
// console.log($tweet); // to see what it looks like
// $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
// createTweetElement(tweetData);
$(document).ready(() => {
  // JQuery/AJAX GET request to /tweets and recieve array of tweets as JSON
  const loadTweets = function () {
    $.ajax('/tweets', {
      method: 'GET',
      datatype: 'json',
    })

      .then((tweetArr) => {
        console.log('loadTweets success');
        rendertweets(tweetArr);
      });
  };


  // AJAX request makes the default POST request ine xpress server happen in the background
  // while the page remains visible to the user and there is no redirection
  const $formSubmit = $('.tweet-request');
  $formSubmit.on('submit', (event) => {
    console.log('Button clicked, performing ajax call...');
    event.preventDefault();

    const charCount = $('.tweet-form').val().length;
    // conditional statement sends alerts if there is no tweet
    // or if tweet is too long (> 140);
    if (charCount > 140) {
      // jquery function makes error message slide down
      // and appends text to the container
      $('.error-container')
        // .empty() empty's the error message container
        // so new one can appear without old one
        .empty()
        .slideDown('slow')
        .append('Tweet is too long!');
    } else if (charCount === 0) {
      // jquery function makes error message slide down
      // and appends text to the container
      $('.error-container')
        .empty()
        .slideDown('slow')
        .append('Enter a tweet!');

    } else {
      // if error container is visible upon new tweet submission
      // and the new tweet passes the valid conditions, hide the error container
      if (charCount > 0 && charCount < 140) {
        $('.error-container')
        .slideUp('slow');
      }
      // .serialize() turns the data (e.g. field1=value1&field2=value2&field3=value3...
      // into a string that can be utilized in the AJAX request
      const dataRequest = $('.tweet-request').serialize();
      $.ajax('/tweets', {
        method: 'POST',
        data: dataRequest,
      })

      .then(() => {
        console.log('Success');
        loadTweets();
      });
    }
  });

  loadTweets();
  // conditional closing bracket
});


// function that make new tweet container slide down
// when the compose button is clicked
// and selects the form field automatically
$(document).ready(function() {
  $( ".compose" ).click(function() {
    $( ".new-tweet" ).slideDown( "slow" );
    $(".new-tweet textarea").focus();
  });
});
