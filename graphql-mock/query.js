const { GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt
} = require('graphql');
const _ = require('lodash');

const {movieType} = require('./types.js');
let {movies} = require('./data.js');


//Define the Query
const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {

        movie: {
            type: GraphQLList(movieType),
            resolve: function (source, args) {
                return movies;
            }
        }
        
    }
});

exports.queryType = queryType;