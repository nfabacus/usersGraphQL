const express = require('express')
const expressGraphQL = require('express-graphql')
const schema = require('./schema/schema')

const app = express()

app.use('/graphql', expressGraphQL({
  schema: schema,
  graphiql: true  //graphiql is only used for development server
}))

const port = 4000
app.listen(port, ()=>{
  console.log("Listening to the port: ", port)
})