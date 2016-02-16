angular.module('note', [])

.controller('NoteController', function ($scope, Note) {
  $scope.allNotes = [];
  $scope.note = {
    title: '',
    text: ''
  };
  
  $scope.saveNote = function() {
    Note.saveNote($scope.note)
    .then(function(resp) {
      console.log(resp);
    })
    .catch(function(err) {
      console.error(err);
    });
  };

  $scope.getNotes = function() {
    console.log('GET ALL NOTES ......');
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
