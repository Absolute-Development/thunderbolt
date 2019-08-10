/*globals io*/
window.loading_screen = window.pleaseWait({
  logo: "https://cdn.glitch.com/51712818-6710-425a-9b49-b4de4843344e%2Frs.gif?v=1563793847294",
  text: "Thunderbolt",
  backgroundColor: '#23272A',
  loadingHtml: "<p id='loading' class='loading-message'>Authenticating...</p>"
});

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}
