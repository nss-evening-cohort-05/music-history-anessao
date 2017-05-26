app.controller("SongListCtrl", function($rootScope, $scope, SongFactory) {
	
	$scope.songs = [];

	let getSongs = () => {
	  SongFactory.getSongList($rootScope.user.uid).then((itemz) => {
	    $scope.songs = itemz;
	  }).catch((error) => {
	    console.log("get error", error);
	  });
	};

	getSongs();

  $scope.deleteSelected = (id) => {
    SongFactory.deleteSong(id).then(() => {
      getSongs();
    }).catch((error) => {
      console.log("delete Item error", error);
    });
  };

});