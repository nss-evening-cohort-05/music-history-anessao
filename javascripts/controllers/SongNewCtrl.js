app.controller("SongNewCtrl", function($location, $scope, SongFactory) {
	$scope.addNewSong = () => {
    SongFactory.postNewSong($scope.newSong).then(() => {
      $scope.newSong = {};
      $location.url("/songs/list");
    }).catch((error) => {
        console.log("add error", error);
    });
  };
});