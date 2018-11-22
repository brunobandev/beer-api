const db = require('../config/database')

module.exports = {
    Query: {
        async getBeer(_, { id }) {
            return await db('beers').where({ id }).first()
        },
        async getBeers() {
            return await db('beers')
        }
    },
    Mutation: {
        async createBeer (_, { input }) {
            const result = await db('beers').insert({
                name: input.name
            })

            const id = result[0]
            return await db('beers').where({ id }).first()
        }
    }
}