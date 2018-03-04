
var FB = require('fb');

FB.setAccessToken('EAAZA0SWFabd8BADMlSZCZAqZAljKBDZAOSgNpNPcmizle9QBwCyQ4rceZAakggGUM9DZAGnN5LQpf0vpIXqMFFbKJoDlZB8Qkomykv0Paz7yatwcrEQ86FDMA9ZCwRfAltm4bUSxi3KQt6PhxYNimK1g0iUzjdDxBJ6YBDR4pNqZATDCtDjVcn38i3jpeV0uxN1bAZD');

 FB.api('#trump', function (res) {
  if(!res || res.error) {
   console.log(!res ? 'error occurred' : res.error);
   return;
  }
  console.log(res.id);
  console.log(res.name);
});