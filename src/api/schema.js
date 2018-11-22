const resolvers = require('./resolvers')
const { makeExecutableSchema } = require('graphql-tools')

const typeDefs = `
    type Category {
        id: ID
        name: String
    }

    type Style {
        id: ID
        categoryId: ID
        name: String
    }

    type Beer {
        id: ID
        styleId: ID
        name: String
    }

    type Query {
        getCategory(id: ID!): Category
        getCategories: [Category]
        getStyle(id: ID!): Style
        getStyles: [Style]
        getBeer(id: ID!): Beer
        getBeers: [Beer]
    }

    input CategoryInput {
        id: ID
        name: String!
    }

    input StyleInput {
        id: ID
        categoryId: ID!
        name: String!
    }

    input BeerInput {
        id: ID
        styleId: ID!
        name: String!
    }

    type Mutation {
        createCategory(input: CategoryInput): Category
        createStyle(input: StyleInput): Style
        createBeer(input: BeerInput): Beer
    }
`

module.exports = makeExecutableSchema({
    typeDefs,
    resolvers
})

