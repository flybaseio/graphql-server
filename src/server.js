import {
  GraphQLEnumType,
  GraphQLInterfaceType,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString,
}  from 'graphql';

import { graphql } from 'graphql';
import { Flybase } from 'flybase';

var flybase = require('flybase').init('YOUR-APP-NAME', "YOUR-COLLECTION-NAME", 'YOUR-API-KEY' );

var pets = [];
flybase.on("value", function(snapshot) {
	if( snapshot.count() ){
		snapshot.forEach( function( pet ){
			pets[pet.value()._id] = pet.value();
		});
		processPets(pets);
	}
});

function processPets( pets ){
	var petType = new GraphQLObjectType({
		name: 'Pet',
		description: 'A pet, a companion, sometimes an annoyance',
		fields: function fields() {
			return {
				_id: {
					type: new GraphQLNonNull(GraphQLString),
					description: 'The id of the pet.'
				},
				title: {
					type: GraphQLString,
					description: 'The name of the pet.'
				},
				description: {
					type: GraphQLString,
					description: 'Other info about the pet'
				}
			};
		}
	});

	var schema = new GraphQLSchema({
		query: new GraphQLObjectType({
			name: 'Query',
			fields: {
				pet:{
					type: petType,
					args: { _id: { name: '_id', type: new GraphQLNonNull(GraphQLString) } },
					resolve: function resolve(root, _ref) {
						var _id = _ref._id;
						return pets[_id];
					}
				}
			}
		})
	});

	var query = 'query FetchMaiaQuery { maia: pet(_id: "5594187187aa2doc2000595859") {_id,title,description}}';
	graphql(schema, query).then(result => {
		console.log(result);
	});
}