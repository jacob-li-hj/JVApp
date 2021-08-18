const { GraphQLObjectType
} = require('graphql');
const _ = require('lodash');

const {movieType} = require('./types.js');
const {inputMovieType} = require('./inputtypes.js');
let {movies} = require('./data.js');

const mutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addMovie: {
            type: movieType,
            args: {
                input: { type: inputMovieType }
            },
            resolve: function (source, args) {

                let movie = {name: args.input.name}

                movies.push(movie);

                return movie;
            }
        }
    }
});

exports.mutationType = mutationType;