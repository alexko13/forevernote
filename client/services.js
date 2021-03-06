angular.module('services', [])

.factory('Note', function($http) {

  var getNotes = function(notebook) {
    return $http({
      method: 'GET',
      url: '/api/note',
      params: notebook
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
})

.factory('Notebook', function($http) {

  var currentNotebook= {};

  var getNotebooks = function() {
    return $http({
      method: 'GET',
      url: '/api/notebook'
    }).then(function (resp) {
      return resp;
    });
  };
  
  var saveNotebook = function(notebook) {
    return $http({
      method: 'POST',
      url: '/api/notebook',
      data: notebook
    }).then(function (resp) {
      return resp;
    });
  };
  
  return {
    currentNotebook: currentNotebook,
    getNotebooks: getNotebooks,
    saveNotebook: saveNotebook
  };
});
