var socket = io.connect('http://localhost:1337');
var user_id = location.search.slice(1) || '123';
socket.on('connect',function(){
  socket.get('/notice',{user_id:user_id},function(users){
    console.log(users);
  });
  socket.on('notice',function(e){
  	console.log('Message:',e)
  });
});

socket.on('disconnect', function(e){
	console.log('disconnect');
});