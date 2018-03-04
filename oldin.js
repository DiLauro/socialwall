
var accessToken = '198905827.8b282c8.a011bc770e3d4db4831ae4a88c25e42a';
var InstagramAPI = require('instagram-api');
var instagramAPI = new InstagramAPI(accessToken);

instagramAPI.getMediasByTag('doob').then(function(result) {
    console.log(result); // user info 
    console.log(result.limit); // api limit 
    console.log(result.remaining) // api request remaining 
}, function(err){
    console.log(err); // error info 	
});

var ig = require('instagram-node').instagram();
 
// Every call to `ig.use()` overrides the `client_id/client_secret` 
// or `access_token` previously entered if they exist. 
ig.use({ access_token: '198905827.8b282c8.a011bc770e3d4db4831ae4a88c25e42a' });

/*
ig.use({ client_id: '8b282c88ddc04418ae9d37d545944634',
         client_secret: '0c2566e6b7234d2080c4b61eb4a2b5f9' });
*/

ig.tag_media_recent('trump', [0,0], function(err, medias, pagination, remaining, limit) {


    console.log(err); // user info 
    console.log(medias); // api limit 
    console.log(pagination); 
    console.log(remaining) // api request remaining 
});
/*
ig.tag_search('query', function(err, result, remaining, limit) {


    console.log(err); // user info 
    console.log(result); // api limit 
    console.log(remaining) // api request remaining 

});*/