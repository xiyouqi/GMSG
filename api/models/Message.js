/**
* Message.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	connection:'someMysqlServer',
	schema:true,
  attributes: {
  	app_id:{
  		type:'alphanumericdashed',
  		required:true
  	},
    type:{
      type:'string',
      enum:['notice','message'],
      defaultsTo:'notice'
    },
  	user_id:{
  		type:'string',
  		required:true
  	},
  	title:{
      type:'string',
      required:true
    },
  	image:'string',
    summary:{
      type:'string'
    },
  	content:{
  		type:'text',
  		required:true
  	},
  	content_format:{
  		type:'string',
  		enum:['text','html','markdown'],
  		defaultsTo:'text'
  	},
  	content_type:{
  		type:'string',
  		enum:['text','image','audio','video','card'],
      defaultsTo:'text'
  	},
  	data:'json',
  	action:'json',
  	expired:'int',
  	priority:{
  		type:'int',
  		enum:['0','1','2'],
      defaultsTo:0,
      protected:true
  	},
    status:{
      type:'string',
      enum:['draft','sent','served','unread','read','invalid'],
      defaultsTo:'draft'
    },
  	url:'string',
    object_id:'alphanumericdashed',
    message_id:{
      type:'uuid',
      unique:true
    },
    send_time:{
      type:'string',
      defaultsTo:function(){ return new Date().getTime();}
    }
  },
  afterCreate: function (message, cb) {

    //更新订阅通知模型
    Notice.update({user_id:message.user_id},{content:message.content,count:1}).exec(function(err, notices){
      for(var i = 0; i < notices.length; i++){
        Notice.publishUpdate(notices[i].id,notices[i]);
      }
      cb();
    });

    //根据消息级别获取用户信息（邮箱或手机号码）
    message.priority > 0 && User.findOne({user_id:message.user_id}).exec(function(err, user){
      if(err || !user){
        return;
      }
      //发送邮件通知
      user.email && EmailService.sendNoticeEmail({
        to:user.email,
        subject:message.title,
        html:message.content
      });
    });

  }
};

