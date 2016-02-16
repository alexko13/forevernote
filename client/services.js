angular.module('services', [])

.factory('Note', function($http) {

  var getNotes = function() {
    return $http({
      method: 'GET',
      url: '/api/note'
    }).then(function (resp) {
      return resp;
    });
  };
  
  var saveNote = function(note) {
    return $http({
      method: 'POST',
      url: '/api/note',
      data: note
    }).then(function (resp) {
      return resp;
    });
  };
  
  return {
    getNotes: getNotes,
    saveNote: saveNote
  };
});
