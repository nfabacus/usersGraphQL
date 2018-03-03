const axios = require('axios')
const graphql = require('graphql')
const { 
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema
} = graphql


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
        return axios.get(`http://localhost:3000/users/${args.id}`)
          .then(resp=> resp.data)
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
