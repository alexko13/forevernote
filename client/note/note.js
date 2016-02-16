angular.module('note', [])

.controller('NoteController', function ($scope, Note) {
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

});
