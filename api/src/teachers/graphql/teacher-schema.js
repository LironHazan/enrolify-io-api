const graphql = require('graphql');
const TeacherType = require('./teacher-type');
const Teacher = require('./../teacher.model');

const {
		GraphQLObjectType,
		GraphQLString,
		GraphQLSchema
} = graphql;

const RootTeachersQuery = new GraphQLObjectType({
		name: 'RootTeachersQueryType',
		fields: {
				teacher: {
						type: TeacherType,
						args: { id: { type: GraphQLString } },
						resolve(parent, args){
								return Teacher.findById(args.id)
						}
				},
				all: {
						type: TeacherType,
						args: {},
						resolve() {
							console.log('all');
							return Teacher.find({})
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
		query: RootTeachersQuery
});