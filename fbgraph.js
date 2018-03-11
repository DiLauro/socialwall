var graph = require('fbgraph');

graph.setAccessToken('');


graph.setVersion("2.8");
var searchOptions = {
    q:     "#trump"
  , type:  "post"
};

graph.get("zuck", function(err, res) {
  console.log(res); // { id: '4', name: 'Mark Zuckerberg'... }
});
