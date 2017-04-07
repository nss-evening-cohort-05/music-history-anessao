//VARIABLES
var songs = [];
// var songDiv = document.getElementById("songList")

//********************************
//INITIAL PRINT TO DOM
//********************************

function songsToDOM(array) {
	for (let x = 0; x < array.length; x++) {
		var arrayLength = x + array.length;
		array[x].id = arrayLength;

		$("#songList").append(`<section id="${arrayLength}"><h1 class="title" id="title">${array[x].song}</h1><span class="artist-name" id="artist-name">${array[x].artist}</span> |<span class="album-name" id="album-name">${array[x].album}<button id="deleteBtn" class="deleteBtn">DELETE</button></span></section>`);
	}
	$("#moreBtn").click(moreClick);
	$(".deleteBtn").click(deleteDiv);
};

function buildSongData(data){
  	for (let y = 0; y < data.songs.length; y++) {
  		songs.push(data.songs[y]);
  	}
}

//********************************
//XHR PRODUCTS FUNCTION EXECUTIONS
//********************************

function songsLoad(){
	var data = JSON.parse(this.responseText);
	buildSongData(data);
	songsToDOM(songs);
};

function loadFail(){
	$("#songList").html("Oops... Song information isn't loading!");
};

//********************************
//XMLH REQUEST FOR SONG LIST
//********************************

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", songsLoad);
myRequest.addEventListener("error", loadFail);
myRequest.open("GET", "songList.json");
myRequest.send();



function moreClick () {
	var myRequest2 = new XMLHttpRequest();
	myRequest2.addEventListener("load", songsLoad);
	myRequest2.addEventListener("error", loadFail);
	myRequest2.open("GET", "songList2.json");
	myRequest2.send();

	$("#moreBtn").prop("disabled", true);
};

function deleteDiv (e) {
	var deleting = e.target;
	var test = $(deleting).parentsUntil("#songList", "section")[0].id;
	for (let x = 0; x < songs.length; x++) {
		if (parseInt(test) === songs[x].id) {
			console.log("if passing?")
			songs.splice(x, 1);
		}
	}
	$(deleting).parentsUntil("#songList", "section").remove();
}

// function deleteDiv (e) {
// 	var arrayId = e.target.parentNode.parentNode.id;
// 	for (let x = 0; x < songs.length; x++) {
// 		if (parseInt(arrayId) === songs[x].id) {
// 			songs.splice(x, 1);
// 		}
// 	}
// 	songsToDOM(songs);
// }







