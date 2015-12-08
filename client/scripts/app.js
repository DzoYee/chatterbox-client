// YOUR CODE HERE:
var messages = []
var app = {

}
app.server = "https://api.parse.com/1/classes/chatterbox";
app.init = function(){
  $('.username').on('click',app.addFriend);
  $('.submit').on('click',app.handleSubmit());
  $('#select').on('change',app.roomToggle("here"));
  /*$('#main').append('<div class="username" onclick="app.addFriend()">placeholder</div>');
  $('#main').append('<form id="send"><input type="text"></input></form>');
  $('#send').append('<button class="submit"></button>');*/
};
app.clearMessages = function(){
  $('#chats').children().remove();
};

app.sanitizeData = function(data) {
  // input: array of objects

  //return clean data
};

app.addMessage = function(messages){

  var hashRooms = {}

  $('#chats').children().remove();
  _.each(messages, function(message){
    $('#chats').append('<div class="username" room="'+ message.roomname +'">' + message.objectId + ' : ' + message.username + ' : ' + message.text + '</div>');
    hashRooms[message.roomname] = message.roomname;
  })

  $('roomSelection').children().remove();
  _.each(hashRooms, function(room) {
    $('select').append('<option value="'+room+'"">'+room+'</option>');
  })
};
app.addRoom = function(lobName){
  $('#roomSelect').append('<div>' + lobName + '</div>');
};
app.addFriend = function(){
  
};
app.handleSubmit = function(){
  var username = window.location.search.slice(10);
  //pull roomname

  //pull message
  //('#message').val()

};
app.handleRoom = function(){
  var message = new MakeMessage($('#newroom').val());
  app.send(message);
};

app.handleMessage = function(){
  var username = window.location.search.slice(10);
  var roomname = $('#newroom').val();
  var message = $('#message').val();
  var message = new MakeMessage(roomname, username, message);
  app.send(message);
};



var MakeMessage = function(room, username, message){
  this.roomname = room;
  this.username = username;
  this.text = message;
};



app.roomToggle = function() {
  var room = $( "#roomSelection" ).val();
  $('.username').toggle();
  $('div[room="'+room+'"]').toggle();
  $('#newroom').val(room);
};

app.fetch = function(){
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'https://api.parse.com/1/classes/chatterbox', //+ messages[0].objectId,
    type: 'GET',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function (data) {
      // console.log('get data: ', data);
      console.log('chatterbox: Message sent');

      var messageList = data.results
      console.log('messageList: ', messageList);
      app.addMessage(messageList);

    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to receive message');
    }
  });  
};
app.send = function(message){
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'https://api.parse.com/1/classes/chatterbox',
    type: 'POST',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function (data) {
      messages.push(data);
      console.log('chatterbox: Message sent ', message);
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message');
    }
  });  
};



 var message = {
           username: 'Mel Brooks',
           text: 'It\'s good to be the king',
           roomname: 'lobby'
 };

app.init()
 app.fetch()


// setTimeout(function(){app.fetch()},10000);


/*
var a = $.ajax({
  // This is the url you should use to communicate with the parse API server.
  url: 'https://api.parse.com/1/classes/chatterbox/',
  type: 'POST',
  dataType: 'JSON',
  contentType: 'application/json',
  success: function (data) {
    console.log('chatterbox: Message receieved');
  },
  error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    console.error('chatterbox: Failed to receive message');
  }
});
*/