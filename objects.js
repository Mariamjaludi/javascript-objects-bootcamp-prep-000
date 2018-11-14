var playlist = new Object({Beyonce: 'Halo'});

function updatePlaylist(playlist, artistName, songTitle) {
  playlist.singer = 'songtitle';
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}