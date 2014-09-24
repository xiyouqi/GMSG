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
	},
	invalid:function(req, res){
		if(!req.param('object_id')){
			return res.badRequest(err);
		}
		var query = {
			object_id:req.param('object_id'), 
			status:{'!':['read','invalid']}
		};
		Message.update(query, {status:'invalid'}).exec(function(err, messages){
			if(err){
				return res.badRequest(err);
			}
			res.json(messages);
		});
	},
	read:function(req, res){
		var query = req.param('user_id') 
			? {user_id:req.param('user_id')}
				: {id:req.param('id')};
		query.status = {'!':['read','invalid']};
		Message.update(query, {status:'read'}).exec(function(err, messages){
			if(err){
				return res.badRequest(err);
			}
			res.jsonp(messages);
		});
	}
};

