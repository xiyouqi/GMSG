var socket = io.connect('http://192.168.31.230:1337');
var user_id = location.search.slice(1) || '123';
socket.on('connect',function(){
  socket.get('/notice',{user_id:user_id},function(users){
    //console && console.log(users);
  });
  socket.on('notice',function(e){
  	//console && console.log('Message:',e)
  	alert(e.data.content);
  });
});

socket.on('disconnect', function(e){
	//console && console.log('disconnect');
});