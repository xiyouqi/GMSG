/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes:{
  	user_id:{
  		required:true
  	},
  	session_id:{
  		required:true
  	},
  	user_account:{
  		type:'alphanumericdashed'
  	},
  	user_name:'string',
  	email:'email',
  	mobile:'string',
  	expired:''
  }
};

