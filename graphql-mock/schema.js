const {queryType} = require('./query.js');
const {mutationType} = require('./mutation')

const {
    GraphQLSchema,
  } = require('graphql');


module.exports = new GraphQLSchema({
  query: queryType,
  mutation: mutationType
});