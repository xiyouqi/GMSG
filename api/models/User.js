/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  connection:'someMysqlServer',
  migrate: 'safe',
  schema:true,
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes:{
  	user_id:{
      type:'string',
  		required:true,
      primaryKey: true,
      columnName:'user_key'
  	},
  	user_account:{
  		type:'alphanumericdashed'
  	},
  	user_name:'string',
  	email:'email',
  	mobile:{
      type:'string',
      columnName:'phone'
    }
  }
};

