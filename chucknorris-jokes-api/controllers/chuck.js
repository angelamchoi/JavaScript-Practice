const request = require('request');
const jokeURL = 'https://api.chucknorris.io/jokes/random?category=';
const categoriesURL = 'https://api.chucknorris.io/jokes/categories';

module.exports = {
  index
};

function index(req, res) {
  // REQUEST
  request(categoriesURL, function(err, response, body) { //body = category
    const categories = JSON.parse(body); // converts JSON -> JS

    // don't even bother going to the API, unless category has been selected
    if (req.query.category) {
      // this is ?category=music

      // REQUEST
      request(jokeURL + req.query.category, function(err, response, body) {
        const joke = JSON.parse(body)

        // RESPONSE
        // this shows category and joke
        res.render('index', {categories, category: req.query.category, joke: joke.value});
      });
    } else {
      // RESPONSE
      // this is if they didn't select anything
      res.render('index', {categories, joke: null, category: null});
    }
  });
}

