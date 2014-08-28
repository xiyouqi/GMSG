var socket = io.connect('http://localhost:1337');
socket.on('connect',function(){
  socket.get('/user',{},function(users){
    console.log(users);
  });
  socket.on('user',function(e){
  	console.log('Message:',e.data)
  });
})