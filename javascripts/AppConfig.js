app.run(function(FIREBASE_CONFIG) {
  firebase.initializeApp(FIREBASE_CONFIG);
});

app.config(function($routeProvider) {
  $routeProvider
    .when('/songs/list', {
      templateUrl: 'partials/song-list.html',
      controller: 'SongListCtrl'
    })
    .when('/song/new', {
      templateUrl: 'partials/new-song.html',
      controller: 'SongNewCtrl'
    })
    .when('/song/view/:id', {
      templateUrl: 'partials/view-item.html',
      controller: 'SongDetailCtrl'
    })
    .when('/song/edit/:id', {
      templateUrl: 'partials/new-song.html',
      controller: 'SongEditCtrl'
    })
    .otherwise('/songs/list');
});