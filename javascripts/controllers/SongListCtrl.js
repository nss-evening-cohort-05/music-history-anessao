app.controller("SongListCtrl", function($scope, SongFactory) {
	
	$scope.songs = [];

	let getSongs = () => {
	  SongFactory.getSongList().then((itemz) => {
	    $scope.songs = itemz;
	  }).catch((error) => {
	    console.log("get error", error);
	  });
	};

	getSongs();
  console.log($scope.songs);
});