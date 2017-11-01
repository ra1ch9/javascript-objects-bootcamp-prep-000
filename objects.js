var playlist = {artistName: "songTitle"};

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, {[artistName]: songTitle});
  updatePlaylist(playlist, 'Phil Ochs', 'Heres to the state of Mississippi');


}
