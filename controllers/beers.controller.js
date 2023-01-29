const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const punkAPI = new PunkAPIWrapper();


module.exports.list = (req, res) => {
  punkAPI
  .getBeers()
  .then(beersFromApi => {
    res.render('beers/list', { beers: beersFromApi });
  })
  .catch(error => console.log(error));
};

module.exports.random = (req, res) => {
  punkAPI
  .getRandom()
  .then(responseFromAPI => {
    res.render('beers/random', { beer: responseFromAPI[0] });
  })
  .catch(error => console.log(error));
}
