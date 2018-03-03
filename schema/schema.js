const _ = require('lodash')
const graphql = require('graphql')
const { 
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema
} = graphql

const users = [
  { id: '23', firstName: 'Bill', age: 20 },
  { id: '47', firstName: 'Sam', age: 43 }
]

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age:{ type: GraphQLInt}
  }
})

// Tell GraphQL to give back a user with id argument
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString }},
      resolve(parentValue, args) {
        return _.find(users, {id: args.id })
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
