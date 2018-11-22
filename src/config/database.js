const knexfile = require('../knexfile')
const knex = require('knex')(knexfile)
module.exports = knex

// knex('beers').insert({
//     name: 'Xulapa'
// }).then(data => console.log(data))

// knex('beers').then(result => console.log(result))