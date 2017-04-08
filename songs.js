//DOM OBJECT FROM REQUESTS - built by data files and referenced for DOM printing
var songs = [];

//********************************
//AJAX REQUEST FUNCTION - works because the data structures are the same
//********************************
function myAjaxRequest (urlData) {
	$.ajax({
		url: urlData
	}).done(function(data){
		for (let y = 0; y < data.songs.length; y++) {
			songs.push(data.songs[y]);
		}
		songsToDOM(songs);
	}).fail(function(error){
		console.log(error);
	});
}

//********************************
//INITIAL PRINT TO DOM FUNCTION
//********************************

function songsToDOM(array) {
	for (let x = 0; x < array.length; x++) {
		//SPECIAL ID - reference for "delete" function
		var arrayLength = x + array.length; 
		array[x].id = arrayLength;

		//FUNCTION TO BUILD TO DOM
		$("#songList").append(`<section id="${arrayLength}"><h1 class="title" id="title">${array[x].song}</h1><span class="artist-name" id="artist-name">${array[x].artist}</span> |<span class="album-name" id="album-name">${array[x].album}<button id="deleteBtn" class="deleteBtn">DELETE</button></span></section>`);
	}
	//EVENT LISTENERS ON DYNAMIC BUTTONS
	$("#moreBtn").click(moreClick);
	$(".deleteBtn").click(deleteDiv);
};


//CLICKING "MORE" BUTTON
function moreClick () {
	$("#songList").text(''); //RESETS DIV - fixes logical issue of double adding the array when deleting
	myAjaxRequest("songList2.json");
	$("#moreBtn").prop("disabled", true);
};

//DELETING SONGS FROM LIST BUTTON
function deleteDiv (e) {
	var targetDiv = e.target;
	var test = $(targetDiv).parentsUntil("#songList", "section")[0].id;
	for (let x = 0; x < songs.length; x++) {
		if (parseInt(test) === songs[x].id) {
			songs.splice(x, 1);
		}
	}
	$(targetDiv).parentsUntil("#songList", "section").remove();
}

//INITIAL AJAX REQUEST
myAjaxRequest("songList.json");






