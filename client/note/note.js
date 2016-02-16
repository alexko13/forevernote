angular.module('note', [])

.controller('NoteController', function ($scope, $location, Note) {
  $scope.allNotes = [];
  $scope.note = {
    title: '',
    text: ''
  };
  
  $scope.saveNote = function() {
    Note.saveNote($scope.note)
    .then(function(resp) {
      console.log(resp);
      $location.url('/display-notes');
    })
    .catch(function(err) {
      console.error(err);
    });
  };

  $scope.getNotes = function() {
    Note.getNotes()
    .then(function(resp) {
      console.log(resp);
      $scope.allNotes = resp.data;
    })
    .catch(function(err) {
      console.error(err);
    });
  };

});
