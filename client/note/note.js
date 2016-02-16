angular.module('note', [])

.controller('NoteController', function ($scope, Note) {
  $scope.note = '';
  
  $scope.saveNote = function() {
    console.log('Saving Note ...');
    console.log($scope.note);

    Note.saveNote({text: $scope.note})
    .then(function(resp) {
      console.log(resp);
    })
    .catch(function(err) {
      console.error(err);
    });

  };

});
