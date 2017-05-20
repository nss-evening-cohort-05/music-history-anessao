app.factory("SongFactory", function($q, $http, FIREBASE_CONFIG){

let getSongList = () => {
    let songz = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/songs.json`)
      .then((fbItems) => {
        let itemCollection = fbItems.data;
          if (itemCollection !== null){
            Object.keys(itemCollection).forEach((key) => {
              itemCollection[key].id=key;
              songz.push(itemCollection[key]);
            });
          }
          console.log("songz", songz);
        resolve(songz);
      })
      .catch((fbError) => {
        reject(fbError);
      });
    });
  };

  return {getSongList:getSongList};

});