angular.module('note', [])

.controller('NoteController', function ($scope, $location, Note, Notebook) {
  $scope.allNotes = [];
  $scope.note = {
    title: '',
    text: ''
  };

  $scope.currentNotebook = Notebook.currentNotebook.title;
  
  $scope.saveNote = function() {
    $scope.note.notebook = Notebook.currentNotebook;
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
    Note.getNotes(Notebook.currentNotebook)
    .then(function(resp) {
      console.log(resp);
      $scope.allNotes = resp.data.notes;
    })
    .catch(function(err) {
      console.error(err);
    });
  };

  $scope.goToNewNote = function() {
    $location.url('/new-note');
  };

});
