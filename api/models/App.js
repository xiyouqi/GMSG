/**
* App.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	connection:'someMysqlServer',
  attributes: {
  	app_id:{
  		type: 'alphanumericdashed',
  		unique: true,
  		required: true
  	},
  	app_name: {
	    type: 'string',
  		unique: true,
  		required: true
	  },
	  email:{
	  	type: 'email'
	  },
	  homepage:{
	  	type: 'url'
	  }
  }
};

