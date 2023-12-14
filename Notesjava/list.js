function loadPlaylist() {
  alert("playlist_store loadPlaylist function called.");
  var playlistArray = getSavedSongs();
  var ul = document.getElementById("playlist");
  if (playlistArray != null) {
    for (var i = 0; i < playlistArray.length; i++) {
      var li = document.createElement("li");
      li.innerHTML = playlistArray[i];
      ul.appendChild(li);
    }
  }
}