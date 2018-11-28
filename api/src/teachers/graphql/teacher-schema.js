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
				}
		}
});

module.exports = new GraphQLSchema({
		query: RootQuery
});