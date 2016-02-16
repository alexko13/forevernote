angular.module('note', [])

.controller('NoteController', function ($scope) {
  $scope.note = '';
  
  $scope.saveNote = function() {
    console.log('Saving Note ...');
    console.log($scope.note);
  };
});
