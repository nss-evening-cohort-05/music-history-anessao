//VARIABLES
var songs = [];
var artist = "";
var album = "";
var songName = "";
var songDiv = document.getElementById("songList")

/********************************
INITIAL PRINT TO DOM
********************************/

function songsToDOM(array) {
	var songListString = "";
	for (let x = 0; x < array.length; x++) {
		songListString += `<section><h1 class="title" id="title">${array[x].song}</h1>`;
		songListString += `<span class="artist-name" id="artist-name">${array[x].artist}</span> |`
		songListString += `<span class="album-name" id="album-name">${array[x].album}<button class="btn">DELETE</button></span></section>`
	}
	songDiv.innerHTML = songListString;
};

function buildSongData(data){
  	for (let y = 0; y < data.songs.length; y++) {
  		songs.push(data.songs[y]);
  	}
}


/********************************
XHR PRODUCTS FUNCTION EXECUTIONS
********************************/

function songsLoad(){
	var data = JSON.parse(this.responseText);
	buildSongData(data);
	songsToDOM(songs);
};

function loadFail(){
	songDiv.innerHTML = "Oops... Song information isn't loading!"
};

/********************************
XMLH REQUEST FOR SONG LIST
********************************/

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", songsLoad);
myRequest.addEventListener("error", loadFail);
myRequest.open("GET", "songList.json");
myRequest.send();












