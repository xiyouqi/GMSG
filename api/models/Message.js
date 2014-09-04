/**
* Message.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	connection : 'someMongodbServer',
	schema : true,
  attributes: {
  	app_id : {
  		type : 'alphanumericdashed',
  		required : true
  	},
  	user_id : {
  		type : 'string',
  		required : true
  	},
  	title : 'string',
  	image : 'string',
  	content : {
  		type : 'string',
  		required : true
  	},
  	content_format : {
  		type : 'string',
  		enum : ['text','html'],
  		defaultsTo : 'text'
  	},
  	content_type : {
  		type : 'string',
  		enum : ['text','image','video']
  	},
  	data : 'json',
  	action : 'jsaon',
  	expired : 'int',
  	priority : {
  		type : 'string',
  		enum : ['H','M','L'],
  		defaultsTo : 'M'
  	},
  	url : 'type'
  }
};

