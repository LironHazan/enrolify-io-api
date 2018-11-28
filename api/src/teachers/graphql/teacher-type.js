const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString } = graphql;

const TeacherType = new GraphQLObjectType({
    name: 'Teacher',
    fields: () => ({
        id: { type: GraphQLString },
        fname: { type: GraphQLString },
        lname: { type: GraphQLString },
        title: { type: GraphQLString },
        companyName: { type: GraphQLString },
        email: { type: GraphQLString }
    })
});

module.exports = TeacherType;