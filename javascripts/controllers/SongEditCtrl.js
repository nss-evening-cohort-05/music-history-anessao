app.controller("SongEditCtrl", function($location, $routeParams, $scope, SongFactory) {
  $scope.newSong = {};

  SongFactory.getSingleSong($routeParams.id).then((results) => {
  	$scope.newSong = results.data;
  })
  .catch((error) => {
  	console.log("getSingleItem error ", error);
  });
  $scope.addNewSong = () => {
  	SongFactory.editSong($scope.newSong).then(() => {
  		$location.url('/songs/list');
  	}).catch((error) => {
  		console.log("edit item error", error);
  	});
  };
});