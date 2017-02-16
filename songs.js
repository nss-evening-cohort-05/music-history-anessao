var songs = [];
var songDiv = document.getElementById("songList");

songs[songs.length] = "Legs > by Z*!ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

function addSongsEnd(firstSong) {
	songs.push(firstSong);
}
function addSongsBeggining(lastSong) {
	songs.unshift(lastSong);
}

addSongsEnd("The Remedy by Abandoned Pools on the album Humanistic");
addSongsBeggining("Pigs On The Wing by Pink Floyd on the album Animals");

var newList = [];
for (var i = 0; i < songs.length; i++){
	var fixedSongs = songs[i].toString();
	fixedSongs = fixedSongs.replace(/[.*+?!^${}()|@]/g, '').replace(/\s[>]/g, '');
	newList.push(fixedSongs + "<br>");
}
songDiv.innerHTML = "<div class='song-info'>" + newList.toString().replace(/,/g, '') + "</div>";