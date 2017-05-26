app.controller("SongDetailCtrl", function($routeParams, $scope, SongFactory) {
  $scope.selectedItem = {};

  SongFactory.getSingleSong($routeParams.id).then((results) => {
  	$scope.selectedItem = results.data;
  	console.log("results of detail", results.data);
  })
  .catch((error) => {
  	console.log("getSingleItem error ", error);
  });
});