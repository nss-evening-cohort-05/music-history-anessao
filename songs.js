//VARIABLES
var songs = [];
// var songDiv = document.getElementById("songList")

// //********************************
// //INITIAL PRINT TO DOM
// //********************************

// function songsToDOM(array) {
// 	var songListString = "";
// 	for (let x = 0; x < array.length; x++) {
// 		var arrayLength = x + array.length;
// 		array[x].id = arrayLength;


// 		songListString += `<section id="${arrayLength}"><h1 class="title" id="title">${array[x].song}</h1>`;
// 		songListString += `<span class="artist-name" id="artist-name">${array[x].artist}</span> |`
// 		songListString += `<span class="album-name" id="album-name">${array[x].album}<button id="deleteBtn" class="deleteBtn">DELETE</button></span></section>`
// 	}
// 	songDiv.innerHTML = songListString;
	
// 	var moreBtn = document.getElementById("moreBtn");
// 	var deleteBtn = document.getElementsByClassName("deleteBtn");
// 	moreBtn.addEventListener("click", moreClick)
// 	for (let i = 0; i < deleteBtn.length; i++){
// 		deleteBtn[i].addEventListener("click", deleteDiv);
// 	}

// };

// function buildSongData(data){
//   	for (let y = 0; y < data.songs.length; y++) {
//   		songs.push(data.songs[y]);
//   	}
// }

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

// 	var clickedBtn = document.getElementById("moreBtn");
// 	clickedBtn.disabled = true;
// };

// function deleteDiv (e) {
// 	var arrayId = e.target.parentNode.parentNode.id;
// 	for (let x = 0; x < songs.length; x++) {
// 		if (parseInt(arrayId) === songs[x].id) {
// 			songs.splice(x, 1);
// 		}
// 	}
// 	songsToDOM(songs);
// }







