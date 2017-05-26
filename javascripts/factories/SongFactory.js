app.factory("SongFactory", function($q, $http, FIREBASE_CONFIG){

let getSingleSong = (id) => {
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/songs/${id}.json`)
      .then((resultz) => {
        resultz.data.id = id;
        resolve(resultz);
      }).catch((error) => {
        reject(error);
      });
    });
  };

let getSongList = (userId) => {
    let songz = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/songs.json?orderBy="uid"&equalTo="${userId}"`)
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

  let postNewSong = (newSong) => {
    return $q((resolve, reject) => {
      $http.post(`${FIREBASE_CONFIG.databaseURL}/songs.json`, JSON.stringify(newSong))
      .then((results) => {
        resolve(results);
      })
      .catch((error) => {
        reject(error);
      });
    });
  };


  let deleteSong = (itemId) => {
    return $q((resolve, reject) => {
    $http.delete(`${FIREBASE_CONFIG.databaseURL}/songs/${itemId}.json`)
    .then((results) => {
      resolve(results);
    })
    .catch((error) => {
      reject(error);
    });
    });
  };

  let editSong = (item) => {
    return $q((resolve, reject) => {
      $http.put(`${FIREBASE_CONFIG.databaseURL}/songs/${item.id}.json`, JSON.stringify({
        "artist": item.artist,
        "album": item.album,
        "song": item.song,
        "uid": item.uid
      })).then((results) => {
        resolve(results);
      }).catch((error) => {
        reject(error);
      });
    });
  };

  return {getSongList:getSongList, postNewSong:postNewSong, deleteSong:deleteSong, editSong:editSong, getSingleSong:getSingleSong};

});