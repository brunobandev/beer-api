const resolvers = require('./resolvers')
const { makeExecutableSchema } = require('graphql-tools')

const typeDefs = `
    type Beer {
        id: ID
        name: String
    }

    type Query {
        getBeer(id: ID!): Beer
        getBeers: [Beer]
    }

    input BeerInput {
        id: ID
        name: String!
    }

    type Mutation {
        createBeer(input: BeerInput): Beer
    }
`

module.exports = makeExecutableSchema({
    typeDefs,
    resolvers
})

