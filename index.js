var socket = io();
var bearer = getCookie("bearer");
if (!bearer) updateLoadingHTML('<a href="https://discordapp.com/api/oauth2/authorize?client_id=599106118106742785&redirect_uri=https%3A%2F%2Freverbots.glitch.me%2Fcallback&response_type=code&scope=identify"><button type="button" class="btn btn-dark">SIGN-IN</button></a>')
else socket.emit('getInfo', bearer);

function updateLoadingHTML(html) {
  $("#loading").fadeOut(function() {
    $(this).html(html).fadeIn();
  });  
}

socket.on('getNewInfo', function() {
  socket.emit('getInfo', bearer); 
})

socket.on('getInfo', function(info) {

  if (!info) updateLoadingHTML('<a href="https://discordapp.com/api/oauth2/authorize?client_id=599106118106742785&redirect_uri=https%3A%2F%2Freverbots.glitch.me%2Fcallback&response_type=code&scope=identify"><button type="button" class="btn btn-dark">SIGN-IN</button></a>')
  else if (info === 403) updateLoadingHTML('Sorry, you don\'t have access to this page...');
  else window.loading_screen.finish();
  });
