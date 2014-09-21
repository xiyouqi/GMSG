var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    host: 'mail.dqyt.petrochina',
    auth: {
        user: 'tqinj',
        pass: 'qinj123456'
    },
    maxConnections: 5,
    maxMessages: 10
});

module.exports = {
	sendNoticeEmail : function(options){
		options.from = '消息通知<tqinj@petrochina.com.cn>';
		transporter.sendMail(options, function(error, info){
	    if(error){
	        console.log(error);
	    }else{
	        console.log('Message sent: ' + info.response);
	    }
		});
	}
}