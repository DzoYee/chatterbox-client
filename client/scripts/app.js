// YOUR CODE HERE:
var messages = []
var app = {

}
app.server = "https://api.parse.com/1/classes/chatterbox";
app.init = function(){

};
app.clearMessages = function(){
  $('#chats').children().remove();
};
app.addMessage = function(message){
  $('#chats').append('<span>' + message.text + '</span>');
};
app.addRoom = function(lobName){
  $('#roomSelect').append('<div>' + lobName + '</div>');
};
app.addFriend = function(){
  alert('dude');
};
app.fetch = function(){
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'https://api.parse.com/1/classes/chatterbox', //+ messages[0].objectId,
    type: 'GET',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function (data) {
      console.log(data)
      // console.log('get data: ', data);
      console.log('chatterbox: Message sent');
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message');
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

// app.send()
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