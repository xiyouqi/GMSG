/**
* Notice.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	connection : 'someMysqlServer',
	schema : true,
  attributes: {
  	session_id : {
  		type : 'string',
  		required : true,
  		unique : true
  	},
  	user_id : {
  		type : 'string',
  		required : true,
  		defaultsTo : '1'
  	},
  	client_id : {
  		type : 'string',
  		required : true,
  		unique : true
  	},
  	count : {
  		type : 'int',
  		defaultsTo : 0
  	},
  	content : {
  		type : 'string'
  	},
  	timestamp : function(){
  		return new Date().getTime();
  	}
  }
};

