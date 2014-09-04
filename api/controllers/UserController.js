/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	testSocket: function(req,res){

        var nameSent = req.param('name');;

        if (nameSent){

          User.create({name:nameSent}).exec(function created(err,newGuy){
            User.publishCreate({id:newGuy.id,name:newGuy.name});
            User.message({id:newGuy.id,name:newGuy.name});
            console.log('A new user called '+newGuy.name+' has been created');
            res.json(newGuy);
          });

        } else if (req.isSocket){

          //User.watch(req);
          User.find({name:'admin'}).exec(function(e,listOfUsers){
              User.subscribe(req.socket,listOfUsers,['create','destroy','update']);
          });
          console.log('User with socket id '+sails.sockets.id(req)+' is now subscribed to the model class \'users\'.');

        } else {
          //User.find().exec(function(err, users){
          //  User.subscribe(req,users,['create','destroy','update']);
          //  res.json(users);
          //});
          res.view();
        }
    }
};

