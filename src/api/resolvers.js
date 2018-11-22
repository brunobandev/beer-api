const db = require('../config/database')

module.exports = {
    Query: {
        async getCategories() {
            return await db('categories')
        },
        async getCategory(_, { id }) {
            return await db('categories').where({ id }).first()
        },
        async getStyles() {
            return await db('styles')
        },
        async getStyle(_, { id }) {
            return await db('styles').where({ id }).first()
        },
        async getBeer(_, { id }) {
            return await db('beers').where({ id }).first()
        },
        async getBeers() {
            return await db('beers')
        }
    },
    Mutation: {
        async createCategory (_, { input }) {
            console.log(input)
            const result = await db('categories').insert({
                name: input.name
            })
            
            const id = result[0]
            return await db('categories').where({ id }).first()
        },
        async createStyle (_, { input }) {
            const result = await db('styles').insert({
                name: input.name,
                categoryId: input.categoryId
            })

            const id = result[0]
            return await db('styles').where({ id }).first()
        },
        async createBeer (_, { input }) {
            const result = await db('beers').insert({
                name: input.name,
                styleId: input.styleId
            })

            const id = result[0]
            return await db('beers').where({ id }).first()
        }
    }
}