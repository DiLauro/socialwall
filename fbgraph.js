var graph = require('fbgraph');

graph.setAccessToken('EAAZA0SWFabd8BADMlSZCZAqZAljKBDZAOSgNpNPcmizle9QBwCyQ4rceZAakggGUM9DZAGnN5LQpf0vpIXqMFFbKJoDlZB8Qkomykv0Paz7yatwcrEQ86FDMA9ZCwRfAltm4bUSxi3KQt6PhxYNimK1g0iUzjdDxBJ6YBDR4pNqZATDCtDjVcn38i3jpeV0uxN1bAZD');


graph.setVersion("2.8");
var searchOptions = {
    q:     "#trump"
  , type:  "post"
};

graph.get("zuck", function(err, res) {
  console.log(res); // { id: '4', name: 'Mark Zuckerberg'... }
});