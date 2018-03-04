var ig = require('instagram-scraping');
 
ig.scrapeTag('huette').then(function(result){
    console.dir(result);
})