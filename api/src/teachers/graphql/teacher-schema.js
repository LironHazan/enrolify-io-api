const graphql = require('graphql');
const TeacherType = require('./teacher-type');
const Teacher = require('./../teacher.model');

const {
		GraphQLObjectType,
		GraphQLString,
		GraphQLSchema
} = graphql;

const RootQuery = new GraphQLObjectType({
		name: 'RootQueryType',
		fields: {
				teacher: {
						type: TeacherType,
						args: { id: { type: GraphQLString } },
						resolve(parent, args){
								return Teacher.findById(args.id)
						}
				},
				add: {
						type: TeacherType,
						args: { fname: { type: GraphQLString }, lname: { type: GraphQLString },
								email: {type: GraphQLString}, title: {type: GraphQLString},
								companyName: {type: GraphQLString} },
						resolve(args){
								return Teacher.create(args)
						}
				}
		}
});

module.exports = new GraphQLSchema({
		query: RootQuery
});