var playlist = new Object({Beyonce: 'Halo'});

function updatePlaylist(playlist, artistName, songTitle) {
  playlist.singer = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}
