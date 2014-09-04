/**
 * NoticeController
 *
 * @description :: Server-side logic for managing notices
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	index:function(req, res){
		if(req.isSocket){
			var session_id = sails.sockets.id(req);
			var user_id = req.param('user_id');
			Notice.findOneBySession_id(session_id).exec(function(err, notice){
				var subscribe = function(notice){
					Notice.subscribe(req.socket,notice,['update']);
					console.log('User with socket id ' + session_id + ' is now subscribed to the model class \'notices\'.');
					res.json(notice);
				}
				if(notice){
					subscribe(notice);
				} else {
					Notice.create({session_id:session_id, user_id:user_id, client_id:session_id}).exec(function created(err,notice){
            subscribe(notice);
          });
				}
			});
		} else {
			Notice.find().exec(function(err, notices){
				res.json(notices);
			});
		}
	}
};

