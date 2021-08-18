const {
    GraphQLInputObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt
} = require('graphql');

inputMovieType = new GraphQLInputObjectType({
    name: 'MovieInput',
    fields: {
        name: { type: GraphQLString },

    }
});

exports.inputMovieType = inputMovieType;