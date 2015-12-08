// YOUR CODE HERE:
var messages = []
var app = {

}
app.server = "https://api.parse.com/1/classes/chatterbox";
app.init = function(){
  $('.username').on('click',app.addFriend);
  $('.submit').on('submit',app.handleSubmit);
  $('#select').on('change',app.roomToggle("here"));
  /*$('#main').append('<div class="username" onclick="app.addFriend()">placeholder</div>');
  $('#main').append('<form id="send"><input type="text"></input></form>');
  $('#send').append('<button class="submit"></button>');*/
};
app.clearMessages = function(){
  $('#chats').children().remove();
};
app.addMessage = function(messages){
  //iterate through first 20 of array
  var hashRooms = {}

  _.each(messages, function(message){
    $('#chats').append('<div class="username" room="'+ message.roomname +'">' + message.objectId + ' : ' + message.username + ' : ' + message.text + '</div>');
    hashRooms[message.roomname] = message.roomname;
  })

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

};
app.roomToggle = function(room) {
  console.log('room: ', room);
  $('.username').toggle();
  $('div[room='+room+']').toggle();
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
        // console.log('message: ', message);
      app.addMessage(messageList);

    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to receive message');
    }
  });  
};
app.send = function(){
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'https://api.parse.com/1/classes/chatterbox',
    type: 'POST',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function (data) {
      messages.push(data);
      console.log('chatterbox: Message sent');
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

// app.init()
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