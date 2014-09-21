/**
 * MessageController
 *
 * @description :: Server-side logic for managing messages
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	jsonp:function(req, res){
		var query = {
			where:{
				status:{'!':['read','invalid']}
			},
			sort:'createdAt DESC'
		};

		if(req.query.user_id){
			query.where.user_id = req.query.user_id;
		}
		Message.find(query).exec(function(err, messages){
			res.jsonp(messages);
		});
	}
};

